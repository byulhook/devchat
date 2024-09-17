import { Navigate, Outlet } from 'react-router-dom';

import useUserAuthentication from '@/hooks/useUserAuthentication';
import { PATH } from '@/routes/path';

const PublicRoute: React.FC = () => {
  const { user, loading } = useUserAuthentication();
  if (loading) {
    return <div>Loading...</div>;
  }
  return user ? <Navigate to={PATH.HOME} replace /> : <Outlet />;
};

export default PublicRoute;
