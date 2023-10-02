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
            Perspiciatis unde omnis iste natus error sit voluptatem accusantium
            dol oremque laudantium, totam remeaque ipsa.
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
            content="Ahen an unknown printer took a galley type and scrambled nknown printer."
          />
          <CardWorkingProcess
            IconComponent={BsEnvelope}
            title="Get Confirmation"
            content="Ahen an unknown printer took a galley type and scrambled nknown printer."
          />
          <CardWorkingProcess
            IconComponent={BsEmojiLaughing}
            title="Let's Enjoy"
            content="Ahen an unknown printer took a galley type and scrambled nknown printer."
          />
        </div>
      </div>
    </section>
  );
};

export default WorkingProcessSection;
