import React from "react";
import { Link, useParams } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import { BsChevronRight, BsCheckCircle } from "react-icons/bs";
import BookServiceForm from "../../components/BookServiceForm";
import image from "../../assets/images/house5.jpg";
import Hero from "../../components/Hero";
import Accordion from "../../components/Accordion";
import Newsletter from "../../components/Newsletter";
const SingleService = () => {
  const { id } = useParams();
  const sectionTitle = id.split("-").join(" ");
  return (
    <section>
      <SectionHeader title={sectionTitle} />
      <div className="max-w-[1200px] mx-auto py-[120px]">
        <div className="grid lg:md:grid-cols-3 grid-cols-1 lg:md:gap-x-8 gap-0 gap-y-8 mx-4">
          <div className="">
            <div className="mb-8">
              <BookServiceForm />
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
                <p className="mb-5">
                  Ahen an unknown printer took a galley of type and scrambled it
                  to make a type specimen book areIt hasear survived not only
                  five centuries, but also the leap into electronic typesetting,
                  remaining essentiall yellow aw unchangedh the release of
                  Letraset sheets containing and more recently with desktop.Ahen
                  an unknown printer took a galley of type and scrambled it to
                  make a type.
                </p>
                <p>
                  Ahen an unknown printer took a galley of type and scrambled it
                  to make a type specimen book areIt hasear survived not only
                  five centuries, but also the leap into electronic typesetting,
                  remaining essentiall yellow aw unchangedh the release of
                  Letraset sheets containing and more recently with desktop.Ahen
                  an unknown printer took a galley of type and scrambled it to
                  make a type.
                </p>
              </div>
            </div>
            <div className="my-8 grid lg:md:grid-cols-2 grid-cols-1">
              <div className="flex gap-5">
                <span className="text-4xl text-blue-500 mt-1">
                  <BsCheckCircle />
                </span>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Quality We Ensure
                  </h2>
                  <p>
                    Aorem ipsum dolor sit amet consectetur adipisicing elit sed
                    doeiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <span className="text-4xl text-blue-500 mt-1">
                  <BsCheckCircle />
                </span>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Quality We Ensure
                  </h2>
                  <p>
                    Aorem ipsum dolor sit amet consectetur adipisicing elit sed
                    doeiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <p className="mb-5">
                Ahen an unknown printer took a galley of type and scrambled it
                to make a type specimen book areIt hasear survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentiall yellow aw unchangedh the release of
                Letraset sheets containing and more recently with desktop.Ahen
                an unknown printer took a galley of type and scrambled it to
                make a type.
              </p>
              <p>
                Ahen an unknown printer took a galley of type and scrambled it
                to make a type specimen book areIt hasear survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentiall yellow aw unchangedh the release of
                Letraset sheets containing and more recently with desktop.Ahen
                an unknown printer took a galley of type and scrambled it to
                make a type.
              </p>
            </div>
            <div className="mb-8">
              <Hero />
            </div>
            <div className="mb-8">
              <Hero />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-5">
                Frequently Ask Questions
              </h2>
              <p className="mb-5">
                Ahen an unknown printer took a galley of type and scrambled it
                to make a type specimen book areIt hasear survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentiall yellow aw unchangedh the release o
                type.Ahen an unknown printer took a galley of type scram.
              </p>
              <div>
                <Accordion
                  title="Section 1"
                  content="Ahen an unknown printer took a galley of type and scrambled it to make a type specimen book areIt hasear survived not only five centuries, but also the leap into electronic typesetting, remaining essentiall yellow aw unchangedh."
                />
                <Accordion
                  title="Section 1"
                  content="Ahen an unknown printer took a galley of type and scrambled it to make a type specimen book areIt hasear survived not only five centuries, but also the leap into electronic typesetting, remaining essentiall yellow aw unchangedh."
                />
                <Accordion
                  title="Section 1"
                  content="Ahen an unknown printer took a galley of type and scrambled it to make a type specimen book areIt hasear survived not only five centuries, but also the leap into electronic typesetting, remaining essentiall yellow aw unchangedh."
                />
                <Accordion
                  title="Section 1"
                  content="Ahen an unknown printer took a galley of type and scrambled it to make a type specimen book areIt hasear survived not only five centuries, but also the leap into electronic typesetting, remaining essentiall yellow aw unchangedh."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleService;
