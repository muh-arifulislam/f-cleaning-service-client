import React from "react";
import { BsFillTelephoneFill, BsEnvelope } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

// components
import SectionHeader from "../../../components/User/SectionHeader";
import SentMessageForm from "../../../components/User/SentMessageForm";

const Contact = () => {
  return (
    <section className="">
      <SectionHeader title="Contact" />
      <div className="max-w-[1200px] mx-auto py-[120px]">
        <div className="grid lg:md:grid-cols-3 grid-cols-1 lg:md:gap-x-5 gap-0 gap-y-5 mx-4">
          <div className="col-span-2">
            <div className="mb-10">
              <iframe
                className="w-full h-[500px]"
                loading="lazy"
                src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=9&amp;output=embed&amp;iwloc=near"
                title="London Eye, London, United Kingdom"
                aria-label="London Eye, London, United Kingdom"
              ></iframe>
            </div>
            <div className="grid lg:md:grid-cols-3 grid-cols-1">
              <div className="flex gap-5">
                <span className="text-2xl mt-2">
                  <BsFillTelephoneFill />
                </span>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Phone:</h2>
                  <ul>
                    <li className="mb-1">
                      <a className="" href="tel:+01995212706">
                        +88019 952 127 06,
                      </a>
                    </li>
                    <li className="mb-1">
                      <a className="" href="tel:+01995212706">
                        +88019 952 127 06,
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-5">
                <span className="text-2xl mt-2">
                  <BsEnvelope />
                </span>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Email:</h2>
                  <ul>
                    <li className="mb-1">
                      <a className="" href="mailto:arif@gmail.com">
                        arif@gmail.com,
                      </a>
                    </li>
                    <li className="mb-1">
                      <a className="" href="mailto:arif@gmail.com">
                        arif@gmail.com,
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-5">
                <span className="text-2xl mt-2">
                  <FaLocationDot />
                </span>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Location:</h2>
                  <ul>
                    <li className="mb-1">
                      <address>51 Street, Newyork City, NYPD</address>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <SentMessageForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
