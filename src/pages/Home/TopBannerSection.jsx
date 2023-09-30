import React from "react";

// components
import Button from "../../components/User/Button";

const TopBannerSection = () => {
  return (
    <section className="">
      <div className="relative lg:py-[250px] py-[100px] h-[100vh] lg:mb-[100px] md:mb-[100px] mb-5 bg-top-banner-bg bg-cover bg-center bg-no-repeat z-0 overlay-primary">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center px-[10px]">
          <div className="text-white text-center">
            <p className="text-2xl font-medium mb-[15px]">
              The Best Cleaning Service Ever!
            </p>
            <p className="lg:text-[58px] md:text-[58px] text-5xl font-semibold leading-[1.3] mb-[20px]">
              We Are Certified Company
            </p>
            <p className="text-lg lg:w-[50%] md:w-[50%] w-[80%] mx-auto mb-[40px]">
              Our best-in-class WordPress solution, with additional optimization
              to make running a WooCommerce online storer and straight forward
              so you can.
            </p>
            <Button>Take On Service</Button>
          </div>
        </div>
        {/* only desktop view */}
        <div className="lg:block md:block hidden absolute bottom-0 left-0 w-full">
          <div className="max-w-[1200px] mx-auto px-[10px] py-[20px] custom-shadow rounded-md lg:translate-y-[40%] ">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-white">
                Request for Estimate
              </h3>
            </div>
            <form action="">
              <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
                <div>
                  <input
                    className="w-full px-3 py-3 outline-none rounded-md"
                    type="text"
                    placeholder="Name*"
                  />
                </div>
                <div>
                  <input
                    className="w-full px-3 py-3 outline-none rounded-md"
                    type="email"
                    name=""
                    id=""
                    placeholder="Email*"
                  />
                </div>
                <div>
                  <select className="w-full px-3 py-3 outline-none rounded-md">
                    <option value="0">Select Service:</option>
                    <option value="1">Audi</option>
                    <option value="2">BMW</option>
                  </select>
                </div>
                <div>
                  <input
                    className="w-full px-3 py-3 outline-none rounded-md bg-orange-400 font-medium"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*only mobile view form  */}
      <div className="lg:hidden block p-[10px]">
        <div className="max-w-[1200px] mx-auto px-[10px] py-[20px] custom-shadow rounded-md lg:translate-y-[40%] ">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold ">Request for Estimate</h3>
          </div>
          <form action="">
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
              <div>
                <input
                  className="w-full px-3 py-3 outline-none rounded-md"
                  type="text"
                  placeholder="Name*"
                />
              </div>
              <div>
                <input
                  className="w-full px-3 py-3 outline-none rounded-md"
                  type="email"
                  name=""
                  id=""
                  placeholder="Email*"
                />
              </div>
              <div>
                <select className="w-full px-3 py-3 outline-none rounded-md">
                  <option value="0">Select Service:</option>
                  <option value="1">Audi</option>
                  <option value="2">BMW</option>
                </select>
              </div>
              <div>
                <input
                  className="w-full px-3 py-3 outline-none rounded-md bg-orange-400 font-medium"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TopBannerSection;
