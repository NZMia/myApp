import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Auth from '../components/Auth';
const AuthLayout = () => {
  const { authState } = useSelector((state) => state.auth);
  const [isAuthed, setIsAuthed] = useState(authState);

  const buttonText = isAuthed ? 'Sign Up' : 'Sign In';

  const handleOnClick = () => {
    setIsAuthed(!isAuthed);
  };

  return (
    <div>
      <button onClick={handleOnClick}>{buttonText}</button>
      <Auth isAuth={isAuthed} />
    </div>
  );
};

export default AuthLayout;
