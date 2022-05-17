import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleSwitch } from '../store/toggleSlice';
const Toggle = () => {
  const { toggleState } = useSelector((state) => state.toggle);
  const dispatch = useDispatch();

  const handleOnToggle = () => {
    dispatch(toggleSwitch(toggleState));
  };
  return (
    <label className="toggle">
      <input type="checkbox" checked={toggleState} onChange={handleOnToggle} />
      <span className="toggle__switch" />
    </label>
  );
};
export default Toggle;
