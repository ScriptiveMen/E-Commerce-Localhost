import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full min-h-max mb-4 ">
      <div className="top md:h-[75vh] md:py-5 w-full flex flex-col md:flex-row items-center  gap-4">
        <div className="left  h-[50vh] w-full md:h-full md:w-1/2 overflow-hidden  rounded-xl">
          <img
            className="w-full h-full object-cover"
            src="/images/about-1-1.avif"
            alt=""
          />
        </div>
        <div className="right h-[60%] md:h-full md:w-1/2 flex flex-col justify-center bg-gray-200 p-5 md:p-10 rounded-xl ">
          <div className="heading">
            <h1 className="md:text-5xl text-4xl font-black py-2">
              Why Choose Us
            </h1>
            <p className="font-thin  md:text-lg text-gray-600 py-2 md:py-4">
              We pride ourselves on offering products that meet the highest
              standards of quality. Each item is carefully selected, tested, and
              crafted to ensure durability and customer satisfaction.
            </p>
          </div>
          <div className="sub-head flex flex-col items-center gap-4">
            <div className="w-full h-full py-4 md:py-7 border-b border-gray-500 flex items-center justify-between">
              <p className="font-bold text-xl md:text-2xl">Unrivaled Quality</p>
              <i className="fa-solid fa-plus  md:text-2xl pr-5"></i>
            </div>
            <div className="w-full h-full py-4 md:py-7 border-b border-gray-500  flex items-center justify-between">
              <p className="font-bold text-xl md:text-2xl">Sustains bullous</p>
              <i className="fa-solid fa-plus  md:text-2xl pr-5"></i>
            </div>
            <div className="w-full h-full py-4 md:py-7 border-b border-gray-500  flex items-center justify-between">
              <p className="font-bold text-xl md:text-2xl">Unrivaled Variety</p>
              <i className="fa-solid fa-plus  md:text-2xl pr-5"></i>
            </div>
            <div className="w-full h-full py-4 md:py-7 border-b border-gray-500 flex items-center justify-between">
              <p className="font-bold text-xl md:text-2xl">
                Legacy Of Excellence
              </p>
              <i className="fa-solid fa-plus  md:text-2xl pr-5"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom mt-5 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 pb-10">
        <div className="bg-red-100 relative w-full h-[23vh] md:w-[30%] overflow-hidden rounded-xl p-5 flex flex-col justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">
            100% Authentic Product
          </h2>
          <p className="font-thin pb-10">
            Prominently display a clear "100% Authentic Guarantee" on your
            product
          </p>
          <Link className="absolute bottom-2 right-3 transition-all duration-400 ease-in-out hover:bg-black hover:text-white text-sm px-2 w-max  rounded-3xl border border-black md:text-lg">
            See More
          </Link>
        </div>
        <div className="bg-gray-200 relative w-full md:w-[30%] h-[23vh] overflow-hidden rounded-xl p-5 flex flex-col justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">Free & Easy Return</h2>
          <p className="font-thin pb-10">
            Provide customers with prepaid return labels to make the process
            hassle-free.
          </p>
          <Link className="absolute bottom-2 right-3 transition-all duration-400 ease-in-out hover:bg-black hover:text-white text-sm px-2 w-max  rounded-3xl border border-black md:text-lg">
            See More
          </Link>
        </div>
        <div className="bg-gray-200 relative w-full md:w-[30%] h-[23vh] overflow-hidden rounded-xl p-5 flex flex-col justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">Safe Payments</h2>
          <p className="font-thin pb-10">
            Use fraud detection tools to identify suspicious activity, such as
            unusual purchase
          </p>
          <Link className="absolute bottom-2 right-3 transition-all duration-400 ease-in-out hover:bg-black hover:text-white text-sm px-2 w-max  rounded-3xl border border-black md:text-lg">
            See More
          </Link>
        </div>
        <div className="relative justify-center w-full md:w-[40%] h-[23vh] overflow-hidden rounded-xl flex flex-col">
          <img
            className="w-full h-full object-cover"
            src="/images/about-2.avif"
            alt=""
          />
          <h2 className="text-2xl md:text-4xl w-[30%] font-bold absolute bottom-0 left-2 text-white">
            Summer Cloth
          </h2>
          <p className="font-thin absolute top-20 right-5 px-2 bg-white rounded-xl text-center">
            30% OFF
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
