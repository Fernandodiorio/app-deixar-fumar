-- ============================================
-- FIX RLS - Permitir UPSERT no perfil do usuário
-- ============================================
-- Execute este SQL no Supabase SQL Editor
-- para garantir que o usuário possa criar/atualizar
-- seu próprio perfil durante o onboarding
-- ============================================

-- Remover políticas antigas se existirem
DROP POLICY IF EXISTS "Users can insert own profile" ON users;
DROP POLICY IF EXISTS "Users can update own profile" ON users;
DROP POLICY IF EXISTS "Users can upsert own profile" ON users;

-- Política para INSERT (criar perfil)
CREATE POLICY "Users can insert own profile" ON users
  FOR INSERT 
  WITH CHECK (auth.uid() = id);

-- Política para UPDATE (atualizar perfil)
CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE 
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Política adicional para garantir que o usuário possa inserir
-- mesmo se o perfil não existir ainda (útil durante signup)
CREATE POLICY "Authenticated users can insert during onboarding" ON users
  FOR INSERT 
  WITH CHECK (
    auth.uid() = id AND 
    auth.role() = 'authenticated'
  );

-- ============================================
-- IMPORTANTE: Verifique no Supabase Dashboard:
-- 1. Authentication > Settings > Email Auth
--    - Desabilite "Enable email confirmations" para desenvolvimento
--    OU
-- 2. Confirme o email antes de fazer login
-- ============================================
