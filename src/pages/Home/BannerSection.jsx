import React from "react";
import Button from "../../components/Button";
import image2 from "../../assets/images/section-bg15.jpg";
const BannerSection = () => {
  return (
    <section
      className="py-[120px] relative z-0 overlay-secondary"
      style={{ backgroundImage: `url(${image2})` }}
    >
      <div className="flex justify-center">
        <div className="p-[10px] z-[2] text-center">
          <h2 className="text-4xl text-white font-semibold mb-8">
            Feel free to communicate with us
          </h2>
          <Button>Book Service</Button>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
