import { useSelector } from 'react-redux';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
  const { credential } = useSelector((state) => state.user);
  const location = useLocation();

  return credential?.email ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};

export default RequireAuth;
