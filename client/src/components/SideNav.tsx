import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUsersList } from '../store/slice/userSlice';

import { useLazyGetUsersListQuery } from '../store/api/userApi';

const SideNav: React.FC = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [trigger, { data }] = useLazyGetUsersListQuery();

  const handleGetUsers = async (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    // Lazy query
    trigger({});
  };

  useEffect(() => {
    if (data) {
      dispatch(setUsersList(data));
      navigate('/userslist', { replace: true });
    }
  }, [data]);

  return (
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
        <span className="" onClick={handleGetUsers}>
          User List
        </span>
      </a>
    </div>
  );
};

export default SideNav;
