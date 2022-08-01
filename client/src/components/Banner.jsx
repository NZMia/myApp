import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../util/imgs/banner-cover.png';
import logo from '../util/imgs/logo.png';

const Banner = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    navigate('/auth', { replace: true });
  };

  return (
    <div className="banner w-full h-128 relative">
      <div className="w-full h-128 bg-hero-pattern bg-cover bg-right-bottm-1 bg-fixed">
        <img
          className="h-128 absolute right-0
                          w-full md:w-4/5 xl:w-1/2
                          "
          src={banner}
          alt=""
        />

        <div className="flex justify-center items-center min-h-full">
          <div className="w-3/4 flex flex-col z-10 text-right">
            <img className="w-1/5 self-end mb-9" src={logo} alt="" />
            <h1 className="text-params font-medium text-4xl my-7 self-end">
              Front End Develoepr
            </h1>
            <p className="text-pampas-100 w-3/5 text-2xl self-end italic">
              We create brands for the most innovative and exciting companies in
              the world, to help them rewrite the rules for how we all live our
              lives.
            </p>

            <div className="buttonGroup flex justify-end my-14">
              <button className="btn--yellow" onClick={handleLogin}>
                {' '}
                Admin{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
