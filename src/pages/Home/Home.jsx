import React from "react";
import image from "../../assets/images/slide1_3.jpg";
import Button from "../../components/Button";
import TopFeature from "./TopFeature";
const Home = () => {
  return (
    <div>
      <section
        className="relative lg:py-[250px] py-[100px] h-[100vh]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center px-[10px]">
          <div className="text-white text-center">
            <p className="text-2xl font-medium">
              The Best Cleaning Service Ever!
            </p>
            <p className="text-[58px] font-semibold mb-[20px]">
              We Are Certified Company
            </p>
            <p className="text-lg w-[50%] mx-auto mb-[40px]">
              Our best-in-class WordPress solution, with additional optimization
              to make running a WooCommerce online storer and straight forward
              so you can.
            </p>
            <Button>Take On Service</Button>
          </div>
        </div>
      </section>
      <TopFeature />
    </div>
  );
};

export default Home;
