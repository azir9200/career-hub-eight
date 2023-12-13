import userBanner from '../../../../assets/images/user.png'

const Banner = () => {
  return (
    <div className="hero max-h-[500px] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={userBanner} className=" w-1/2 rounded-lg shadow-2xl" />
        <div className='w-1/2  text-center' >
          <h2 className="text-5xl font-bold">One Step Clouser To Your Career</h2>
          <h2 className="text-5xl text-green-300 font-bold">Dream Job</h2>
          <p className="py-6 mx-14 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;