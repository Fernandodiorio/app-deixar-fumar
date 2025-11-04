// Note: Types are defined here for backward compatibility
// types/index.ts contains the full type definitions

export interface User {
  id: string;
  email: string;
  name?: string;
  onboarding_completed: boolean;
  created_at?: string;
  updated_at?: string;
  cigarettes_per_day?: number;
  goal?: 'stop' | 'reduce';
  method?: string;
  premium?: boolean;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  initialized: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name?: string) => Promise<void>;
  signOut: () => Promise<void>;
  initialize: () => Promise<void>;
}

export interface Task {
  id: string;
  user_id: string;
  title: string;
  description: string;
  points: number;
  completed: boolean;
  completed_at?: string;
  created_at: string;
}

export interface Progress {
  id: string;
  user_id: string;
  date: string;
  cigarettes_smoked: number;
  money_saved: number;
  tasks_completed: number;
  streak: number;
  created_at: string;
}