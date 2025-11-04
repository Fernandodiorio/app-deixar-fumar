import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Valores hardcoded temporariamente para debug - REMOVER DEPOIS
const SUPABASE_URL = 'https://ggaixybbdvkrbsdhxhlb.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnYWl4eWJiZHZrcmJzZGh4aGxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNDIzOTAsImV4cCI6MjA3NzgxODM5MH0.6bOeHvdREPTBYR6VDyw8H_TXXJehdksfDQe9TmwkpZw'

const finalUrl = supabaseUrl || SUPABASE_URL
const finalKey = supabaseAnonKey || SUPABASE_ANON_KEY

if (!finalUrl || !finalKey) {
  console.error('Missing Supabase environment variables. Please check your .env.local file.')
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(finalUrl, finalKey)