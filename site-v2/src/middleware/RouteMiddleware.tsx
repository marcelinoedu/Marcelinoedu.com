import { ReactNode } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

interface RouteMiddlewareProps {
    children: ReactNode;
  }

const RouteMiddleware = ({ children } : RouteMiddlewareProps) => {
  const location = useLocation();
  const allowedRoutes = ['/'];

  const routeExists = allowedRoutes.includes(location.pathname);

  if (!routeExists) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RouteMiddleware;

