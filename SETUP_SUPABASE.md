# 🚀 Guia de Configuração do Supabase - RespiraPT

Este guia mostra exatamente onde clicar e o que fazer para configurar o Supabase.

## 📋 Passo 1: Criar Conta e Projeto

1. Acesse: https://supabase.com
2. Clique em **"Start your project"** ou **"Sign in"**
3. Faça login com GitHub, Google ou crie uma conta
4. Depois de logado, clique em **"New Project"**
5. Preencha:
   - **Name**: `respirapt` (ou qualquer nome)
   - **Database Password**: Crie uma senha forte (GUARDE ELA!)
   - **Region**: Escolha mais próxima (ex: `West US (North California)`)
   - **Pricing Plan**: Free tier está bom para começar
6. Clique em **"Create new project"**
7. Aguarde 2-3 minutos enquanto o projeto é criado

---

## 🔑 Passo 2: Obter as Variáveis de Ambiente

1. No dashboard do projeto, clique em **"Settings"** (ícone de engrenagem) no menu lateral esquerdo
2. Clique em **"API"** (dentro de Settings)
3. Você verá duas seções importantes:

### 2.1. Project URL
- Procure por **"Project URL"**
- Copie a URL (algo como: `https://xxxxxxxxxxxxx.supabase.co`)
- Esta é sua `NEXT_PUBLIC_SUPABASE_URL`

### 2.2. API Keys
- Role a página até **"Project API keys"**
- Procure por **"anon public"** key
- Clique no ícone de **copiar** (ícone de dois quadrados sobrepostos) ao lado da chave
- Esta é sua `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 2.3. Criar arquivo .env.local

1. Na raiz do projeto `app-deixar-fumar/`, crie um arquivo chamado `.env.local`
2. Cole as variáveis:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**⚠️ IMPORTANTE**: Substitua pelos valores reais que você copiou!

---

## 🗄️ Passo 3: Criar as Tabelas

No Supabase, clique em **"SQL Editor"** no menu lateral esquerdo.

### 3.1. Criar Tabela `users`

1. Clique em **"New query"**
2. Cole este SQL:

```sql
-- Criar tabela users
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

-- Habilitar Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Política: usuários podem ver apenas seu próprio perfil
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid() = id);

-- Política: usuários podem atualizar apenas seu próprio perfil
CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE USING (auth.uid() = id);

-- Política: usuários podem inserir apenas seu próprio perfil
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

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

3. Clique em **"Run"** (botão verde no canto inferior direito) ou pressione `Ctrl + Enter`

### 3.2. Criar Tabela `tasks`

1. Crie uma nova query (ou adicione ao final da query anterior)
2. Cole este SQL:

```sql
-- Criar tabela tasks
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

-- Habilitar Row Level Security
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

-- Política: usuários podem ver apenas suas próprias tarefas
CREATE POLICY "Users can view own tasks" ON tasks
  FOR SELECT USING (auth.uid() = user_id);

-- Política: usuários podem criar apenas suas próprias tarefas
CREATE POLICY "Users can create own tasks" ON tasks
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Política: usuários podem atualizar apenas suas próprias tarefas
CREATE POLICY "Users can update own tasks" ON tasks
  FOR UPDATE USING (auth.uid() = user_id);

-- Política: usuários podem deletar apenas suas próprias tarefas
CREATE POLICY "Users can delete own tasks" ON tasks
  FOR DELETE USING (auth.uid() = user_id);

-- Criar índice para melhor performance
CREATE INDEX IF NOT EXISTS tasks_user_id_idx ON tasks(user_id);
CREATE INDEX IF NOT EXISTS tasks_completed_idx ON tasks(completed);
```

3. Execute o SQL

### 3.3. Criar Tabela `progress`

1. Crie uma nova query
2. Cole este SQL:

```sql
-- Criar tabela progress
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

-- Habilitar Row Level Security
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;

-- Política: usuários podem ver apenas seu próprio progresso
CREATE POLICY "Users can view own progress" ON progress
  FOR SELECT USING (auth.uid() = user_id);

-- Política: usuários podem criar apenas seu próprio progresso
CREATE POLICY "Users can create own progress" ON progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Política: usuários podem atualizar apenas seu próprio progresso
CREATE POLICY "Users can update own progress" ON progress
  FOR UPDATE USING (auth.uid() = user_id);

-- Criar índice para melhor performance
CREATE INDEX IF NOT EXISTS progress_user_id_idx ON progress(user_id);
CREATE INDEX IF NOT EXISTS progress_date_idx ON progress(date);
```

3. Execute o SQL

---

## 🔒 Passo 4: Verificar Row Level Security (RLS)

1. Clique em **"Table Editor"** no menu lateral
2. Você deve ver as 3 tabelas: `users`, `tasks`, `progress`
3. Clique em cada tabela e verifique se há um ícone de **escudo verde** ao lado do nome
   - Se houver escudo, RLS está ativado ✅
   - Se não houver, volte ao SQL Editor e execute os comandos `ALTER TABLE ... ENABLE ROW LEVEL SECURITY;`

---

## ✅ Passo 5: Testar a Configuração

1. Volte para seu projeto Next.js
2. No terminal, certifique-se de que o arquivo `.env.local` existe e tem as variáveis corretas
3. Reinicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse: http://localhost:3000
5. Tente criar uma conta em `/auth/register`

---

## 🐛 Troubleshooting (Solução de Problemas)

### Erro: "Missing Supabase environment variables"
- Verifique se o arquivo `.env.local` existe na raiz do projeto
- Verifique se as variáveis começam com `NEXT_PUBLIC_`
- Reinicie o servidor após criar/modificar `.env.local`

### Erro: "relation does not exist"
- Execute os scripts SQL novamente no SQL Editor
- Verifique se todas as tabelas foram criadas no Table Editor

### Erro: "permission denied"
- Verifique se o RLS está habilitado
- Verifique se as políticas foram criadas corretamente
- Certifique-se de que o usuário está autenticado ao fazer as requisições

### Não consigo ver os dados no Table Editor
- Isso é normal! O RLS protege os dados
- Use a aplicação para criar usuários e dados de teste
- Ou desative temporariamente o RLS apenas para testes (não recomendado em produção)

---

## 📸 Onde Encontrar Cada Coisa

### Para ver o código SQL:
- Menu lateral → **SQL Editor**

### Para ver os dados:
- Menu lateral → **Table Editor**

### Para ver as configurações:
- Menu lateral → **Settings** (engrenagem) → **API**

### Para ver autenticação:
- Menu lateral → **Authentication**

### Para ver logs:
- Menu lateral → **Logs**

---

## 🎉 Pronto!

Agora seu Supabase está configurado e pronto para uso. O projeto RespiraPT deve funcionar corretamente!
