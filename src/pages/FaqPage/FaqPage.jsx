import React, { useEffect } from "react";
import { useGlobalState } from "../../state/GlobalStateProvider";

// components
import SectionHeader from "../../components/SectionHeader";
import Accordion from "../../components/Accordions/Accordion";
import FormSentMessage from "../../components/Forms/FormSentMessage";
import { useState } from "react";

const FaqPage = () => {
  const { services } = useGlobalState();
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    if (!services.loading || !services.error) {
      const combinedFaqs = services.data.map((service) => service.faq[0]);
      setFaqs(combinedFaqs);
    }
  }, [services]);
  return (
    <section className="">
      <SectionHeader title={"Faq Page"} />
      <div className="max-w-[1200px] mx-auto py-[120px]">
        <div className="grid lg:md:grid-cols-3 grid-cols-1 lg:md:gap-x-5 gap-0 gap-y-5 mx-4">
          <div className="col-span-2">
            {faqs.map((item, idx) => (
              <Accordion
                isActive={idx === 0 && true}
                key={item._id}
                title={item?.qns}
                content={item?.ans}
              />
            ))}
          </div>
          <div className="">
            <FormSentMessage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
