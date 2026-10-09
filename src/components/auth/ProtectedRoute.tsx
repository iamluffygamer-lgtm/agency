import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { Loader2 } from 'lucide-react';

export default function ProtectedRoute() {
  const { user, loading } = useAuthStore();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // If we are not logged in, redirect to the login page.
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the child routes (e.g., ClientLayout or AdminLayout)
  return <Outlet />;
}
