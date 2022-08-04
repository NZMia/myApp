import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  useLogoutMutation,
  useLazyGetUsersListQuery
} from '../store/api/userApi';
import { setLogout, setUsersList } from '../store/slice/userSlice';

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logout, { isLoading }] = useLogoutMutation();
  const [trigger, { data }] = useLazyGetUsersListQuery();

  const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const res = await logout().unwrap();

      dispatch(setLogout(res));
      navigate('/', { replace: true });
    } catch {}
  };
  // todo
  // const handleGetUser = () => {
  //   trigger();
  // };

  useEffect(() => {
    if (data) {
      dispatch(setUsersList(data));
      navigate('/userslist', { replace: true });
    }
  }, [data]);

  if (isLoading) {
    <div className="loading">loading....</div>;
  }
  return (
    <div className="page__admin">
      {/* <button onClick={handleGetUser}>Get User</button> */}
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Admin;
