-- ============================================
-- RESPIRAPT - Setup Completo do Banco de Dados
-- ============================================
-- Copie TODO este arquivo e cole no SQL Editor do Supabase
-- Depois clique em "Run" ou pressione Ctrl+Enter
-- ============================================

-- ============================================
-- 1. Tabela USERS
-- ============================================

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  name TEXT,
  onboarding_completed BOOLEAN DEFAULT false,
  cigarettes_per_day INTEGER,
  goal TEXT CHECK (goal IN ('stop', 'reduce')),
  method TEXT,
  premium BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar Row Level Security para users
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Políticas de segurança para users
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON users
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Trigger para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at 
  BEFORE UPDATE ON users
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 2. Tabela TASKS
-- ============================================

CREATE TABLE IF NOT EXISTS tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  type TEXT CHECK (type IN ('breathing', 'water', 'write', 'walk', 'refuse', 'contact', 'other')),
  completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMP WITH TIME ZONE,
  points INTEGER DEFAULT 0,
  day INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar Row Level Security para tasks
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

-- Políticas de segurança para tasks
CREATE POLICY "Users can view own tasks" ON tasks
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own tasks" ON tasks
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own tasks" ON tasks
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own tasks" ON tasks
  FOR DELETE USING (auth.uid() = user_id);

-- Índices para melhor performance
CREATE INDEX IF NOT EXISTS tasks_user_id_idx ON tasks(user_id);
CREATE INDEX IF NOT EXISTS tasks_completed_idx ON tasks(completed);
CREATE INDEX IF NOT EXISTS tasks_user_completed_idx ON tasks(user_id, completed);

-- ============================================
-- 3. Tabela PROGRESS
-- ============================================

CREATE TABLE IF NOT EXISTS progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  cigarettes_smoked INTEGER DEFAULT 0,
  tasks_completed INTEGER DEFAULT 0,
  points_earned INTEGER DEFAULT 0,
  money_saved DECIMAL(10, 2) DEFAULT 0,
  time_gained TEXT,
  streak INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, date)
);

-- Habilitar Row Level Security para progress
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;

-- Políticas de segurança para progress
CREATE POLICY "Users can view own progress" ON progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own progress" ON progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON progress
  FOR UPDATE USING (auth.uid() = user_id);

-- Índices para melhor performance
CREATE INDEX IF NOT EXISTS progress_user_id_idx ON progress(user_id);
CREATE INDEX IF NOT EXISTS progress_date_idx ON progress(date);
CREATE INDEX IF NOT EXISTS progress_user_date_idx ON progress(user_id, date);

-- ============================================
-- 4. Tabela CIGARETTE_LOGS (opcional - para histórico)
-- ============================================

CREATE TABLE IF NOT EXISTS cigarette_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  location TEXT,
  mood TEXT CHECK (mood IN ('happy', 'sad', 'stressed', 'neutral')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE cigarette_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own cigarette logs" ON cigarette_logs
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own cigarette logs" ON cigarette_logs
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS cigarette_logs_user_id_idx ON cigarette_logs(user_id);
CREATE INDEX IF NOT EXISTS cigarette_logs_date_idx ON cigarette_logs(date);

-- ============================================
-- 5. Tabela CRAVINGS (opcional - para rastrear vontades)
-- ============================================

CREATE TABLE IF NOT EXISTS cravings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  intensity INTEGER CHECK (intensity >= 1 AND intensity <= 10),
  trigger TEXT,
  suggestion TEXT,
  resolved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE cravings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own cravings" ON cravings
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own cravings" ON cravings
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own cravings" ON cravings
  FOR UPDATE USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS cravings_user_id_idx ON cravings(user_id);
CREATE INDEX IF NOT EXISTS cravings_resolved_idx ON cravings(resolved);

-- ============================================
-- FIM DO SETUP
-- ============================================
-- Verifique no Table Editor se todas as tabelas foram criadas
-- Procure por um ícone de escudo verde ao lado de cada tabela (indica RLS ativado)
-- ============================================
