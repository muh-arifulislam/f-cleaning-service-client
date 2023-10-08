import React from "react";
import { BsCalendarCheck, BsEnvelope, BsEmojiLaughing } from "react-icons/bs";

// components
import CardWorkingProcess from "../../components/Cards/CardWorkingProcess";

import image from "../../assets/images/section-bg16.jpg";

const WorkingProcessSection = () => {
  return (
    <section className="lg:md:py-[120px] py-[60px] bg-working-process-bg bg-cover bg-center bg-no-repeat">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center lg:md:mb-[100px] mb-10">
          <h2 className="rtin-title font-semibold mb-5">Our Working Process</h2>
          <p className="lg:md:w-[60%] w-[80%]  mx-auto text-slate-600">
          A well-defined, collaborative approach that maximizes productivity, fosters creativity, and delivers exceptional outcomes, consistently exceeding expectations.
          </p>
        </div>
        <div
          className="flex lg:flex-row flex-col gap-y-5 lg:md:bg-working-process-dotted bg-none bg-no-repeat"
          style={{
            backgroundPosition: "43px 20px",
          }}
        >
          <CardWorkingProcess
            IconComponent={BsCalendarCheck}
            title="Book Online form"
            content="Conveniently order books online, with a vast selection and easy delivery options at your fingertips."
          />
          <CardWorkingProcess
            IconComponent={BsEnvelope}
            title="Get Confirmation"
            content="Receive instant assurance and peace of mind with our swift and reliable confirmation service."
          />
          <CardWorkingProcess
            IconComponent={BsEmojiLaughing}
            title="Let's Enjoy"
            content="Let's enjoy life to the fullest, embracing every moment with joy, laughter, and gratitude."
          />
        </div>
      </div>
    </section>
  );
};

export default WorkingProcessSection;
