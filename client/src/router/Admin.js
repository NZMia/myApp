import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUserAsync } from '../store/userSlice';
import { Link, useNavigate } from 'react-router-dom';

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hanldeLogout = () => {
    dispatch(logoutUserAsync());
    navigate('/', { replace: true });
  };
  return (
    <div className="page__admin">
      <button onClick={hanldeLogout}>logout</button>
    </div>
  );
};

export default Admin;
