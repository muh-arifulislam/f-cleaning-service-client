import React, { useEffect, useState } from "react";

// componnents
import SectionHeader from "../../components/SectionHeader";
import SliderServices from "../../components/Sliders/SliderServices";

// images
import bgImage from "../../assets/images/section-bg14.jpg";
import { useGlobalState } from "../../state/GlobalStateProvider";
import CardService from "../../components/Cards/CardService";
import SliderServiceCategory from "../../components/Sliders/SliderServiceCategory";
import SliderLoader from "../../components/Loader/SliderLoader";
import CardSliderError from "../../components/Cards/CardSliderError";

const Services = () => {
  const { services } = useGlobalState();
  const [tag, setTag] = useState("all");
  const [content, setContent] = useState([]);
  useEffect(() => {
    if (!services.loading || !services.error) {
      if (tag === "all") {
        setContent(services.data);
      } else {
        const filteredService = services.data.filter(
          (item) => item.category === tag
        );
        setContent(filteredService);
      }
    }
  }, [tag, services.data]);
  if (services.loading) {
    return (
      <div className="max-w-[1200px] mx-auto py-[100px]">
        <SliderLoader />
      </div>
    );
  }
  if (services.error) {
    return (
      <div className="max-w-[1200px] mx-auto p-4">
        <CardSliderError />
      </div>
    );
  }
  return (
    <section>
      <SectionHeader title="Services Tab" />
      <div
        className="lg:md:py-[120px] py-[60px] lg:md:px-0 px-4"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-[50px] flex justify-center">
            <button
              onClick={() => setTag("all")}
              className={` px-6 py-4 font-medium  rounded-l-full shadow-xl transition-all ease-in-out duration-300 hover:bg-secondary hover:text-white ${
                tag === "all"
                  ? "bg-secondary text-white"
                  : "bg-white text-slate-600"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setTag("residential")}
              className={` px-6 py-4 font-medium  border-x-[1px] shadow-xl transition-all ease-in-out duration-300 hover:bg-secondary hover:text-white ${
                tag === "residential"
                  ? "bg-secondary text-white"
                  : "bg-white text-slate-600"
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setTag("commercial")}
              className={` px-6 py-4 font-medium  rounded-r-full shadow-xl transition-all ease-in-out duration-300 hover:bg-secondary hover:text-white ${
                tag === "commercial"
                  ? "bg-secondary text-white"
                  : "bg-white text-slate-600"
              }`}
            >
              Commercial
            </button>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {content?.map((service) => (
              <CardService key={service._id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
