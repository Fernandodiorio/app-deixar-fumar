'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { 
  Heart, 
  TrendingUp, 
  Calendar, 
  Award, 
  Target, 
  Clock, 
  Euro, 
  Cigarette,
  CheckCircle2,
  Circle,
  Star,
  Trophy,
  Flame,
  Droplets,
  Wind,
  Users,
  Plus,
  Minus
} from 'lucide-react'

interface DailyTask {
  id: string
  title: string
  description: string
  points: number
  completed: boolean
  icon: string
}

interface UserStats {
  daysWithoutSmoking: number
  cigarettesAvoided: number
  moneySaved: number
  healthMinutesGained: number
  currentStreak: number
  totalPoints: number
  level: number
}

export default function RespiraPT() {
  const { user, loading } = useAuth()
  const router = useRouter()

  // Redirect se não estiver autenticado
  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login')
    } else if (!loading && user) {
      // Se o usuário não completou o onboarding, redirecionar
      if (!user.onboarding_completed) {
        router.push('/onboarding')
      } else {
        // Se já completou, redirecionar para o dashboard
        router.push('/dashboard')
      }
    }
  }, [user, loading, router])

  const [userStats, setUserStats] = useState<UserStats>({
    daysWithoutSmoking: 7,
    cigarettesAvoided: 140,
    moneySaved: 84,
    healthMinutesGained: 1680,
    currentStreak: 7,
    totalPoints: 850,
    level: 3
  })

  const [dailyTasks, setDailyTasks] = useState<DailyTask[]>([
    {
      id: '1',
      title: 'Respirar profundamente',
      description: 'Faça 5 respirações profundas e conscientes',
      points: 10,
      completed: true,
      icon: 'wind'
    },
    {
      id: '2',
      title: 'Beber um copo de água',
      description: 'Hidrate-se para eliminar toxinas',
      points: 5,
      completed: true,
      icon: 'droplets'
    },
    {
      id: '3',
      title: 'Caminhar 5 minutos',
      description: 'Uma pequena caminhada para oxigenar o corpo',
      points: 15,
      completed: false,
      icon: 'heart'
    },
    {
      id: '4',
      title: 'Escrever um motivo',
      description: 'Anote porque quer deixar de fumar',
      points: 20,
      completed: false,
      icon: 'star'
    }
  ])

  const [cigarettesToday, setCigarettesToday] = useState(0)
  const [showCravingHelp, setShowCravingHelp] = useState(false)

  // Mostrar loading enquanto verifica autenticação
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">A carregar...</p>
        </div>
      </div>
    )
  }

  // Não renderizar nada enquanto redireciona
  if (!user) {
    return null
  }

  const toggleTask = (taskId: string) => {
    setDailyTasks(prev => prev.map(task => {
      if (task.id === taskId) {
        const newCompleted = !task.completed
        if (newCompleted) {
          setUserStats(prevStats => ({
            ...prevStats,
            totalPoints: prevStats.totalPoints + task.points
          }))
        } else {
          setUserStats(prevStats => ({
            ...prevStats,
            totalPoints: Math.max(0, prevStats.totalPoints - task.points)
          }))
        }
        return { ...task, completed: newCompleted }
      }
      return task
    }))
  }

  const getIconComponent = (iconName: string) => {
    const icons = {
      wind: Wind,
      droplets: Droplets,
      heart: Heart,
      star: Star
    }
    const IconComponent = icons[iconName as keyof typeof icons] || Circle
    return <IconComponent size={20} />
  }

  const completedTasks = dailyTasks.filter(task => task.completed).length
  const progressPercentage = (completedTasks / dailyTasks.length) * 100

  const cravingTips = [
    "Respire fundo 10 vezes seguidas",
    "Beba um copo de água gelada",
    "Escove os dentes",
    "Faça 20 flexões ou polichinelos",
    "Ligue para um amigo ou familiar",
    "Mastigue uma pastilha ou chiclete"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            RespiraPT
          </h1>
          <p className="text-teal-600 dark:text-teal-400 font-medium">
            A sua jornada para uma vida sem tabaco
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-teal-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="text-teal-600 dark:text-teal-400" size={24} />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {userStats.daysWithoutSmoking}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Dias sem fumar</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-orange-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <Cigarette className="text-orange-500" size={24} />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {userStats.cigarettesAvoided}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Cigarros evitados</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-green-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <Euro className="text-green-600 dark:text-green-400" size={24} />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                €{userStats.moneySaved}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Euros poupados</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-blue-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <Clock className="text-blue-600 dark:text-blue-400" size={24} />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {Math.floor(userStats.healthMinutesGained / 60)}h
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Vida recuperada</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Daily Tasks */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Tarefas de Hoje
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
                  <span className="text-sm font-bold text-teal-600 dark:text-teal-400">
                    {completedTasks}/{dailyTasks.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                <span>Progresso diário</span>
                <span>{Math.round(progressPercentage)}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* Tasks List */}
            <div className="space-y-3">
              {dailyTasks.map(task => (
                <div 
                  key={task.id}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 cursor-pointer hover:shadow-md ${
                    task.completed 
                      ? 'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-700' 
                      : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                  onClick={() => toggleTask(task.id)}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    task.completed 
                      ? 'bg-teal-500 text-white' 
                      : 'bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400'
                  }`}>
                    {task.completed ? <CheckCircle2 size={20} /> : getIconComponent(task.icon)}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`font-medium ${
                      task.completed 
                        ? 'text-teal-700 dark:text-teal-300 line-through' 
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {task.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {task.description}
                    </p>
                  </div>
                  
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                    task.completed 
                      ? 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400' 
                      : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                  }`}>
                    <Star size={12} />
                    {task.points}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            
            {/* Level & Points */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Trophy size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Nível {userStats.level}</h3>
                    <p className="text-orange-100">Guerreiro da Saúde</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{userStats.totalPoints}</div>
                  <div className="text-orange-100 text-sm">pontos</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Flame className="text-orange-200" size={16} />
                <span className="text-sm">Sequência atual: {userStats.currentStreak} dias</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Ações Rápidas
              </h3>
              
              {/* Cigarette Counter */}
              <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-red-700 dark:text-red-300">
                    Cigarros hoje
                  </span>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setCigarettesToday(Math.max(0, cigarettesToday - 1))}
                      className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-xl font-bold text-red-700 dark:text-red-300 min-w-[2rem] text-center">
                      {cigarettesToday}
                    </span>
                    <button 
                      onClick={() => setCigarettesToday(cigarettesToday + 1)}
                      className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                {cigarettesToday === 0 && (
                  <p className="text-xs text-green-600 dark:text-green-400">
                    🎉 Excelente! Zero cigarros hoje!
                  </p>
                )}
              </div>

              {/* Craving Help */}
              <button
                onClick={() => setShowCravingHelp(!showCravingHelp)}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 mb-4"
              >
                {showCravingHelp ? 'Fechar Ajuda' : 'Tenho Vontade de Fumar!'}
              </button>

              {showCravingHelp && (
                <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-4 border border-teal-200 dark:border-teal-800">
                  <h4 className="font-medium text-teal-700 dark:text-teal-300 mb-3">
                    Experimente uma destas técnicas:
                  </h4>
                  <div className="space-y-2">
                    {cravingTips.slice(0, 3).map((tip, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400">
                        <CheckCircle2 size={16} />
                        {tip}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Motivational Message */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="text-pink-200" size={24} />
                <h3 className="font-semibold">Mensagem do Dia</h3>
              </div>
              <p className="text-blue-100">
                "Já poupou €{userStats.moneySaved} e evitou {userStats.cigarettesAvoided} cigarros! 
                Cada dia sem fumar é uma vitória para a sua saúde. Continue assim! 💪"
              </p>
            </div>

          </div>
        </div>

        {/* Community Preview */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Comunidade RespiraPT
            </h3>
            <Users className="text-teal-600 dark:text-teal-400" size={24} />
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-teal-50 dark:bg-teal-900/20 rounded-xl">
              <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">1.247</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Membros ativos</div>
            </div>
            <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">89%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Taxa de sucesso</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Apoio disponível</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}