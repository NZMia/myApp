import React from 'react';
import { useSelector } from 'react-redux';
import Auth from '../components/Auth';

const MainLayout = () => {
  const { userLoadingState } = useSelector((state) => state.loading);
  return (
    <div className="mainLayout">
      <Auth />
    </div>
  );
};

export default MainLayout;
