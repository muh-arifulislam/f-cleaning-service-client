import React from "react";
import SectionHeader from "../../components/SectionHeader";
import Accordion from "../../components/Accordian";
import SentMessageForm from "../../components/SentMessageForm";
const FaqPage = () => {
  return (
    <section className="">
      <SectionHeader title={"Faq Page"} />
      <div className="max-w-[1200px] mx-auto py-[120px]">
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-2">
            <Accordion
              title="Section 1"
              isActive={true}
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
            <Accordion
              title="Section 1"
              content="Ahen an unknown printer took a galley of type and scrambled it to make a type specimen book areIt hasear survived not only five centuries, but also the leap into electronic typesetting, remaining essentiall yellow aw unchangedh."
            />
            <Accordion
              title="Section 1"
              content="Ahen an unknown printer took a galley of type and scrambled it to make a type specimen book areIt hasear survived not only five centuries, but also the leap into electronic typesetting, remaining essentiall yellow aw unchangedh."
            />
          </div>
          <div className="">
            <SentMessageForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
