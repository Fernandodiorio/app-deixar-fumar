-- ============================================
-- FIX RLS - Criação Automática de Perfil de Usuário
-- ============================================
-- Execute este SQL no Supabase para corrigir o erro de RLS
-- quando criar uma nova conta
-- ============================================

-- Função que cria automaticamente o perfil do usuário
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, name, onboarding_completed)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'name', NULL),
    false
  )
  ON CONFLICT (id) DO NOTHING; -- Evita erro se o usuário já existir
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger que executa a função quando um novo usuário é criado
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- ============================================
-- ALTERNATIVA: Se ainda houver problemas, 
-- você pode temporariamente permitir que o 
-- serviço role insira (não recomendado para produção)
-- ============================================

-- Comentar a política existente e criar uma nova mais permissiva
-- DROP POLICY IF EXISTS "Users can insert own profile" ON users;
-- CREATE POLICY "Users can insert own profile" ON users
--   FOR INSERT 
--   WITH CHECK (true);

-- ============================================
-- IMPORTANTE: Depois de executar este script,
-- teste criando uma nova conta.
-- Se ainda houver problemas, verifique se o
-- trigger está funcionando no Supabase:
-- Dashboard > Database > Triggers
-- ============================================
