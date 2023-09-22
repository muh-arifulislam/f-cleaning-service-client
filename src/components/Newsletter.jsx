import React from "react";
import icon from "../assets/icons/newsmail.png";
const Newsletter = () => {
  return (
    <div className="lg:md:p-[40px] p-5 rounded bg-blue-700">
      <div className="flex justify-center mb-5">
        <img src={icon} alt="" />
      </div>
      <div className="text-center">
        <h2 className="text-xl text-white font-semibold mb-2">Newsletter</h2>
        <p className="mb-5 text-slate-300">Subscribe us & stay with updates</p>
      </div>
      <div>
        <form action="">
          <div className="mb-2">
            <input
              className="w-full px-[20px] py-[15px] bg-slate-100 outline-blue-500 outline-1 rounded"
              placeholder="Email*"
              type="email"
            />
          </div>
          <div className="flex">
            <input
              className="w-full rounded py-4 bg-amber-400 text-lg font-medium cursor-pointer"
              type="button"
              value="Subscribe"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
