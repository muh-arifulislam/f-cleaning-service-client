import React from "react";
import { BsFillTelephoneFill, BsEnvelope } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

// components
import SectionHeader from "../../components/SectionHeader";
import FormSentMessage from "../../components/Forms/FormSentMessage";

const Contact = () => {
  return (
    <section className="">
      <SectionHeader title="Contact" />
      <div className="max-w-[1200px] mx-auto py-[120px]">
        <div className="grid lg:md:grid-cols-3 grid-cols-1 lg:md:gap-x-5 gap-0 gap-y-5 mx-4">
          <div className="col-span-2">
            <div className="mb-10">
              <iframe
                width={"100%"}
                height={"450px"}
                title="contact-map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5004.381943735397!2d58.246059106806364!3d23.626617814672226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1696765783906!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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
                      <a className="" href="tel:+96895527539">
                        +968 95527 539
                      </a>
                    </li>
                    <li className="mb-1">
                      <a className="" href="tel:+96895546049">
                        +968 95546 049
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
                      <a className="" href="mailto:admin@gocleanix.com">
                        info@gocleanix.com
                      </a>
                    </li>
                    <li className="mb-1">
                      <a className="" href="mailto:gocleanix@gmail.com">
                        gocleanix@gmail.com
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
                      <address>Al Hail, Muscat, Oman</address>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <FormSentMessage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
