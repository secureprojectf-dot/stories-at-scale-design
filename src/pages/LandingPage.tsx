import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Briefcase, Shield, ArrowRight, Sparkles } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  const portals = [
    {
      id: 'customer',
      title: 'Customer Portal',
      label: 'Client Access',
      description: 'Track your projects, review deliverables, and communicate with our team in real-time.',
      path: '/auth/customer',
      icon: Users,
      gradient: 'from-amber-500/20 to-orange-600/20',
      accentColor: 'text-amber-400',
      borderColor: 'hover:border-amber-500/50',
    },
    {
      id: 'team',
      title: 'Team Portal',
      label: 'Internal Operations',
      description: 'Access production pipelines, manage tasks, and collaborate on active projects.',
      path: '/auth/team',
      icon: Briefcase,
      gradient: 'from-emerald-500/20 to-teal-600/20',
      accentColor: 'text-emerald-400',
      borderColor: 'hover:border-emerald-500/50',
    },
    {
      id: 'admin',
      title: 'Admin Console',
      label: 'System Control',
      description: 'Full platform oversight with user management, analytics, and configuration tools.',
      path: '/auth/admin',
      icon: Shield,
      gradient: 'from-violet-500/20 to-purple-600/20',
      accentColor: 'text-violet-400',
      borderColor: 'hover:border-violet-500/50',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-400/30 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-amber-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-gradient-to-tr from-violet-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-gradient-to-tl from-emerald-500/5 to-transparent blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl"
      >
        <div className="container mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-zinc-900" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Dhasha Media
              </span>
            </div>
            <div className="hidden sm:block h-5 w-px bg-zinc-800" />
            <span className="hidden sm:block text-xs font-medium text-zinc-500 uppercase tracking-widest">
              Management Platform
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] text-zinc-400 font-medium">All Systems Operational</span>
            </div>
          </div>
        </div>
      </motion.nav>

      <main className="relative z-10 container mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Secure Access Portal
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Welcome to your
            <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              creative workspace
            </span>
          </h1>
          
          <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
            Choose your portal to access project management, team collaboration, and platform administration tools.
          </p>
        </motion.div>

        {/* Portal Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-4 lg:gap-6"
        >
          {portals.map((portal) => {
            const IconComponent = portal.icon;
            return (
              <motion.button
                key={portal.id}
                variants={itemVariants}
                onClick={() => navigate(portal.path)}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative flex flex-col items-start p-6 lg:p-8 bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/60 rounded-2xl transition-all duration-500 hover:bg-zinc-900/70 ${portal.borderColor} text-left overflow-hidden`}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${portal.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Glow Effect */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 w-full">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-5 h-5 ${portal.accentColor}`} />
                  </div>
                  
                  {/* Label */}
                  <span className={`text-[10px] font-bold ${portal.accentColor} tracking-[0.2em] uppercase mb-3 block`}>
                    {portal.label}
                  </span>
                  
                  {/* Title */}
                  <h2 className="text-xl lg:text-2xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                    {portal.title}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-sm text-zinc-500 leading-relaxed mb-8 group-hover:text-zinc-400 transition-colors">
                    {portal.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-zinc-500 group-hover:text-white transition-colors">
                    <span>Access Portal</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row gap-6 justify-between items-center text-xs text-zinc-600"
        >
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-zinc-500">© 2025 Dhasha Media Group</span>
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Support</a>
          </div>
          <div className="flex items-center gap-3 text-zinc-700">
            <span className="font-mono text-[10px]">v2.0.0</span>
            <div className="w-1 h-1 rounded-full bg-zinc-700" />
            <span className="font-mono text-[10px]">Secure Connection</span>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default LandingPage;
