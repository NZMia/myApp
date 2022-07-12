import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { useLoginMutation, useRegisterMutation } from '../store/api/userApi';
import { setCredital } from '../store/slice/userSlice';

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const [register] = useRegisterMutation();

  const userRef = useRef();
  const pswRef = useRef();
  const nameRef = useRef();

  const handleReigster = (e) => {
    setIsRegister(!isRegister);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = userRef.current.value;
    const password = pswRef.current.value;
    const name = nameRef?.current.value;
    // dispatch(fetchUserAsync({ email, password }));
    const action = isRegister
      ? register({ email, name, password })
      : login({ email, password });

    try {
      const res = await action.unwrap();

      dispatch(setCredital(res));
      navigate('/admin', { replace: true });
    } catch (error) {
      console.info('error', error);

      // throw new Error();
    }
  };

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <section className="page__auth">
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

      {isRegister && (
        <div className="auth__name">
          <label htmlFor="useName">User Name</label>
          <input
            type="text"
            placeholder="Enter User Name"
            name="useName"
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
        login
      </button>

      <button type="button" onClick={handleReigster}>
        has account, Register
      </button>
    </section>
  );
};

export default Auth;
