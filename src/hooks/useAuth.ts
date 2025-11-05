import { create } from 'zustand';
import { supabase } from '@/lib/supabase';
import { User } from '@/types';

interface AuthState {
  user: User | null;
  loading: boolean;
  initialized: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name?: string) => Promise<void>;
  signOut: () => Promise<void>;
  initialize: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

export const useAuth = create<AuthState>((set, get) => ({
  user: null,
  loading: true,
  initialized: false,

  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    // Fetch user profile
    let { data: profile } = await supabase
      .from('users')
      .select('*')
      .eq('id', data.user.id)
      .single();

    // Se o perfil não existe, criar agora
    if (!profile) {
      const { data: newProfile, error: createError } = await supabase
        .from('users')
        .insert({
          id: data.user.id,
          email: email,
          name: data.user.user_metadata?.name || null,
          onboarding_completed: false,
        })
        .select()
        .single();

      if (!createError && newProfile) {
        profile = newProfile;
      }
    }

    set({ user: profile || null });
  },

  signUp: async (email: string, password: string, name?: string) => {
    // Criar usuário no Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name || null,
        },
      },
    });

    if (authError) throw authError;

    if (!authData.user) {
      throw new Error('Failed to create user');
    }

    // Aguardar para garantir que a sessão está estabelecida e o trigger executou
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Verificar se a sessão está ativa
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      // Se não há sessão, aguardar mais um pouco
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Tentar buscar o perfil (trigger deve ter criado)
    let profile = null;
    
    // Tentar buscar várias vezes com delay crescente
    for (let attempt = 0; attempt < 5; attempt++) {
      const { data: fetchedProfile, error: fetchError } = await supabase
        .from('users')
        .select('*')
        .eq('id', authData.user.id)
        .maybeSingle();

      if (fetchedProfile && !fetchError) {
        profile = fetchedProfile;
        break;
      }

      // Se ainda não encontrou, aguardar antes de tentar criar manualmente
      if (attempt < 4) {
        await new Promise(resolve => setTimeout(resolve, 500 * (attempt + 1)));
      }
    }

    // Se ainda não encontrou, tentar criar manualmente
    if (!profile) {
      const { data: newProfile, error: createError } = await supabase
        .from('users')
        .insert({
          id: authData.user.id,
          email: email,
          name: name || null,
          onboarding_completed: false,
        })
        .select()
        .single();

      if (createError) {
        // Se der erro de conflito ou RLS, o trigger deve ter criado
        // Tentar buscar uma última vez
        if (createError.code === '23505' || createError.code === '42501') {
          await new Promise(resolve => setTimeout(resolve, 1000));
          const { data: finalProfile } = await supabase
            .from('users')
            .select('*')
            .eq('id', authData.user.id)
            .maybeSingle();
          
          if (finalProfile) {
            profile = finalProfile;
          }
        }
        
        // Se ainda não tem perfil, criar um objeto temporário
        // O perfil será criado no onboarding ou no primeiro login
        if (!profile) {
          profile = {
            id: authData.user.id,
            email: email,
            name: name || null,
            onboarding_completed: false,
          } as User;
        }
      } else {
        profile = newProfile;
      }
    }

    set({ user: profile });
  },

  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },

  initialize: async () => {
    // Prevent multiple initializations
    if (get().initialized) return;

    set({ initialized: true });

    // Check current session first
    const { data: { session } } = await supabase.auth.getSession();
    
    if (session?.user) {
      let { data: profile } = await supabase
        .from('users')
        .select('*')
        .eq('id', session.user.id)
        .maybeSingle();

      // Se o perfil não existe, criar agora
      if (!profile) {
        const { data: newProfile, error: createError } = await supabase
          .from('users')
          .insert({
            id: session.user.id,
            email: session.user.email || '',
            name: session.user.user_metadata?.name || null,
            onboarding_completed: false,
          })
          .select()
          .single();

        if (!createError && newProfile) {
          profile = newProfile;
        }
      }

      set({ user: profile || null, loading: false });
    } else {
      set({ user: null, loading: false });
    }

    // Listen for auth changes
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        let { data: profile } = await supabase
          .from('users')
          .select('*')
          .eq('id', session.user.id)
          .maybeSingle();

        // Se o perfil não existe, criar agora
        if (!profile) {
          const { data: newProfile, error: createError } = await supabase
            .from('users')
            .insert({
              id: session.user.id,
              email: session.user.email || '',
              name: session.user.user_metadata?.name || null,
              onboarding_completed: false,
            })
            .select()
            .single();

          if (!createError && newProfile) {
            profile = newProfile;
          }
        }

        set({ user: profile || null, loading: false });
      } else {
        set({ user: null, loading: false });
      }
    });
  },

  refreshUser: async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (session?.user) {
      const { data: profile } = await supabase
        .from('users')
        .select('*')
        .eq('id', session.user.id)
        .maybeSingle();

      if (profile) {
        set({ user: profile });
      }
    }
  },
}));