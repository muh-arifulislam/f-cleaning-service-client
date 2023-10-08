import React from "react";

// components
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useGlobalState } from "../../state/GlobalStateProvider";

const TopBannerSection = () => {
  const { apiUrl } = useGlobalState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {
    register: registerMobile,
    handleSubmit: handleSubmitMobile,
    reset: resetMobile,
    formState: { errors: errorsMobile },
  } = useForm();

  const onSubmit = (data) => {
    reset();
    fetch(`${apiUrl}customer`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledgement) {
          toast.success("Welcome! your booking successfully confirmed.");
        }
      })
      .catch((error) => toast.error(error.message));
  };
  const onSubmitMobile = (data) => {
    resetMobile();
    fetch(`${apiUrl}customer`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledgement) {
          toast.success("Welcome! your booking successfully confirmed.");
        }
      })
      .catch((error) => toast.error(error.message));
  };
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
            <Button varient="link" href="/book-service">
              Take On Service
            </Button>
          </div>
        </div>
        {/* only desktop view */}
        <div className="lg:block md:block hidden absolute bottom-0 left-0 w-full">
          <div className="max-w-[1200px] mx-auto px-3 py-5 custom-shadow rounded-md lg:translate-y-[40%] ">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-white">
                Request for Estimate
              </h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
                <div>
                  <input
                    {...register("name", { required: true, maxLength: 20 })}
                    aria-invalid={errors.name ? "true" : "false"}
                    className="w-full px-3 py-3 border outline-none rounded-md"
                    type="text"
                    placeholder="Name*"
                  />
                  {errors.name?.type === "required" && (
                    <p role="alert" className="pt-2 text-red-500">
                      Error !! First name is required
                    </p>
                  )}
                </div>
                <div>
                  <input
                    {...register("address", {
                      required: true,
                    })}
                    className="w-full px-3 py-3 border outline-none rounded-md"
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Address*"
                  />
                  {errors.address?.type === "required" && (
                    <p role="alert" className="pt-2 text-red-500">
                      Error !! Address is required
                    </p>
                  )}
                </div>
                <div>
                  <input
                    {...register("phone", {
                      required: true,
                      pattern: /\d{8,}/,
                    })}
                    aria-invalid={errors.phone ? "true" : "false"}
                    className="w-full px-3 py-3 border outline-none rounded-md"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone*"
                  />
                  {errors.phone?.type === "required" && (
                    <p role="alert" className="pt-2 text-red-500">
                      Error !! Phone number is required
                    </p>
                  )}
                </div>
                <div>
                  {/* <input
                    className="w-full px-3 py-3 outline-none rounded-md bg-orange-400 font-medium"
                    type="submit"
                    value="Submit"
                  /> */}
                  <Button type="submit" className="w-full flex justify-center">
                    Submit
                  </Button>
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
            <h3 className="text-2xl font-semibold text-center">
              Request for Query
            </h3>
          </div>
          <form onClick={handleSubmitMobile(onSubmitMobile)}>
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
              <div>
                <input
                  {...registerMobile("name", { required: true, maxLength: 20 })}
                  className="w-full px-3 py-3 border outline-none rounded-md"
                  type="text"
                  placeholder="Name*"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  {...registerMobile("address", {
                    required: true,
                  })}
                  className="w-full px-3 py-3 border outline-none rounded-md"
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address*"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  {...registerMobile("phone", {
                    required: true,
                    pattern: /\d{8,}/,
                  })}
                  className="w-full px-3 py-3 border outline-none rounded-md"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone*"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  className="w-full px-3 py-3 outline-none rounded-md bg-tertiary text-slate-600 font-medium"
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
