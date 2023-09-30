import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

// components
import SectionHeader from "../../components/SectionHeader";
import FormSentMessage from "../../components/Forms/FormSentMessage";
import Newsletter from "../../components/Newsletter";

const BookService = () => {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newdata = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      address: data.area + ", " + data.city,
    };
    fetch("http://localhost:9000/customer", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newdata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledgement) {
          reset();
          toast.success("Welcome! your booking successfully confirmed.");
        }
      });
  };
  return (
    <section>
      <SectionHeader title="Book Service" />
      <div className="max-w-[1200px] mx-auto lg:md:py-[120px] py-[60px]">
        <div className="grid lg:md:grid-cols-3 grid-cols-1 lg:md:gap-x-5 gap-0 gap-y-5 mx-4">
          <div className="col-span-2 p-4 border">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="mb-5">
                <label
                  for="name"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Full Name
                </label>
                <input
                  {...register("name", { required: true, maxLength: 20 })}
                  aria-invalid={errors.name ? "true" : "false"}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {errors.name?.type === "required" && (
                  <p role="alert" className="pt-2 text-red-500">
                    Error !! First name is required
                  </p>
                )}
              </div>
              <div class="mb-5">
                <label
                  for="phone"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Phone Number
                </label>
                <input
                  {...register("phone", {
                    required: true,
                    pattern: /^(9|7)\d{7}$/,
                  })}
                  aria-invalid={errors.phone ? "true" : "false"}
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {errors.phone?.type === "required" && (
                  <p role="alert" className="pt-2 text-red-500">
                    Error !! Phone number is required
                  </p>
                )}
              </div>
              <div class="mb-5">
                <label
                  for="email"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <input
                  {...register("email", {
                    required: false,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    },
                  })}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="mb-5 pt-3">
                <label class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                  Address Details
                </label>
                <div class="-mx-3 flex flex-wrap">
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <input
                        {...register("area", {
                          required: true,
                        })}
                        aria-invalid={errors.area ? "true" : "false"}
                        type="text"
                        name="area"
                        id="area"
                        placeholder="Enter area"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      {errors.area?.type === "required" && (
                        <p role="alert" className="pt-2 text-red-500">
                          Error !! Address is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <input
                        {...register("city", {
                          required: true,
                        })}
                        aria-invalid={errors.city ? "true" : "false"}
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Enter city"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                      {errors.city?.type === "required" && (
                        <p role="alert" className="pt-2 text-red-500">
                          Error !! Address is required
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <input
                  type="submit"
                  class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                  value={"Book Service"}
                />
              </div>
            </form>
          </div>
          <div className="">
            <div className="mb-8">
              <div className="lg:md:p-[40px] p-5 border">
                <div className="relative pb-4 mb-8">
                  <h4 className="text-xl font-semibold">Services</h4>
                  <span className="absolute bottom-0 left-0 w-[40px] h-[2px] bg-blue-600"></span>
                </div>
                <div>
                  <ul>
                    <li className="py-3 border-b border-dashed">
                      <Link
                        className="text-md text-slate-600 inline-flex items-center gap-2 transition hover:text-blue-400"
                        to="/services/offical-cleaning"
                      >
                        <span className="text-xs">
                          <BsChevronRight />
                        </span>
                        <span className="">Office Cleaning</span>
                      </Link>
                    </li>
                    <li className="py-3 border-b border-dashed">
                      <Link
                        className="text-md text-slate-600 inline-flex items-center gap-2 transition hover:text-blue-400"
                        to="/services/offical-cleaning"
                      >
                        <span className="text-xs">
                          <BsChevronRight />
                        </span>
                        <span className="">Office Cleaning</span>
                      </Link>
                    </li>
                    <li className="py-3 border-b border-dashed">
                      <Link
                        className="text-md text-slate-600 inline-flex items-center gap-2 transition hover:text-blue-400"
                        to="/services/offical-cleaning"
                      >
                        <span className="text-xs">
                          <BsChevronRight />
                        </span>
                        <span className="">Office Cleaning</span>
                      </Link>
                    </li>
                    <li className="py-3 border-b border-dashed">
                      <Link
                        className="text-md text-slate-600 inline-flex items-center gap-2 transition hover:text-blue-400"
                        to="/services/offical-cleaning"
                      >
                        <span className="text-xs">
                          <BsChevronRight />
                        </span>
                        <span className="">Office Cleaning</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="">
              <Newsletter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookService;
