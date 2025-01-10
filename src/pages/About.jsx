import React from "react";
import HeroSection from "../components/about/HeroSection";
import AboutContent from "../components/about/AboutContent";
import AboutImageSection from "../components/about/AboutImageSection";
import WhyChooseUs from "../components/about/WhyChooseUs";
import OurStory from "../components/about/OurStory";
import JoinUsSection from "../components/about/JoinUsSection";

const About = () => {
  return (
    <div>
      <HeroSection />
      <AboutContent />
      <AboutImageSection />
      <WhyChooseUs />
      <OurStory />
      <JoinUsSection />
    </div>
  );
};

export default About;
