import React from "react";
import { useRouteError } from "react-router-dom";

// components
import SectionHeader from "../../components/User/SectionHeader";
import Header from "../../layout/Main/Header";
import Footer from "../../layout/Main/Footer";
import Button from "../../components/User/Button";

// images
import image from "../../assets/images/404.png";

const NotFoundPage = () => {
  const error = useRouteError();
  return (
    <section className="">
      <Header />
      <SectionHeader title={"Error 404"} />
      <div className="">
        <div className="px-4 py-[120px] bg-slate-500">
          <div className="flex justify-center mb-8">
            <span className="text-8xl font-bold">{error.status}</span>
          </div>
          <div className="flex flex-col items-center lg:md:text-left text-center">
            <h4 className="text-5xl font-bold mb-8">
              Sorry! Page Was Not Found
            </h4>
            <h5 className="mb-8 lg:md:w-[40%] w-[80%] text-center text-lg font-medium">
              {error?.error?.message || error.statusText}
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
