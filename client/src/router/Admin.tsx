import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Tabs from '../components/Tabs';
import Tab from '../components/Tab';
import RichTextEditor from '../components/RichTextEditor';

import type { RootState } from '../store';

import {
  useLogoutMutation,
  useLazyGetUsersListQuery
} from '../store/api/userApi';
import { setLogout, setUsersList } from '../store/slice/userSlice';

const Admin = () => {
  const { credential, usersList } = useSelector(
    (state: RootState) => state.user
  );
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
    <div className="page">
      {/* <button className="btn--dark" onClick={handleLogout}>
            Logout
          </button> */}

      <Tabs>
        <Tab title="User List">
          {usersList.map((user, index) => {
            return (
              <div key={index}>
                {user.name}: {user.email}
              </div>
            );
          })}
        </Tab>
        <Tab title="Blog Edit">
          <RichTextEditor />
        </Tab>
        <Tab title="Blog List">
          <p>Pear is green</p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Admin;
