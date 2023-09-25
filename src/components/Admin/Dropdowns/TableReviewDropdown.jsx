import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import RemoveCustomerModal from "../Modals/RemoveCustomerModal";
const NotificationDropdown = ({ id, reviews, setReviews }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const removeReview = () => {
    const filteredReviews = reviews.filter((review) => review._id !== id);
    setReviews(filteredReviews);
  };
  const modifyReview = (id) => {
    const modifiedReviews = reviews.map((item) => {
      if (item._id === id) {
        item.status = !item.status;
        return item;
      } else {
        return item;
      }
    });
    setReviews(modifiedReviews);
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          setDropdownPopoverShow(!dropdownPopoverShow);
        }}
      >
        <FaEllipsisV />
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 absolute top-0 left-3 translate-x-[-100%] translate-y-[20%]  py-2 list-none text-start rounded shadow-lg min-w-48 max-h-48 overflow-y-auto mb-2"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => {
            e.preventDefault();
            modifyReview(id);
          }}
        >
          Modify Status
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => {
            e.preventDefault();
            setModalIsOpen(true);
            setDropdownPopoverShow(false);
          }}
        >
          Remove Review
        </a>
      </div>
      <RemoveCustomerModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        action={removeReview}
        setDropdownPopoverShow={setDropdownPopoverShow}
      />
    </>
  );
};

export default NotificationDropdown;
