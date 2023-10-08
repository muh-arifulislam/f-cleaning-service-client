import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 150) {
        setShowNavbar(true);
      } else if (currentScrollY < prevScrollY && currentScrollY > 150) {
        // Scrolling up
        setShowNavbar(true);
      } else {
        // Scrolling down
        setShowNavbar(false);
      }

      // Update the previous scroll position
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);
  return (
    <div
      className={`sticky z-[9999] transition-all ease-in-out duration-500  ${
        showNavbar ? "top-0" : "top-[-100%]"
      }`}
    >
      <nav className="bg-white dark:bg-gray-900 z-20 border-b border-gray-200 dark:border-gray-600 ">
        <div className="max-w-[1200px] flex flex-wrap items-center justify-between mx-auto py-4 lg:md:px-0 px-4">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              className="lg:md:max-w-[190px] max-w-[120px]"
              alt="Flowbite Logo"
            />
          </a>
          <div className="lg:md:hidden block">
            <button
              onClick={() => navigate("/book-service")}
              className="text-slate-600 bg-tertiary focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
            >
              Get a Quote
            </button>
          </div>
          <div className="flex md:order-2">
            <div className="lg:md:flex hidden gap-4 items-center justify-center">
              <span className="text-3xl">
                <FiPhoneCall />
              </span>
              <div>
                <h4>Quick Contact</h4>
                <a className="font-bold text-[20px]" href="tel:+8801306560747">
                  +968 95527 539
                </a>
              </div>
            </div>
            <button
              onClick={() => setToggleMenu(!toggleMenu)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              toggleMenu ? "" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  onClick={() => setToggleMenu(false)}
                  to={"/"}
                  className="block text-lg py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 transition hover:text-secondary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setToggleMenu(false)}
                  to={"/services"}
                  className="block text-lg py-2 pl-3 pr-4 text-gray-900 rounded transition hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setToggleMenu(false)}
                  to={"/showcase"}
                  className="block text-lg py-2 pl-3 pr-4 text-gray-900 rounded transition hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Showcase
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setToggleMenu(false)}
                  to={"/about-us"}
                  className="block text-lg py-2 pl-3 pr-4 text-gray-900 rounded transition hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setToggleMenu(false)}
                  to={"/contact-us"}
                  className="block text-lg py-2 pl-3 pr-4 text-gray-900 rounded transition hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
              <li className="mt-1">
                <div className="lg:md:hidden flex gap-4 items-center justify-center text-center">
                  <div>
                    <h4>Quick Contact</h4>
                    <a
                      className="font-bold text-[20px]"
                      href="tel:+8801306560747"
                    >
                      +968 95527 539
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
