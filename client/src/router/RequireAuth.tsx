import { useSelector } from 'react-redux';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import type { RootState } from '../store';

const RequireAuth = () => {
  const { credential } = useSelector((state: RootState) => state.user);
  const location = useLocation();

  return credential?.email ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};

export default RequireAuth;
