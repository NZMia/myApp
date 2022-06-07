import React from 'react';
import { useSelector } from 'react-redux';
import Auth from '../components/Auth';

const MainLayout = ({ user }) => {
  const { userLoadingState } = useSelector((state) => state.loading);
  const { authState } = useSelector((state) => state.auth);

  return (
    <div className="mainLayout">
      {/* <Auth isAuth={authState} /> */}
      <header>
        <ul>
          <li href="/auth">login</li>
        </ul>
      </header>
    </div>
  );
};

export default MainLayout;
