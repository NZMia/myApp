import React, { useEffect, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import {
  useLogoutMutation,
  useGetUsersListQuery,
  useLazyGetUsersListQuery
} from '../store/api/userApi';
import { setLogout, setUsersList } from '../store/slice/userSlice';

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logout, { isLoading }] = useLogoutMutation();
  const [trigger, { data }] = useLazyGetUsersListQuery();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const res = await logout().unwrap();

      dispatch(setLogout(res));
      navigate('/', { replace: true });
    } catch {}
  };

  const handleGetUser = () => {
    trigger();
  };

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
      <button onClick={handleGetUser}>Get User</button>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Admin;
