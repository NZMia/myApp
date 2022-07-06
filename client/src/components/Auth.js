import axios from 'axios';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchUserAsync } from '../store/userSlice';
import Header from './Header';
import Footer from './Footer';

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRef = useRef();
  const pswRef = useRef();
  const nameRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = userRef.current.value;
    const password = pswRef.current.value;
    // const name = nameRef.current.value;
    dispatch(fetchUserAsync({ email, password }));

    navigate('/admin', { replace: true });
  };

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
      <div>
        <span>
          Has Account<a href="#">Register</a>
        </span>
      </div>
      <button type="sutmit" onClick={handleSubmit}>
        login
      </button>
    </section>
  );
};

export default Auth;
