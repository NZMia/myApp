import React from 'react';
import coding from '../util/imgs/coding.jpg';

const Striped = ({ darkStriped }) => {
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
