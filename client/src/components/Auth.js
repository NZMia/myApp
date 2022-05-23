import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserAsync } from '../store/userSlice';

const Auth = () => {
  const userRef = useRef();
  const pswRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = userRef.current.value;
    const userPsw = pswRef.current.value;

    dispatch(fetchUserAsync({ userName, userPsw }));
  };
  return (
    <form className="auth">
      <div className="auth__user">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          ref={userRef}
          required
        />
      </div>

      <div className="auth__psw">
        <label htmlFor="psw">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          ref={pswRef}
          required
        />
      </div>

      <button type="sutmit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Auth;
