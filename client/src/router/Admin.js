import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { useLogoutMutation } from '../store/api/userApi';
import { setLogout } from '../store/slice/userSlice';

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const res = await logout().unwrap();

      dispatch(setLogout(res));
      navigate('/', { replace: true });
    } catch {}
  };

  if (isLoading) {
    <div className="loading">loading....</div>;
  }
  return (
    <div className="page__admin">
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Admin;
