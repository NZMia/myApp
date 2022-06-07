import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/auth" replace>
          Admin
        </Link>
      </nav>
    </div>
  );
};

export default Header;
