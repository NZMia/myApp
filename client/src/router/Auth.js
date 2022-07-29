import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Sharp from '../components/Sharp';
import Striped from '../components/Striped';

import bannerShape from '../util/imgs/banner-shape.png';

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
    <section className="mainPage w-full bg-hero-pattern bg-cover bg-right-bottm-1 bg-fixed">
      <div className="flex w-full justify-start">
        {/* <div className="flex items-end w-1/12 xl:w-1/6">
          <Sharp reverse={false} />
        </div> */}

        <div className="w-2/3 flex justify-center items-center text-left">
          <div className="bg-yellow flex w-[30rem] flex-col space-y-10">
            {/* Title: login / register */}
            <h1 className="text-dark auth__title">{currentStatue}</h1>

            {/* Email */}
            <div className="auth__user">
              {/* <label htmlFor="email">Email</label> */}
              <input
                className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"'
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

            <button
              className="button--login text-dark"
              type="sutmit"
              onClick={handleSubmit}
            >
              {currentStatue}
            </button>

            <p className="auth__clue text-dark">
              {clueText}
              <a onClick={handleReigster}>
                {isRegister ? 'Login' : 'Register'}
              </a>
            </p>
          </div>
          {/* <Striped darkStriped={true} /> */}
        </div>
      </div>
      {/* <div className="wave w-full h-72 bg-pampas"> */}
      <div className="h-72 overflow-hidde">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style="height: 100%; width: 100%;"
        >
          <path
            d="M0.00,49.98 C237.30,276.81 330.98,-101.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style="stroke: none; fill: #08f;"
          ></path>
        </svg>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Auth;
