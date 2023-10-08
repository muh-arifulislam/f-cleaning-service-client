import React from "react";
import HeroFeatureSection from "./HeroFeatureSection";
import ServicesSection from "./ServicesSection";
import ExpertsSection from "./ExpertsSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import WorkingProcessSection from "./WorkingProcessSection";
import TestimonialSection from "./TestimonialSection";
import SponsorSection from "./SponsorSection";
import BannerSection from "./BannerSection";
import TopBannerSection from "./TopBannerSection";
import ShowcaseSection from "./ShowcaseSection";
import AddReviewSection from "./AddReviewSection";
const Home = () => {
  return (
    <div>
      <TopBannerSection />
      <HeroFeatureSection />
      <ServicesSection />
      <BannerSection />
      <WhyChooseUsSection />
      <WorkingProcessSection />
      <ShowcaseSection />
      <ExpertsSection />
      <TestimonialSection />
      <SponsorSection />
      <AddReviewSection />
    </div>
  );
};

export default Home;
