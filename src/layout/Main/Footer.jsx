import React from "react";
import logo from "../../assets/images/logo2.png";
import SocialLinksButton from "../../components/SocialLinksButton";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaEnvelope,
  FaLocationArrow,
  FaPhone,
} from "react-icons/fa";
import image2 from "../../assets/images/figure1.png";
import image3 from "../../assets/images/figure2.png";
const Footer = () => {
  return (
    <footer className="pt-[100px] pb-[60px] bg-blue-950 relative z-0">
      <div className="max-w-[1200px] mx-auto z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 lg:px-0 px-3 justify-items-center">
          <div className="flex flex-col lg:items-start items-center">
            <div className="mb-5">
              <img
                className="lg:max-w-[190px] max-w-[120px] py-2"
                src={logo}
                alt=""
              />
            </div>
            <p className="mb-5 text-slate-400">
              There are many variations of passages of Lorem Ipsum available,
              There are many variations of passages.
            </p>
            <div>
              <h4 className="text-xl font-semibold mb-5 text-white">
                Follow Us on:
              </h4>
              <SocialLinksButton />
            </div>
          </div>
          <div className="lg:text-start text-center">
            <h2 className="text-2xl text-white font-semibold mb-5">Services</h2>
            <ul>
              <li className="mb-4">
                <Link
                  to={"/"}
                  className="inline-flex  items-center gap-2 font-medium text-slate-400 transition hover:text-white"
                >
                  <span className="text-sm">
                    <FaChevronRight />
                  </span>
                  Toilet Cleaning
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to={"/"}
                  className="inline-flex  items-center gap-2 font-medium text-slate-400 transition hover:text-white"
                >
                  <span className="text-sm">
                    <FaChevronRight />
                  </span>
                  Toilet Cleaning
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to={"/"}
                  className="inline-flex  items-center gap-2 font-medium text-slate-400 transition hover:text-white"
                >
                  <span className="text-sm">
                    <FaChevronRight />
                  </span>
                  Toilet Cleaning
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to={"/"}
                  className="inline-flex  items-center gap-2 font-medium text-slate-400 transition hover:text-white"
                >
                  <span className="text-sm">
                    <FaChevronRight />
                  </span>
                  Toilet Cleaning
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to={"/"}
                  className="inline-flex  items-center gap-2 font-medium text-slate-400 transition hover:text-white"
                >
                  <span className="text-sm">
                    <FaChevronRight />
                  </span>
                  Toilet Cleaning
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:text-start text-center">
            <h2 className="text-2xl text-white font-semibold mb-5">
              Quick Links
            </h2>
            <ul>
              <li className="mb-4">
                <Link
                  to={"/"}
                  className="inline-flex  items-center gap-2 font-medium text-slate-400 transition hover:text-white"
                >
                  <span className="text-sm">
                    <FaChevronRight />
                  </span>
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to={"/services"}
                  className="inline-flex  items-center gap-2 font-medium text-slate-400 transition hover:text-white"
                >
                  <span className="text-sm">
                    <FaChevronRight />
                  </span>
                  Services
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to={"/contact-us"}
                  className="inline-flex  items-center gap-2 font-medium text-slate-400 transition hover:text-white"
                >
                  <span className="text-sm">
                    <FaChevronRight />
                  </span>
                  Contact Us
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to={"/about-us"}
                  className="inline-flex  items-center gap-2 font-medium text-slate-400 transition hover:text-white"
                >
                  <span className="text-sm">
                    <FaChevronRight />
                  </span>
                  About Us
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to={"/faq-page"}
                  className="inline-flex  items-center gap-2 font-medium text-slate-400 transition hover:text-white"
                >
                  <span className="text-sm">
                    <FaChevronRight />
                  </span>
                  Faq & Privicy
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col lg:items-start items-center">
            <h2 className="text-2xl text-white font-semibold mb-5">
              Corporate Office
            </h2>
            <h2 className="mb-4 flex items-center gap-3 text-slate-400">
              <span>
                <FaLocationArrow />
              </span>
              <address>59 Street, B4 Appartment, Australia</address>
            </h2>
            <h4 className="mb-4 flex items-center gap-3">
              <span className="text-slate-400">
                <FaPhone />
              </span>
              <a
                href="tel:+985-8844-000"
                className="text-slate-400 font-medium transition hover:text-white"
              >
                +985-8844-000
              </a>
            </h4>
            <h4 className="flex items-center gap-3 mb-8">
              <span className="text-slate-400">
                <FaEnvelope />
              </span>
              <a
                href="mailto:info@cleanix.com"
                className="text-slate-400 font-medium transition hover:text-white"
              >
                info@cleanix.com
              </a>
            </h4>
            <div className="grid grid-cols-3 ">
              <div className="col-span-2">
                <input
                  className="py-3 px-3 rounded-l-md w-full outline-none"
                  type="text"
                  placeholder="Enter Your e-mail"
                />
              </div>
              <div className="flex">
                <button className="text-lg rounded-r-md font-semibold w-full bg-yellow-400">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-0 left-0 z-[-1] opacity-40"
        src={image2}
        alt=""
      />
      <img
        className="absolute bottom-0 right-0 z-[-1] opacity-40"
        src={image3}
        alt=""
      />
    </footer>
  );
};

export default Footer;
