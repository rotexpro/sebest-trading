import React from "react";
import HeroSectionImage from "../../assets/images/HeroSectionImage.png";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[50vh] lg:h-[70vh] pt-16"
      style={{
        backgroundImage: `url(${HeroSectionImage})`,
      }}
    >
      <div className="absolute inset-0 bg-[#1E3F62] opacity-60"></div>

      <div className="relative container mx-auto flex flex-col gap-6 items-start justify-center h-full py-4 px-4 text-[#F3F3F3]">
        <h1 className="text-lg sm:text-xl md:text-[32px] lg:text-[48px] font-bold lg:text-left leading-tight md:leading-[43.57px] sm:leading-[19.36px] mb-6">
          Your Trusted Partner for <br /> Frozen Quality.
        </h1>

        <a
          href="/services"
          className="bg-primary hover:bg-primary-hover px-5 py-2 text-center md:px-6 md:py-3 rounded text-[#F3F3F3] font-medium text-xs md:text-base lg:text-xl transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          SERVICES
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
