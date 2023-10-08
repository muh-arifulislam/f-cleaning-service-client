import React from "react";

const ModalShowShowcase = ({ isOpen, closeModal, img }) => {
  const modalClasses = isOpen
    ? "fixed inset-0 flex items-center justify-center z-50"
    : "hidden";
  return (
    <div className={modalClasses}>
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal-container  lg:md:w-3/4 w-full lg:md:max-w-[60vw] max-w-[100vw] mx-auto rounded z-50 ">
        {/* Modal content goes here */}
        <div className="relative  rounded-lg dark:bg-gray-700">
          <button
            onClick={() => closeModal()}
            type="button"
            className="absolute lg:md:top-[10px] lg:md:right-[10px] top-0 right-0 translate-x-[-50%] translate-y-[50%] text-white  rounded-full text-sm w-12 h-12 ml-auto inline-flex justify-center items-center transition ease-linear duration-200 hover:text-primary backdrop-blur-lg"
            style={{ backgroundColor: "rgba(40, 127, 249, 0.3)" }}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalShowShowcase;
