import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { z } from 'zod';
import { Loader2, ChevronRight, X } from 'lucide-react';

const emailSchema = z.string().email('Enter a valid email');
const passwordSchema = z.string().min(6, 'Minimum 6 characters');

type RoleType = 'customer' | 'team' | 'admin';

export default function AuthPage() {
  const { role } = useParams<{ role: string }>();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({ email: '', password: '', fullName: '' });
  const [errors, setErrors] = useState({ email: '', password: '', fullName: '' });

  const currentRole = (role as RoleType) || 'customer';

  // Logic: Redirect if session exists
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) redirectBasedOnRole(currentRole);
    };
    checkAuth();
  }, [currentRole]);

  const redirectBasedOnRole = (role: RoleType) => {
    const paths = { admin: '/admin/dashboard', team: '/team/dashboard', customer: '/customer/dashboard' };
    navigate(paths[role] || '/customer/dashboard');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
        if (error) throw error;
        toast.success('Welcome back');
      } else {
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: { full_name: formData.fullName, role: currentRole },
          },
        });
        if (error) throw error;
        toast.success('Please check your email');
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col font-sans selection:bg-yellow-400/30">
      
      {/* SIMPLE HEADER */}
      <header className="p-8 lg:p-12 flex justify-between items-center w-full fixed top-0 left-0">
        <Link to="/" className="text-sm font-black uppercase tracking-tighter">
          Dhasha Media <span className="text-zinc-600 font-medium ml-1">/ {currentRole}</span>
        </Link>
        
        <Link to="/" className="p-2 hover:bg-zinc-900 rounded-full transition-colors group">
          <X className="w-5 h-5 text-zinc-500 group-hover:text-white" />
        </Link>
      </header>

      {/* CENTERED FORM */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-[340px]">
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight mb-2">
              {isLogin ? 'Sign in' : 'Create account'}
            </h1>
            <p className="text-zinc-500 text-sm">
              {isLogin ? 'Enter your details to access the portal' : 'Sign up for access to the system'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                  <Input
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData(p => ({ ...p, fullName: e.target.value }))}
                    className="bg-transparent border-zinc-800 focus:border-yellow-400 h-12 rounded-none transition-all"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <Input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
              className="bg-transparent border-zinc-800 focus:border-yellow-400 h-12 rounded-none transition-all"
            />

            <Input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData(p => ({ ...p, password: e.target.value }))}
              className="bg-transparent border-zinc-800 focus:border-yellow-400 h-12 rounded-none transition-all"
            />

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-none mt-2 transition-all"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <span className="flex items-center gap-1 uppercase text-[11px] tracking-widest">
                  Continue <ChevronRight className="w-4 h-4" />
                </span>
              )}
            </Button>
          </form>

          <div className="mt-8">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-xs text-zinc-500 hover:text-white transition-colors"
            >
              {isLogin ? "Need an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="p-8 text-center">
        <p className="text-[10px] text-zinc-700 uppercase tracking-widest font-medium">
          Secure Access Protocol 8.42
        </p>
      </footer>
    </div>
  );
}
