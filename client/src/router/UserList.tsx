import { useSelector } from 'react-redux';
import type { RootState } from '../store';

const UserList = () => {
  const { usersList } = useSelector((state: RootState) => state.user);

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
