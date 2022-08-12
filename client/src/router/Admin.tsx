import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SideNav from '../components/SideNav';
import Tabs from '../components/Tabs';
import Tab from '../components/Tab';

import type { RootState } from '../store';

import {
  useLogoutMutation,
  useLazyGetUsersListQuery
} from '../store/api/userApi';
import { setLogout, setUsersList } from '../store/slice/userSlice';

const Admin = () => {
  const { credential } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logout, { isLoading }] = useLogoutMutation();
  const [trigger, { data }] = useLazyGetUsersListQuery();

  const handleGetUsers = async (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();

    // Lazy query
    trigger({});
  };

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
      <div className="page">
        <div className="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out">
          <div className="space-y-6 md:space-y-10 mt-10">
            <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
              Admin<span className="text-teal-600">.</span>
            </h1>

            <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">
              {credential?.name}
            </h2>
            <p className="text-xs text-gray-500 text-center">Administrator</p>
          </div>

          {/* <SideNav /> */}

          <button className="btn--dark" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <Tabs>
          <Tab title="test1">
            <p>Lemon is yellow</p>
          </Tab>
          <Tab title="test2">
            <p>Strawberry is red</p>
          </Tab>
          <Tab title="test3">
            <p>Pear is green</p>
          </Tab>
        </Tabs>
      </div>

      {/* <button onClick={handleGetUser}>Get User</button> */}
    </div>
  );
};

export default Admin;
