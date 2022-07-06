import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchUserAsync, createUserAsync } from '../store/userSlice';

const Auth = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRef = useRef();
  const pswRef = useRef();
  const nameRef = useRef();

  const handelSwitch = () => {
    setHasAccount(!hasAccount);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = userRef.current.value;
    const password = pswRef.current.value;

    if (hasAccount) {
      dispatch(fetchUserAsync({ email, password }));
    } else {
      const name = nameRef?.current.value;
      dispatch(createUserAsync({ email, name, password }));
    }

    navigate('/admin', { replace: true });
  };

  const title = hasAccount ? 'Login' : 'Register';
  return (
    <section className="page page__auth">
      <div className="page__auth__container">
        <h2 className="auth__title">{title}</h2>

        <input
          className="auth__input auth__input__email"
          type="text"
          placeholder="Enter Email"
          name="email"
          ref={userRef}
          required
        />

        {!hasAccount && (
          <input
            className="auth__input auth__input__userName"
            type="text"
            placeholder="Enter User Name"
            name="useName"
            ref={nameRef}
            required
          />
        )}
        <input
          className="auth__input auth__input__psw"
          type="password"
          placeholder="Enter Password"
          name="psw"
          ref={pswRef}
          required
        />

        <button className="auth__button" type="sutmit" onClick={handleSubmit}>
          {title}
        </button>

        <div className="auth__account">
          {hasAccount ? (
            <span>
              Don't have an account?
              <span className="auth__account--register" onClick={handelSwitch}>
                {' '}
                Register{' '}
              </span>
            </span>
          ) : (
            <span>
              Have an account?
              <span className="auth__account--register" onClick={handelSwitch}>
                {' '}
                Login{' '}
              </span>
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default Auth;
