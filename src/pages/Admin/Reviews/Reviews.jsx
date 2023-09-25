import React, { useState } from "react";
import CardTableReviews from "../../../components/Admin/Cards/CardTableReviews";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      _id: "01",
      name: "John Doe",
      phone: "123-456-7890",
      email: "john@example.com",
      ratings: 4.5,
      testimoni: "Great service! lreoms sdfsdj idoller whatis your problem",
      status: false,
    },
    {
      _id: "02",
      name: "Jane Smith",
      phone: "987-654-3210",
      email: "jane@example.com",
      ratings: 5.0,
      testimoni: "Excellent experience!",
      status: true,
    },
    {
      _id: "03",
      name: "Alice Johnson",
      phone: "555-123-4567",
      email: "alice@example.com",
      ratings: 3.8,
      testimoni: "Good job!",
      status: false,
    },
    {
      _id: "04",
      name: "Bob Brown",
      phone: "333-999-8888",
      email: "bob@example.com",
      ratings: 4.2,
      testimoni: "Very satisfied!",
      status: true,
    },
    {
      _id: "05",
      name: "Eva Davis",
      phone: "777-111-2222",
      email: "eva@example.com",
      ratings: 4.7,
      testimoni: "Impressed with the service.",
      status: false,
    },
  ]);

  const removeReview = (id) => {
    setReviews(reviews.filter((item) => item._id !== id));
  };
  const modifyReview = (id) => {
    const modifiedReviews = reviews.map((item) => {
      if (item._id === id) {
        return item;
      } else {
        return item;
      }
    });
    setReviews(modifiedReviews);
  };
  return (
    <>
      <CardTableReviews
        reviews={reviews}
        setReviews={setReviews}
        removeReview={removeReview}
        modifyReview={modifyReview}
      />
    </>
  );
};

export default Reviews;
