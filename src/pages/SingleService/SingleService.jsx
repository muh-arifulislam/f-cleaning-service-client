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
import CardServiceLink from "../../components/Cards/CardServiceLink";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import FormAddReview from "../../components/Forms/FormAddReview";

const SingleService = () => {
  const { services } = useGlobalState();
  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    const filteredService = services.data.find((item) => item._id === id);
    setService(filteredService);
  }, [services, id]);
  if (services.loading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <span className="loader"></span>
      </div>
    );
  }
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
              <CardServiceLink />
            </div>
            <div className="lg:md:block hidden">
              <Newsletter />
            </div>
          </div>
          <div className="col-span-2">
            {/* service main image  */}
            <div className="mb-10">
              <img src={service?.img} alt="" />
            </div>
            {/* service descriptions  */}
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
                    Unwavering commitment to top-notch cleaning standards. Your
                    satisfaction is our priority. Experience excellence with our
                    cleaning services.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <span className="text-4xl text-secondary mt-1">
                  <BsCheckCircle />
                </span>
                <div>
                  <h2 className="text-2xl text-primary font-semibold mb-4">
                    Experienced Workers
                  </h2>
                  <p className="text-slate-600">
                    Highly skilled and seasoned professionals dedicated to
                    superior cleaning. Trust our experienced team for
                    outstanding results in every service.
                  </p>
                </div>
              </div>
            </div>
            {/* hero section  */}
            <div className="mb-8">
              <Hero />
            </div>
            {/* faq section  */}
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-5">
                Frequently Ask Questions
              </h2>
              <p className="mb-5 text-slate-600">
                Find quick answers to common questions in our FAQ section. We've
                compiled a comprehensive list of information to address your
                queries efficiently. Explore now for clarity and convenience.
              </p>
              <div>
                {service?.faq?.map((item, idx) => (
                  <Accordion key={idx} title={item?.qns} content={item?.ans} />
                ))}
              </div>
            </div>
            <div></div>
          </div>
        </div>
        {/* user review adding section  */}
        <section className="mt-8">
          <FormAddReview />
        </section>
      </div>
    </section>
  );
};

export default SingleService;
