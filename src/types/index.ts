export interface User {
  id: string;
  email: string;
  name?: string;
  created_at: string;
  updated_at: string;
  onboarding_completed: boolean;
  cigarettes_per_day?: number;
  goal?: 'stop' | 'reduce';
  method?: string;
  premium?: boolean;
}

export interface Task {
  id: string;
  user_id: string;
  title: string;
  description: string;
  type: 'breathing' | 'water' | 'write' | 'walk' | 'refuse' | 'contact' | 'other';
  completed: boolean;
  completed_at?: string;
  points: number;
  day: number;
  created_at: string;
}

export interface CigaretteLog {
  id: string;
  user_id: string;
  date: string;
  location?: string;
  mood: 'happy' | 'sad' | 'stressed' | 'neutral';
  created_at: string;
}

export interface Craving {
  id: string;
  user_id: string;
  intensity: number;
  trigger?: string;
  suggestion?: string;
  resolved: boolean;
  created_at: string;
}

export interface Progress {
  id: string;
  user_id: string;
  date: string;
  cigarettes_smoked: number;
  tasks_completed: number;
  points_earned: number;
  money_saved: number;
  time_gained: string;
  streak: number;
}

export interface CommunityPost {
  id: string;
  user_id: string;
  plan_type: '7days' | '30days' | 'custom';
  content: string;
  anonymous: boolean;
  created_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  plan: 'free' | 'premium';
  start_date: string;
  end_date?: string;
  active: boolean;
}