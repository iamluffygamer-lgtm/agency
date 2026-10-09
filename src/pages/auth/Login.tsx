import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/services/firebase/firebase'
import { useAuthStore } from '@/store/authStore'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowRight, Loader2, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Local Dev Bypass (since Firebase isn't configured with real keys yet)
      if (email === 'client@company.com' && password === 'password') {
        useAuthStore.getState().setUser({ email: 'client@company.com', uid: 'local-dev-uid' } as any)
        navigate('/client/dashboard')
        return;
      }
      
      await signInWithEmailAndPassword(auth, email, password)
      // On success, redirect to the client dashboard
      navigate('/client/dashboard')
    } catch (err: any) {
      console.error(err)
      setError('Invalid credentials. (Hint: use client@company.com / password)')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[100dvh] flex flex-col md:flex-row bg-background selection:bg-primary selection:text-primary-foreground">
      {/* Visual / Brand Side */}
      <div className="hidden md:flex md:w-1/2 bg-primary text-primary-foreground p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        
        <div className="relative z-10">
          <div className="text-xl font-serif italic mb-2">Agency</div>
          <div className="w-12 h-1 bg-primary-foreground mb-8" />
        </div>

        <div className="relative z-10 max-w-md">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl font-medium tracking-tighter mb-4"
          >
            Client Portal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-primary-foreground/70 text-lg leading-relaxed"
          >
            Access your project dashboard, review milestones, and approve deliverables.
          </motion.p>
        </div>
        
        <div className="relative z-10 font-mono text-[10px] uppercase tracking-widest text-primary-foreground/50">
          Secure Environment // v2.0
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-10 md:hidden">
              <div className="text-xl font-serif italic mb-2">Agency</div>
              <h2 className="text-3xl font-medium tracking-tighter">Client Portal</h2>
            </div>

            <h3 className="text-2xl font-medium tracking-tight mb-2">Sign in</h3>
            <p className="text-muted-foreground mb-8">Enter your credentials to access your workspace.</p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="client@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  disabled={loading}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input 
                  id="password" 
                  type="password"
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                  disabled={loading}
                />
              </div>

              {error && (
                <div className="flex items-start gap-2 text-destructive text-sm bg-destructive/10 p-3">
                  <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                  <p>{error}</p>
                </div>
              )}

              <Button type="submit" className="w-full h-12 text-base group" disabled={loading}>
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    Access Workspace <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
