import React from 'react';
import Banner from '../components/Banner';
import Sharp from '../components/Sharp';
import Striped from '../components/Striped';

import ComingSoon from '../components/ComingSoon';

import bannerShape from '../util/imgs/banner-shape.png';

const Home = () => {
  return (
    <section className="mainPage">
      <Banner />
      <div className="w-full relative">
        <img className="banner__side" src={bannerShape} alt="" />

        <div className="flex justify-start h-128 z-10">
          <div className="flex items-end w-1/12 xl:w-1/6">
            <Sharp reverse={false} />
          </div>

          <div className="w-2/3 flex justify-between z-10 ml-20 text-left">
            <div className="flex flex-col justify-center w-1/2">
              <h1 className="text-yellow font-medium text-4xl my-7">
                Hello, <br /> I am <br />
                web Developer.
              </h1>
              <p className="text-dark text-xl my-7">
              A web developer with four years of front-end experience and who is passionate about learning new technologies
              </p>
            </div>
            <div className="flex items-end w-1/3">
              <Striped darkStriped={false} />
            </div>
          </div>
          
        </div>
      </div>

      <div className="page mt-10">
        <ComingSoon />
      </div>
    </section>
  );
};

export default Home;
