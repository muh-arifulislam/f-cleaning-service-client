import React from "react";
import SectionHeader from "../../components/SectionHeader";
import bgImage from "../../assets/images/404-bg.png";
import image from "../../assets/images/404.png";
import Navbar from "../../layout/Main/Navbar";
import Footer from "../../layout/Main/Footer";
import Button from "../../components/Button";
const NotFoundPage = () => {
  return (
    <section className="">
      <Navbar />
      <SectionHeader title={"Error 404"}/>
      <div className="">
        <div className="px-4 py-[120px] bg-slate-500">
          <div className="flex justify-center mb-8">
            <img src={image} alt="" />
          </div>
          <div className="flex flex-col items-center lg:md:text-left text-center">
            <h4 className="text-5xl font-bold mb-8">
              Sorry! Page Was Not Found
            </h4>
            <h5 className="mb-8 lg:md:w-[40%] w-[80%] text-center text-lg font-medium">
              The page you are looking is not available or has been removed. Try
              going to Home Page by using the button below.
            </h5>
            <Button>Go Home Page</Button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default NotFoundPage;
