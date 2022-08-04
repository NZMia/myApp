import coding from '../assets/video/coding.mp4';

const ComingSoon = () => {
  return (
    <div className="relative flex items-center justify-center max-h-screen w-full mb-12 overflow-hidden">
      <div className="relative z-30 max-w-2xl text-center">
        <h1 className="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-7xl">
          Comming Soon
        </h1>
        <p className="mt-6 lg:text-lg text-white">
          Working on Admin (Login + Admin Page)
        </p>

        <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
          <button className="btn--yellow">Admin</button>
        </div>
      </div>
      <video
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        autoPlay
        loop
        muted
      >
        <source src={coding} type="video/mp4" />
      </video>
    </div>
  );
};

export default ComingSoon;
