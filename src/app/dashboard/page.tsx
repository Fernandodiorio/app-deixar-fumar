'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/lib/supabase';
import { Task, Progress as ProgressType } from '@/types';
import { Heart, Cigarette, TrendingUp, Calendar, CheckCircle, Clock } from 'lucide-react';

export default function DashboardPage() {
  const { user, signOut, loading } = useAuth();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [progress, setProgress] = useState<ProgressType | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      fetchTasks();
      fetchProgress();
    }
  }, [user]);

  const fetchTasks = async () => {
    const { data } = await supabase
      .from('tasks')
      .select('*')
      .eq('user_id', user!.id)
      .eq('completed', false)
      .limit(5);

    setTasks(data || []);
  };

  const fetchProgress = async () => {
    const today = new Date().toISOString().split('T')[0];
    const { data } = await supabase
      .from('progress')
      .select('*')
      .eq('user_id', user!.id)
      .eq('date', today)
      .single();

    setProgress(data);
  };

  const completeTask = async (taskId: string) => {
    await supabase
      .from('tasks')
      .update({ completed: true, completed_at: new Date().toISOString() })
      .eq('id', taskId);

    fetchTasks();
    fetchProgress();
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">A carregar...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950 dark:to-teal-950 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Olá, {user.name || 'Utilizador'}!
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Continua a tua jornada para uma vida sem fumo.
            </p>
          </div>
          <Button variant="outline" onClick={signOut}>
            Sair
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cigarros Evitados Hoje</CardTitle>
              <Cigarette className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{progress?.cigarettes_smoked || 0}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dinheiro Poupado</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">€{progress?.money_saved || 0}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tarefas Completadas</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{progress?.tasks_completed || 0}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Streak Atual</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{progress?.streak || 0} dias</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Micro-tarefas de Hoje</CardTitle>
              <CardDescription>
                Completa estas tarefas para ganhar pontos e manter o foco.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {tasks.length === 0 ? (
                <p className="text-gray-500">Nenhuma tarefa pendente. Parabéns!</p>
              ) : (
                tasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h3 className="font-medium">{task.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{task.description}</p>
                      <Badge variant="secondary" className="mt-1">
                        +{task.points} pontos
                      </Badge>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => completeTask(task.id)}
                      className="bg-green-500 hover:bg-green-600"
                    >
                      <CheckCircle className="w-4 h-4" />
                    </Button>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Progresso Semanal</CardTitle>
              <CardDescription>
                O teu progresso nos últimos 7 dias.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Meta Semanal</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="text-center">
                  <Heart className="w-12 h-12 mx-auto mb-2 text-red-500" />
                  <p className="text-lg font-semibold">Continua assim!</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Estás no caminho certo para uma vida mais saudável.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}