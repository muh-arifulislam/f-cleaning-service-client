import React from "react";
import { BsCheckCircle } from "react-icons/bs";

// images
import personImage1 from "../../assets/images/img_tri_1.png";
import personImage2 from "../../assets/images/img_tri_2.png";
import personImage3 from "../../assets/images/img_tri_3.png";

const WhyChooseUsSection = () => {
  return (
    <section className="lg:md:py-[120px] py-[60px] lg:px-0 px-4">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 grid-cols-1">
        <div className="">
          <p className="text-lg font-medium text-secondary mb-2">
            Why Choose Us
          </p>
          <h2 className="rtin-title font-semibold">
            We Will Make Absolutely Any Place Clean, Neat & Tidy.
          </h2>
          <p className="mb-5 text-slate-600">
            Choose us for exceptional service, reliability, and a commitment to
            your satisfaction. Experience the difference in quality and
            convenience with our team.
          </p>
          <div>
            <ul>
              <li>
                <div className="flex items-start gap-5">
                  <span className="mt-1 text-4xl text-secondary">
                    <BsCheckCircle className="" />
                  </span>
                  <div className="mb-5">
                    <h4 className="text-[22px] text-primary leading-[1.4] font-semibold mb-3">
                      Your Trusted Cleaning Partner
                    </h4>
                    <p className="text-slate-600">
                      We offer trusted, professional cleaning services, backed
                      by a track record of excellence and a commitment to your
                      satisfaction.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-5">
                  <span className="mt-1 text-4xl text-secondary">
                    <BsCheckCircle className="" />
                  </span>
                  <div className="mb-5">
                    <h4 className="text-[22px] text-primary leading-[1.4] font-semibold mb-3">
                      Quality, Convenience, Confidence
                    </h4>
                    <p className="text-slate-600">
                      Option for us and enjoy top-quality cleaning, hassle-free
                      scheduling, and the confidence of a cleaner, healthier
                      environment.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-5">
                  <span className="mt-1 text-4xl text-secondary">
                    <BsCheckCircle className="" />
                  </span>
                  <div>
                    <h4 className="text-[22px] text-primary leading-[1.4] font-semibold mb-3">
                      Elevate Your Cleanliness Standards
                    </h4>
                    <p className="text-slate-600">
                      Choose us to elevate your cleanliness standards with our
                      dedicated team, cutting-edge solutions, and a commitment
                      to exceeding your expectations.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative ">
          <div className="relative w-full lg:h-full h-full flex justify-center items-start">
            <img
              className="transition hover:scale-[1.1]"
              src={personImage1}
              alt=""
            />
            <img
              className="absolute bottom-0 left-0 z-10 lg:inline-block hidden transition hover:scale-[1.1]"
              src={personImage2}
              alt=""
            />
            <img
              className="absolute bottom-0 right-0 lg:inline-block hidden transition hover:scale-[1.1]"
              src={personImage3}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
