import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useGlobalState } from "../../state/GlobalStateProvider";

const FormAddReview = () => {
  const { apiUrl } = useGlobalState();
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    reset();

    fetch(`${apiUrl}review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledgement) {
          toast.success("Welcome! your review successfully added.");
        } else {
          if (data?.error?.code === 11000) {
            toast.warning("phone number already used!!!");
          }
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="bg-slate-800 text-white py-20">
      <div className="flex lg:md:flex-row flex-col justify-between lg:md:px-8 items-center">
        <div className="p-4">
          <p className="ml-6 text-yellow-300 text-lg uppercase tracking-loose font-semibold">
            REVIEW
          </p>
          <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">
            Leave us a feedback!
          </p>
          <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
            Please provide your valuable feedback and something something ...
          </p>
        </div>
        <div className="bg-white rounded-md">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 border rounded-md"
          >
            <div className="mb-5 grid lg:md:grid-cols-2 grid-cols-1 gap-x-5">
              <div className="">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Full Name*
                </label>
                <input
                  {...register("name", { required: true, maxLength: 20 })}
                  aria-invalid={errors.name ? "true" : "false"}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {errors.name?.type === "required" && (
                  <p role="alert" className="pt-2 text-red-500">
                    Error !! Name is required
                  </p>
                )}
              </div>
              <div className="">
                <label
                  htmlFor="phone"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Phone Number*
                </label>
                <input
                  {...register("phone", {
                    required: true,
                    pattern: /\d{8,}/,
                  })}
                  aria-invalid={errors.phone ? "true" : "false"}
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {errors.phone?.type === "required" && (
                  <p role="alert" className="pt-2 text-red-500">
                    Error !! Phone number is required
                  </p>
                )}
              </div>
            </div>
            <div className="mb-5 grid lg:md:grid-cols-2 grid-cols-1 gap-x-5">
              <div className="">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-[#07074D]"
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
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="">
                <label
                  htmlFor="ratings"
                  className="mb-3 block text-base font-medium text-primary"
                >
                  Ratings
                </label>
                <select
                  {...register("ratings", { required: true })}
                  aria-invalid={errors.ratings ? "true" : "false"}
                  name="ratings"
                  id="ratings"
                  type="select"
                  className="w-full  rounded border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option defaultChecked defaultValue={5} value={5}>
                    5
                  </option>
                  <option value={4}>4</option>
                  <option value={3}>3</option>
                  <option value={2}>2</option>
                  <option value={1}>1</option>
                </select>
                {errors.ratings?.type === "required" && (
                  <p role="alert" className="pt-2 text-red-500">
                    Error !! First name is required
                  </p>
                )}
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="testimonial"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Testimonial
              </label>
              <textarea
                {...register("testimonial", {
                  required: true,
                })}
                aria-invalid={errors.testimonial ? "true" : "false"}
                type="text"
                name="testimonial"
                id="testimonial"
                placeholder="write your review"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              {errors.testimonial?.type === "required" && (
                <p role="alert" className="pt-2 text-red-500">
                  Error !! testimonial is required
                </p>
              )}
            </div>
            <div>
              <input
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none cursor-pointer"
                value={"Add Review"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAddReview;
