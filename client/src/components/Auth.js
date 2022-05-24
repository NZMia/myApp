import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserAsync } from '../store/userSlice';

const Auth = ({ isAuth }) => {
  const userRef = useRef();
  const pswRef = useRef();
  const nameRef = useRef();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = userRef.current.value;
    const userPsw = pswRef.current.value;
    const userName = nameRef.current.value;

    // dispatch(fetchUserAsync({ userEmail, userPsw, userName }));
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
      {!isAuth && (
        <div className="auth__name">
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            placeholder="Enter Display Name"
            name="name"
            ref={nameRef}
            required
          />
        </div>
      )}

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
