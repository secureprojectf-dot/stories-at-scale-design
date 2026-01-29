import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { z } from 'zod';
import { 
  ArrowLeft, 
  Mail, 
  Lock, 
  User,
  Users,
  Briefcase,
  Shield,
  Eye,
  EyeOff,
  Loader2,
  Sparkles
} from 'lucide-react';

const emailSchema = z.string().email('Please enter a valid email address');
const passwordSchema = z.string().min(6, 'Password must be at least 6 characters');

type RoleType = 'customer' | 'team' | 'admin';

const roleConfig: Record<RoleType, { 
  title: string; 
  icon: typeof Users; 
  gradient: string;
  accentColor: string;
  bgColor: string;
  description: string;
}> = {
  customer: {
    title: 'Customer Portal',
    icon: Users,
    gradient: 'from-amber-500 to-orange-600',
    accentColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    description: 'Access your projects and deliverables',
  },
  team: {
    title: 'Team Portal',
    icon: Briefcase,
    gradient: 'from-emerald-500 to-teal-600',
    accentColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    description: 'Manage tasks and collaborate with your team',
  },
  admin: {
    title: 'Admin Console',
    icon: Shield,
    gradient: 'from-violet-500 to-purple-600',
    accentColor: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    description: 'Full system control and oversight',
  },
};

export default function AuthPage() {
  const { role } = useParams<{ role: string }>();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
  });
  
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    fullName: '',
  });

  const currentRole = (role as RoleType) || 'customer';
  const config = roleConfig[currentRole] || roleConfig.customer;
  const IconComponent = config.icon;

  // Check if already authenticated
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        // Redirect based on role
        redirectBasedOnRole(currentRole);
      }
    };
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        redirectBasedOnRole(currentRole);
      }
    });

    return () => subscription.unsubscribe();
  }, [currentRole]);

  const redirectBasedOnRole = (role: RoleType) => {
    switch (role) {
      case 'admin':
        navigate('/admin/dashboard');
        break;
      case 'team':
        navigate('/team/dashboard');
        break;
      case 'customer':
      default:
        navigate('/customer/dashboard');
        break;
    }
  };

  const validateForm = (): boolean => {
    const newErrors = { email: '', password: '', fullName: '' };
    let isValid = true;

    try {
      emailSchema.parse(formData.email);
    } catch (e) {
      if (e instanceof z.ZodError) {
        newErrors.email = e.errors[0].message;
        isValid = false;
      }
    }

    try {
      passwordSchema.parse(formData.password);
    } catch (e) {
      if (e instanceof z.ZodError) {
        newErrors.password = e.errors[0].message;
        isValid = false;
      }
    }

    if (!isLogin && !formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (error) {
          if (error.message.includes('Invalid login credentials')) {
            toast.error('Invalid email or password');
          } else {
            toast.error(error.message);
          }
          return;
        }

        toast.success('Welcome back!', { description: 'Redirecting to your dashboard...' });
      } else {
        const redirectUrl = `${window.location.origin}/auth/${currentRole}`;
        
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            emailRedirectTo: redirectUrl,
            data: {
              full_name: formData.fullName,
              role: currentRole,
            },
          },
        });

        if (error) {
          if (error.message.includes('already registered')) {
            toast.error('Email already registered', { description: 'Please sign in instead.' });
          } else {
            toast.error(error.message);
          }
          return;
        }

        // After signup, assign role
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          // Note: Role assignment will be handled by admin approval or automatic based on signup portal
          toast.success('Account created!', { description: 'Welcome to Dhasha Media.' });
        }
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-400/30 flex">
      {/* Left Panel - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-2/5 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-20`} />
        <div className="absolute inset-0 bg-zinc-950/60" />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        
        <div className="relative z-10 flex flex-col justify-between p-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-zinc-900" />
            </div>
            <span className="text-xl font-bold text-white">Dhasha Media</span>
          </Link>
          
          {/* Feature Highlights */}
          <div className="space-y-8">
            <div className={`w-20 h-20 rounded-2xl ${config.bgColor} flex items-center justify-center`}>
              <IconComponent className={`w-10 h-10 ${config.accentColor}`} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">{config.title}</h2>
              <p className="text-lg text-zinc-400">{config.description}</p>
            </div>
            
            <div className="space-y-4">
              {['Secure authentication', 'Real-time collaboration', 'Project tracking'].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${config.accentColor.replace('text', 'bg')}`} />
                  <span className="text-zinc-400">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Footer */}
          <p className="text-sm text-zinc-600">
            © 2025 Dhasha Media Group. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to portals</span>
          </Link>

          {/* Mobile Logo */}
          <div className="flex lg:hidden items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-zinc-900" />
            </div>
            <span className="text-xl font-bold text-white">Dhasha Media</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${config.bgColor} mb-4`}>
              <IconComponent className={`w-4 h-4 ${config.accentColor}`} />
              <span className={`text-xs font-semibold ${config.accentColor} uppercase tracking-wider`}>
                {config.title}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              {isLogin ? 'Welcome back' : 'Create your account'}
            </h1>
            <p className="text-zinc-500">
              {isLogin 
                ? 'Enter your credentials to access your dashboard' 
                : 'Fill in your details to get started'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    className="h-12 pl-11 bg-zinc-900/50 border-zinc-800 focus:border-zinc-700 rounded-xl text-white placeholder:text-zinc-600"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-xs text-red-400">{errors.fullName}</p>
                )}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="h-12 pl-11 bg-zinc-900/50 border-zinc-800 focus:border-zinc-700 rounded-xl text-white placeholder:text-zinc-600"
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-400">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className="h-12 pl-11 pr-11 bg-zinc-900/50 border-zinc-800 focus:border-zinc-700 rounded-xl text-white placeholder:text-zinc-600"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-400">{errors.password}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className={`w-full h-12 rounded-xl bg-gradient-to-r ${config.gradient} hover:opacity-90 text-white font-semibold transition-all duration-300`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  {isLogin ? 'Signing in...' : 'Creating account...'}
                </>
              ) : (
                isLogin ? 'Sign In' : 'Create Account'
              )}
            </Button>
          </form>

          {/* Toggle */}
          <div className="mt-8 text-center">
            <p className="text-zinc-500">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setErrors({ email: '', password: '', fullName: '' });
                }}
                className={`ml-2 font-semibold ${config.accentColor} hover:underline`}
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-zinc-950 px-4 text-zinc-600">Secure Authentication</span>
            </div>
          </div>

          {/* Help Text */}
          <p className="text-center text-xs text-zinc-600">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
