import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AnimationBackground from '../components/AnimationBackground';

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

  const currentStatue = isRegister ? 'Register' : 'Login';
  const clueText = isRegister ? 'Has Account' : 'No Account';

  const handleReigster = (e) => {
    setIsRegister(!isRegister);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = userRef.current.value;
    const password = pswRef.current.value;
    const name = nameRef && nameRef?.current?.value;

    const action = isRegister
      ? register({ email, name, password })
      : login({ email, password });

    try {
      // get all current user from the query
      const res = await action.unwrap();

      // set state
      dispatch(setCredital(res));

      // then redirect
      navigate('/admin', { replace: true });
    } catch (error) {
      console.info('error', error);
    }
  };

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <section className="page page__auth">
      <div className="page__conatiner">
        {/* Title: login / register */}
        <h1 className="auth__title">{currentStatue}</h1>

        {/* Email */}
        <div className="auth__user">
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            ref={userRef}
            required
          />
        </div>

        {/* User Name if register */}
        {isRegister && (
          <div className="auth__name">
            {/* <label htmlFor="useName">User Name</label> */}
            <input
              type="text"
              placeholder="Enter User Name"
              name="useName"
              ref={nameRef}
              required
            />
          </div>
        )}

        {/* Password */}
        <div className="auth__psw">
          {/* <label htmlFor="psw">Password</label> */}
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            ref={pswRef}
            required
          />
        </div>

        <button className="button--login" type="sutmit" onClick={handleSubmit}>
          {currentStatue}
        </button>

        <p className="auth__clue">
          {clueText}
          <a onClick={handleReigster}>{isRegister ? 'Login' : 'Register'}</a>
        </p>
      </div>

      {/* Animation Background */}
      <AnimationBackground />
    </section>
  );
};

export default Auth;
