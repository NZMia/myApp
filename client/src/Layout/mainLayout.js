import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/Header';
import SearchPanel from '../components/SearchPanel';
import SearchResult from '../components/SearchResult';
import Loading from '../components/Loading';

const MainLayout = () => {
  const { userInfo } = useSelector((state) => state.user);
  const { loadingState } = useSelector((state) => state.loading);
  const { toggleState } = useSelector((state) => state.toggle);

  const hasUser = Object.keys(userInfo).length != 0 && !loadingState;

  console.info('toggleState', toggleState);

  return (
    <div
      className={
        'mainLayout' +
        ' ' +
        `${toggleState ? 'mainLayout--light' : 'mainLayout--dark'}`
      }
    >
      <Header />
      <div className="mainContent">
        <SearchPanel />
        {loadingState && <Loading />}
        {hasUser && <SearchResult user={userInfo} />}
      </div>
    </div>
  );
};

export default MainLayout;
