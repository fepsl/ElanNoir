import { Navigate } from 'react-router-dom';
import type { PropsWithChildren } from 'react';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }: PropsWithChildren) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}