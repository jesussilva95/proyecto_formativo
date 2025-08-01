import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireRole?: 'superadmin' | 'admin' | ('superadmin' | 'admin')[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireRole = 'superadmin'
}) => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirigir al login guardando la ubicación intentada
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requireRole) {
    const allowedRoles = Array.isArray(requireRole) ? requireRole : [requireRole];
    if (!allowedRoles.includes(user?.role as any)) {
      // Si el usuario no tiene el rol requerido, redirigir al login
      return <Navigate to="/login" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
