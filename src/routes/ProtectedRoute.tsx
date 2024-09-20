import { Navigate, Outlet } from 'react-router-dom';

import useUserAuthentication from '@/hooks/useUserAuthentication';
import { PATH } from '@/routes/path';

export const ProtectedRoute: React.FC = () => {
  const { user, loading } = useUserAuthentication();

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? <Outlet /> : <Navigate to={PATH.SIGN_IN} replace />;
};
