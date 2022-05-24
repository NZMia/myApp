import React from 'react';
import { useSelector } from 'react-redux';
import Auth from '../components/Auth';

const MainLayout = () => {
  const { userLoadingState } = useSelector((state) => state.loading);
  const { authState } = useSelector((state) => state.auth);

  return (
    <div className="mainLayout">
      <Auth isAuth={authState} />
    </div>
  );
};

export default MainLayout;
