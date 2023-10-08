import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useGlobalState } from "../../state/GlobalStateProvider";

const FormBookService = () => {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:md:p-[40px] p-5 border"
    >
      <div className="relative pb-4 mb-8">
        <h4 className="text-xl font-semibold">Please Fill Information !!</h4>
        <span className="absolute bottom-0 left-0 w-[40px] h-[2px] bg-blue-600"></span>
      </div>
      <div className="mb-2">
        <input
          {...register("name", { required: true, maxLength: 20 })}
          aria-invalid={errors.name ? "true" : "false"}
          className="w-full px-[20px] py-[15px] bg-slate-100 outline-blue-500 outline-1 rounded"
          placeholder="Name*"
          type="text"
        />
        {errors.name?.type === "required" && (
          <p role="alert" className="pt-2 text-red-500">
            Error !! First name is required
          </p>
        )}
      </div>
      <div className="mb-2">
        <input
          {...register("address", {
            required: true,
          })}
          aria-invalid={errors.area ? "true" : "false"}
          className="w-full px-[20px] py-[15px] bg-slate-100 outline-blue-500 outline-1 rounded"
          placeholder="Address*"
          type="text"
        />
        {errors.address?.type === "required" && (
          <p role="alert" className="pt-2 text-red-500">
            Error !! Address is required
          </p>
        )}
      </div>
      <div className="mb-2">
        <input
          {...register("phone", {
            required: true,
            pattern: /\d{8,}/,
          })}
          aria-invalid={errors.phone ? "true" : "false"}
          className="w-full px-[20px] py-[15px] bg-slate-100 outline-blue-500 outline-1 rounded"
          placeholder="Phone*"
          type="text"
        />
        {errors.phone?.type === "required" && (
          <p role="alert" className="pt-2 text-red-500">
            Error !! Phone number is required
          </p>
        )}
      </div>

      <div className="flex">
        <input
          className="w-full rounded py-4 bg-amber-400 text-lg font-medium cursor-pointer"
          type="submit"
          value="Book Now"
        />
      </div>
    </form>
  );
};

export default FormBookService;
