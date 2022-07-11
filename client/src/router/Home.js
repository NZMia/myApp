import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { digioThunk } from '../store/digioSlice';

const Home = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(digioThunk());
  };

  return (
    <div className="page__admin">
      <button onClick={handleOnClick}>getData</button>
    </div>
  );
};

export default Home;
