import React from "react";
import logo from "../../assets/images/logo2.png";
import SocialLinksButton from "../../components/SocialLinksButton";
import { Link } from "react-router-dom";
import { FaChevronRight, FaLocationArrow, FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="pt-[100px] pb-[60px] bg-blue-950">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 lg:px-0 px-3">
          <div>
            <div className="mb-5">
              <img
                className="lg:max-w-[190px] max-w-[120px] py-2"
                src={logo}
                alt=""
              />
            </div>
            <p className="mb-5">
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
          <div>
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
          <div>
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
                  to={"/"}
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
                  to={"/"}
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
                  to={"/"}
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
                  to={"/"}
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
          <div>
            <h2 className="text-2xl text-white font-semibold mb-5">
              Corporate Office
            </h2>
            <h2 className="mb-4">
              <address>
                <span>
                  <FaLocationArrow />
                </span>
                59 Street, B4 Appartment, Australia
              </address>
            </h2>
            <h4 className="mb-4">
              <a href="tel:+985-8844-000" className="inline-flex items-center gap-2">
                <span>
                  <FaPhone />
                </span>
                +985-8844-000
              </a>
            </h4>
            <h4>
              <a href="mailto:info@cleanix.com">info@cleanix.com</a>
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
