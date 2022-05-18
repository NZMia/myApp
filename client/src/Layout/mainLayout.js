import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/Header';
import SearchPanel from '../components/SearchPanel';
import SearchResult from '../components/SearchResult';
import Loading from '../components/Loading';

const MainLayout = () => {
  const { userInfo, userRepos } = useSelector((state) => state.user);
  const { loadingUserState, loadingRepoState } = useSelector(
    (state) => state.loading
  );
  const { toggleState } = useSelector((state) => state.toggle);

  const hasUser = Object.keys(userInfo).length != 0 && !loadingUserState;
  const hasRepo = Object.keys(userInfo).length != 0 && !loadingRepoState;

  return (
    <div
      className={
        'mainLayout' + ' ' + `${toggleState ? 'bg--white' : 'bg--grey'}`
      }
    >
      <Header />
      <div className="mainContent">
        <SearchPanel />
        {(loadingUserState || loadingRepoState) && <Loading />}
        {hasUser && hasRepo && (
          <SearchResult user={userInfo} repos={userRepos} />
        )}
      </div>
    </div>
  );
};

export default MainLayout;
