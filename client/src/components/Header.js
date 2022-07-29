import React from 'react';
// import logo from '../images/logo.png';
const Header = () => {
  return (
    <div className="flex top-0 max-h-20 w-full z-10">
      <div className="header__left">{/* <img src={logo} alt="" /> */}</div>
      <div className="header__right">
        <button>Admin</button>
      </div>
    </div>
  );
};

export default Header;
