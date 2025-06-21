import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full">
      <div className="hero1 flex items-center justify-between pt-3 ">
        <div className="left w-[70%]  flex items-end justify-start">
          <p className="text-3xl font-thin md:text-7xl">
            Access to high- Quality,{" "}
            <span className="font-black flex items-center text-4xl md:text-8xl">
              Ec
              <span className="h-[1.40rem] w-[1.40rem] mt-2 md:h-14 md:w-14 md:mt-6 border-3 overflow-hidden rounded-full  inline-block">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1491147334573-44cbb4602074?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxlYXZlc3xlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
              </span>
              -Friendly
            </span>{" "}
            products
          </p>
        </div>

        <div className="right   h-full ">
          <div className="images flex relative">
            <div className="absolute overflow-hidden top-0 right-18 h-9 w-9  rounded-full md:h-15 md:w-15 md:right-30">
              <img
                className="h-full w-full object-cover"
                src="https://plus.unsplash.com/premium_photo-1705847870569-0115c42d0c39?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGhhcHB5JTIwaHVtYW58ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
            <div className="absolute overflow-hidden top-0 right-12 h-9 w-9  rounded-full md:h-15 md:w-15 md:right-20">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1749700332082-3cf56154a0be?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGhhcHB5JTIwaHVtYW58ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
            <div className="absolute overflow-hidden top-0 right-6 h-9 w-9  rounded-full md:h-15 md:w-15 md:right-10">
              <img
                className="h-full w-full object-cover object-center"
                src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg0fHx8ZW58MHx8fHx8"
                alt=""
              />
            </div>
            <div className="absolute top-0 right-0 h-9 w-9 flex items-center justify-center border border-gray-100 bg-[#fdfbf5] rounded-full md:h-15 md:w-15 md:right-0">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>

          <div className="text pt-12 md:pt-20">
            <h2 className="font-black text-xl md:text-4xl">500+</h2>
            <p className="text-sm text-gray-400 md:text-lg">Happy Customers</p>
          </div>
        </div>
      </div>

      <div className="hero2 h-[20vh] md:h-[50vh]  my-9 md:my-16 w-full flex items-center gap-2 relative z-0">
        <div className="w-[40%] h-full rounded-2xl overflow-hidden relative z-0">
          <img
            className="h-full w-full object-cover rounded-2xl object-top"
            src="/images/hero1-1.avif"
            alt=""
          />
          <Link
            to="/products"
            className="border border-white text-white px-2 py-0.5 top-1 right-1 text-sm  md:px-5 md:py-2 rounded-3xl absolute z-0 md:top-4 md:right-4 font-bold transition-all duration-400 ease-in-out hover:bg-white hover:text-black"
          >
            Buy now
          </Link>

          <div className="txt bg-white absolute left-1 bottom-1 px-1 text-sm md:text-xl md:bottom-3 md:left-3 rounded-lg">
            <p>5% off</p>
          </div>
        </div>
        <div className="w-[30%] h-full rounded-2xl  z-0  overflow-hidden relative">
          <img
            className="h-full w-full object-cover object-left"
            src="/images/hero1-2.avif"
            alt=""
          />
          <Link
            to="/products"
            className="border border-white text-white px-2 py-0.5 top-1 right-1 text-sm  md:px-5 md:py-2 rounded-3xl absolute z-0 md:top-4 md:right-4 font-bold transition-all duration-400 ease-in-out hover:bg-white hover:text-black"
          >
            Buy now
          </Link>
        </div>
        <div className="w-[30%] h-full rounded-2xl z-10  overflow-hidden relative">
          <img
            className="h-full w-full object-cover"
            src="/images/hero1-3.avif"
            alt=""
          />

          <Link
            to="/products"
            className="border border-white text-white px-2 py-0.5 top-1 right-1 text-sm  md:px-5 md:py-2 rounded-3xl absolute z-0 md:top-4 md:right-4 font-bold transition-all duration-400 ease-in-out hover:bg-white hover:text-black"
          >
            Buy now
          </Link>
        </div>
      </div>

      <hr />

      <div className="hero3 mt-9 md:mt-15  w-full flex items-center justify-between gap-2">
        <div className="left  flex flex-col w-[58%]  gap-3 md:gap-6">
          <Link
            to="/products"
            className="transition-all duration-400 ease-in-out hover:bg-black hover:text-white text-sm px-3 w-max py-1 rounded-3xl border border-gray-300 md:text-lg"
          >
            See More product
          </Link>
          <h1 className="text-2xl pb-5 font-black md:text-5xl md:w-[47%]">
            Top-Selling Product of the year Collection
          </h1>
        </div>

        <div className="right w-[35%] md:w-[25%] flex flex-col justify-center gap-2 md:gap-6">
          <p className="text-sm text-left md:text-lg">
            we do not divide our collectios to seasons we create new models
            every week.
          </p>
          <Link
            to="/products"
            className="transition-all duration-400 ease-in-out hover:bg-black hover:text-white text-sm px-3 py-1 w-max rounded-3xl border border-gray-300 md:text-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>

      <div className="hero4 h-[20vh] md:h-[50vh]  my-9 md:my-15 w-full flex items-end gap-4 relative z-0 ">
        <div className="w-full h-[80%] rounded-2xl overflow-hidden relative z-0 transition-transform duration-500 ease-in-out hover:-translate-y-4 cursor-pointer">
          <img
            className="h-full w-full object-cover rounded-2xl"
            src="/images/hero2-1.avif"
            alt=""
          />
        </div>
        <div className="w-full h-full rounded-2xl  z-0  overflow-hidden relative transition-transform duration-500 ease-in-out hover:-translate-y-4 cursor-pointer">
          <img
            className="h-full w-full object-cover"
            src="/images/hero2-2.avif"
            alt=""
          />
        </div>

        <div className="w-full h-[75%] rounded-2xl z-10  overflow-hidden relative transition-transform duration-500 ease-in-out hover:-translate-y-4 cursor-pointer">
          <img
            className="h-full w-full object-cover"
            src="/images/hero2-3.avif"
            alt=""
          />
        </div>
        <div className="w-full h-[70%] rounded-2xl z-10  overflow-hidden relative transition-transform duration-500 ease-in-out hover:-translate-y-4 cursor-pointer">
          <img
            className="h-full w-full object-cover"
            src="/images/hero2-4.avif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
