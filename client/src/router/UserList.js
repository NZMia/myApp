import React from 'react';
import { useSelector } from 'react-redux';

const UserList = () => {
  const { usersList } = useSelector((state) => state.user);

  return (
    <div className="userList__page">
      {usersList &&
        usersList.map((user) => {
          const { email, name } = user;
          return (
            <p key={user._id}>
              {email}: {name}
            </p>
          );
        })}
    </div>
  );
};

export default UserList;
