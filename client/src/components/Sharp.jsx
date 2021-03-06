import React from 'react';

const Sharp = ({ reverse }) => {
  return (
    <div className="sharp">
      <div
        className={`absolute right-1.5 w-4 h-48 bg-yellow ${
          !reverse ? 'top-nega-24' : 'bottom-nega-24'
        } `}
      ></div>
    </div>
  );
};

export default Sharp;
