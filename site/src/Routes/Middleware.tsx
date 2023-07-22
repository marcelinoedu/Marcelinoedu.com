import React, { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

interface MiddlewareProps {
  existingRoutes: string[];
}

const Middleware: React.FC<React.PropsWithChildren<MiddlewareProps>> = ({ existingRoutes, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = window.location.pathname;

    const isExistingRoute = existingRoutes.includes(currentPath.slice(1));

    if (!isExistingRoute || currentPath === '/') {
      navigate('/eduardo');
    }
  }, [existingRoutes, navigate]);

  return <>{children}</>;
};

export default Middleware;
