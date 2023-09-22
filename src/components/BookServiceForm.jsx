import React from "react";

const BookServiceForm = () => {
  return (
    <form action="" className="lg:md:p-[40px] p-5 border">
      <div className="relative pb-4 mb-8">
        <h4 className="text-xl font-semibold">Please Fill Information !!</h4>
        <span className="absolute bottom-0 left-0 w-[40px] h-[2px] bg-blue-600"></span>
      </div>
      <div className="mb-2">
        <input
          className="w-full px-[20px] py-[15px] bg-slate-100 outline-blue-500 outline-1 rounded"
          placeholder="Name*"
          type="text"
        />
      </div>
      <div className="mb-2">
        <input
          className="w-full px-[20px] py-[15px] bg-slate-100 outline-blue-500 outline-1 rounded"
          placeholder="Address*"
          type="text"
        />
      </div>
      <div className="mb-2">
        <input
          className="w-full px-[20px] py-[15px] bg-slate-100 outline-blue-500 outline-1 rounded"
          placeholder="Phone*"
          type="text"
        />
      </div>

      <div className="mb-2">
        <select className="w-full px-[20px] py-[15px] bg-slate-100 outline-blue-500 outline-1 rounded">
          <option value="0">Office Cleaning</option>
          <option value="1">House Cleaning</option>
          <option value="2">Household Cleaning</option>
        </select>
      </div>

      <div className="flex">
        <input
          className="w-full rounded py-4 bg-amber-400 text-lg font-medium cursor-pointer"
          type="button"
          value="Book Now"
        />
      </div>
    </form>
  );
};

export default BookServiceForm;
