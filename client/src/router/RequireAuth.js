import { useSelector } from 'react-redux';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
  const { credential, token } = useSelector((state) => state.user);
  const location = useLocation();

  // console.info('currentUser', currentUser);
  // console.info('loading', loading);

  // if (loading) {
  //   return 'loading.....';
  // }

  return credential?.email ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};

export default RequireAuth;
