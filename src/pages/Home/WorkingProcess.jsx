import React from "react";
import image from "../../assets/images/section-bg16.jpg";
import image1 from "../../assets/images/section-bg1.png";
import { BsCalendarCheck } from "react-icons/bs";
const WorkingProcess = () => {
  return (
    <section
      className="py-[120px]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-[100px]">
          <h2 className="text-4xl font-semibold mb-5">Our Working Process</h2>
          <p className="w-[60%] mx-auto">
            Perspiciatis unde omnis iste natus error sit voluptatem accusantium
            dol oremque laudantium, totam remeaque ipsa.
          </p>
        </div>
        <div
          className="flex lg:flex-row flex-col gap-y-5"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "43px 20px",
          }}
        >
          <div className="flex flex-col items-center px-5 text-center">
            <div className="w-[150px] h-[150px] bg-blue-600 rounded-md flex items-center justify-center text-white mb-8 rotate-12 transition ease-linear duration-200 hover:rotate-0">
              <BsCalendarCheck size={"48px"} />
            </div>
            <h2 className="text-2xl font-semibold mb-5">Book Online form</h2>
            <p>
              Ahen an unknown printer took a galley type and scrambled nknown
              printer.
            </p>
          </div>
          <div className="flex flex-col items-center px-5 text-center">
            <div className="w-[150px] h-[150px] bg-blue-600 rounded-md flex items-center justify-center text-white mb-8 rotate-12 transition ease-linear duration-200 hover:rotate-0">
              <BsCalendarCheck size={"48px"} />
            </div>
            <h2 className="text-2xl font-semibold mb-5">Book Online form</h2>
            <p>
              Ahen an unknown printer took a galley type and scrambled nknown
              printer.
            </p>
          </div>
          <div className="flex flex-col items-center px-5 text-center">
            <div className="w-[150px] h-[150px] bg-blue-600 rounded-md flex items-center justify-center text-white mb-8 rotate-12 transition ease-linear duration-200 hover:rotate-0">
              <BsCalendarCheck size={"48px"} />
            </div>
            <h2 className="text-2xl font-semibold mb-5">Book Online form</h2>
            <p>
              Ahen an unknown printer took a galley type and scrambled nknown
              printer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
