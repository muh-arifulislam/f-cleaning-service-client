import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsChevronRight, BsCheckCircle } from "react-icons/bs";

// components
import SectionHeader from "../../components/SectionHeader";
import FormBookService from "../../components/Forms/FormBookService";
import Hero from "../../components/Hero/Hero";
import Accordion from "../../components/Accordions/Accordion";
import Newsletter from "../../components/Newsletter";

// images
import image from "../../assets/images/house5.jpg";
import { useGlobalState } from "../../state/GlobalStateProvider";

const SingleService = () => {
  const { services } = useGlobalState();
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    const filteredService = services.data.find((item) => item._id === id);
    setService(filteredService);
  }, []);
  return (
    <section>
      <SectionHeader title={service?.title} />
      <div className="max-w-[1200px] mx-auto py-[120px]">
        <div className="grid lg:md:grid-cols-3 grid-cols-1 lg:md:gap-x-8 gap-0 gap-y-8 mx-4">
          <div className="">
            <div className="mb-8">
              <FormBookService />
            </div>
            <div className="mb-8 lg:md:block hidden">
              <div className="lg:md:p-[40px] p-5 border">
                <div className="relative pb-4 mb-8">
                  <h4 className="text-xl font-semibold">Services</h4>
                  <span className="absolute bottom-0 left-0 w-[40px] h-[2px] bg-blue-600"></span>
                </div>
                <div>
                  <ul>
                    <li className="py-3 border-b border-dashed">
                      <Link
                        className="text-md text-slate-600 inline-flex items-center gap-2 transition hover:text-blue-400"
                        to="/services/offical-cleaning"
                      >
                        <span className="text-xs">
                          <BsChevronRight />
                        </span>
                        <span className="">Office Cleaning</span>
                      </Link>
                    </li>
                    <li className="py-3 border-b border-dashed">
                      <Link
                        className="text-md text-slate-600 inline-flex items-center gap-2 transition hover:text-blue-400"
                        to="/services/offical-cleaning"
                      >
                        <span className="text-xs">
                          <BsChevronRight />
                        </span>
                        <span className="">Office Cleaning</span>
                      </Link>
                    </li>
                    <li className="py-3 border-b border-dashed">
                      <Link
                        className="text-md text-slate-600 inline-flex items-center gap-2 transition hover:text-blue-400"
                        to="/services/offical-cleaning"
                      >
                        <span className="text-xs">
                          <BsChevronRight />
                        </span>
                        <span className="">Office Cleaning</span>
                      </Link>
                    </li>
                    <li className="py-3 border-b border-dashed">
                      <Link
                        className="text-md text-slate-600 inline-flex items-center gap-2 transition hover:text-blue-400"
                        to="/services/offical-cleaning"
                      >
                        <span className="text-xs">
                          <BsChevronRight />
                        </span>
                        <span className="">Office Cleaning</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:md:block hidden">
              <Newsletter />
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-10">
              <img src={image} alt="" />
            </div>
            <div>
              <div className="">
                <p className="mb-5 text-slate-600">{service?.description1}</p>
                <p className="text-slate-600">{service?.description2}</p>
              </div>
            </div>
            <div className="my-8 grid lg:md:grid-cols-2 grid-cols-1">
              <div className="flex gap-5">
                <span className="text-4xl text-secondary mt-1">
                  <BsCheckCircle />
                </span>
                <div>
                  <h2 className="text-2xl text-primary font-semibold mb-4">
                    Quality We Ensure
                  </h2>
                  <p className="text-slate-600">
                    Aorem ipsum dolor sit amet consectetur adipisicing elit sed
                    doeiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <span className="text-4xl text-secondary mt-1">
                  <BsCheckCircle />
                </span>
                <div>
                  <h2 className="text-2xl text-primary font-semibold mb-4">
                    Quality We Ensure
                  </h2>
                  <p className="text-slate-600">
                    Aorem ipsum dolor sit amet consectetur adipisicing elit sed
                    doeiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <Hero />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-5">
                Frequently Ask Questions
              </h2>
              <p className="mb-5 text-slate-600">
                Ahen an unknown printer took a galley of type and scrambled it
                to make a type specimen book areIt hasear survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentiall yellow aw unchangedh the release o
                type.Ahen an unknown printer took a galley of type scram.
              </p>
              <div>
                {service?.faq?.map((item, idx) => (
                  <Accordion key={idx} title={item?.qns} content={item?.ans} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleService;
