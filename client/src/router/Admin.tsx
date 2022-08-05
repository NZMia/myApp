import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../store';

import {
  useLogoutMutation,
  useLazyGetUsersListQuery
} from '../store/api/userApi';
import { setLogout, setUsersList } from '../store/slice/userSlice';

const Admin = () => {
  const { name } = useSelector((state: RootState) => state.user.credential);
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
  // todo
  // const handleGetUser = () => {
  //   trigger();
  // };

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
              {name}
            </h2>
            <p className="text-xs text-gray-500 text-center">Administrator</p>
          </div>
          <div id="menu" className="flex flex-col space-y-2">
            <a className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
              <span className="">Home Page</span>
            </a>
            <a className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
              <span className="">Blog</span>
            </a>
            <a className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
              <span className="">Blog List</span>
            </a>
            <a className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
              <span className="">User Liar</span>
            </a>
          </div>

          <button className="btn" onClick={handleLogout}>
            logout
          </button>
        </div>
      </div>

      {/* <button onClick={handleGetUser}>Get User</button> */}
    </div>
  );
};

export default Admin;
