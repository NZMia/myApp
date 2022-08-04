import React from 'react';

interface StripedProps {
  darkStriped: boolean;
}

const Striped = ({ darkStriped }: StripedProps) => {
  return (
    <div className={darkStriped ? 'striped__dark' : 'striped__yellow'}>
      {/* {
        hasImage && <img className="absolute bottom-24 right-24 " src={coding} alt="" />
      } */}
      {/* <div className="w-full h-72 striped"></div> */}
    </div>
  );
};

export default Striped;
