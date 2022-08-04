import JoinForm from '../components/JoinForm';

const Auth = () => {
  return (
    <div className="page bg-hero-pattern bg-cover bg-center flex w-full items-center justify-center">
      <div className="container bg-light py-12 px-12 rounded-2xl shadow-xl z-20;">
        <JoinForm />
      </div>
    </div>
  );
};

export default Auth;
