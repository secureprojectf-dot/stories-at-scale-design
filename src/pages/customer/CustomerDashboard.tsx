import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FolderKanban, CheckCircle2, Clock, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CustomerDashboard() {
  const [userName, setUserName] = useState('Customer');

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user?.user_metadata?.full_name) {
        setUserName(user.user_metadata.full_name);
      }
    };
    getUser();
  }, []);

  const stats = [
    { label: 'Active Projects', value: '3', icon: FolderKanban, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { label: 'Completed', value: '12', icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: 'Pending Review', value: '2', icon: Clock, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'Support Tickets', value: '1', icon: MessageSquare, color: 'text-violet-400', bg: 'bg-violet-500/10' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Welcome Header */}
      <motion.div variants={itemVariants}>
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">
          Welcome back, {userName}!
        </h1>
        <p className="text-zinc-500">Here's an overview of your projects and activities.</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-zinc-900/50 border-zinc-800">
            <CardContent className="p-6">
              <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mb-4`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <p className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-zinc-500">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Recent Activity */}
      <motion.div variants={itemVariants}>
        <Card className="bg-zinc-900/50 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-white">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: 'Project "Brand Refresh" updated', time: '2 hours ago', type: 'update' },
                { title: 'New deliverable ready for review', time: '5 hours ago', type: 'review' },
                { title: 'Support ticket resolved', time: '1 day ago', type: 'resolved' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/30">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <div className="flex-1">
                    <p className="text-sm text-white">{activity.title}</p>
                    <p className="text-xs text-zinc-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
