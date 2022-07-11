import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { useLoginMutation } from '../store/api/userApi';
import { setCredital } from '../store/slice/userSlice';

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const userRef = useRef();
  const pswRef = useRef();
  const nameRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = userRef.current.value;
    const password = pswRef.current.value;
    // const name = nameRef.current.value;
    // dispatch(fetchUserAsync({ email, password }));

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredital(res));
      navigate('/admin', { replace: true });
    } catch (error) {
      console.info('error', error);

      throw new Error();
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
    </section>
  );
};

export default Auth;
