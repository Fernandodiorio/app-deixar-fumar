'use client'

import { useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'

export function AuthInitializer() {
  const { initialize } = useAuth()

  useEffect(() => {
    initialize().catch(console.error)
  }, [initialize])

  return null
}
