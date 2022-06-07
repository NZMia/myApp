import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserAsync, createUserAsync } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

const Auth = ({ isAuth }) => {
  const userRef = useRef();
  const pswRef = useRef();
  const nameRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = userRef.current.value;
    const password = pswRef.current.value;
    const name = isAuth ?? nameRef.current.value;

    isAuth
      ? dispatch(fetchUserAsync({ email, password }))
      : dispatch(createUserAsync({ email, name, password }));

    navigate(`/admin`);
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
