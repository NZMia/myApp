import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../assets/imgs/banner-cover.png';
import logo from '../assets/imgs/logo.png';

const Banner = () => {
  const navigate = useNavigate();

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/auth', { replace: true });
  };

  console.log(banner);
  return (
    <div className="banner w-full h-128 relative">
      <div className="w-full h-128 bg-hero-pattern bg-cover bg-right-bottm-1 bg-fixed">
        <img
          className="h-128 absolute right-0 w-full md:w-4/5 xl:w-1/2"
          src={banner}
          alt=""
        />

        <div className="flex justify-center items-center min-h-full">
          <div className="w-3/4 flex flex-col z-10 text-right">
            <img className="w-1/5 self-end mb-9" src={logo} alt="" />
            <h1 className="text-yellow font-medium text-4xl my-7 self-end">
              Front End Develoepr
            </h1>
            <p className="text-pampas-100 w-3/5 text-2xl self-end italic">
              Keep Learning, Stay Hungry
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
