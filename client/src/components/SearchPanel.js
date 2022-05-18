import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserAsync, fetchUserReposAsync } from '../store/userSlice';

const SearchPanel = () => {
  const [param, setParam] = useState({
    userId: '',
    userName: ''
  });
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setParam({
      ...param,
      userName: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUserAsync(param.userName));
    dispatch(fetchUserReposAsync(param.userName));
  };

  return (
    <form>
      <input
        type="text"
        value={param.userName || ''}
        placeholder="Search repo user name"
        onChange={handleOnChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
};

export default SearchPanel;
