import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useLoginMutation, useRegisterMutation } from '../store/api/userApi';
import { setCredital } from '../store/slice/userSlice';

const JoinForm = () => {
  const [isRegister, setIsRegister] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const [register] = useRegisterMutation();

  const userRef = useRef<HTMLInputElement | null>(null);
  const pswRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);

  const currentStatue = isRegister ? 'Register' : 'Login';
  const clueText = isRegister
    ? 'Already Have An Account ?'
    : "Don't have an account?";

  const handleReigster = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsRegister(!isRegister);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const email = userRef.current?.value!;
    const password = pswRef.current?.value!;
    const name = nameRef?.current?.value!;

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
    <div className="space-y-4 bg-pampas text-dark p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-md">
      {/* Title: login / register */}
      <h1 className="text-dark text-3xl font-bold text-center mb-4">
        {currentStatue}
      </h1>

      {/* Email */}
      <div className="space-y-4">
        {/* <label htmlFor="email">Email</label> */}
        <input
          className="input"
          type="text"
          placeholder="Enter Email"
          name="email"
          ref={userRef}
          required
        />
      </div>

      {/* User Name if register */}
      {isRegister && (
        <div className="space-y-4">
          {/* <label htmlFor="useName">User Name</label> */}
          <input
            className="input"
            type="text"
            placeholder="Enter User Name"
            name="useName"
            ref={nameRef}
            required
          />
        </div>
      )}

      {/* Password */}
      <div className="space-y-4">
        {/* <label htmlFor="psw">Password</label> */}
        <input
          className="input"
          type="password"
          placeholder="Enter Password"
          name="psw"
          ref={pswRef}
          required
        />
      </div>

      <div className="text-center mt-6">
        <button
          className="btn bg-dark text-pampas "
          type="submit"
          onClick={handleSubmit}
        >
          {currentStatue}
        </button>
        <p className="mt-4 text-sm">
          {clueText}

          <span className="underline cursor-pointer" onClick={handleReigster}>
            {isRegister ? ' Login' : ' Register'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default JoinForm;
