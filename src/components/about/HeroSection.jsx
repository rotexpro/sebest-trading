import React from "react";
import HeroSectionImage from "../../assets/images/HeroSectionImage.png";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center mt-[10vh] h-[200px] flex justify-center items-center"
      style={{
        backgroundImage: `url(${HeroSectionImage})`,
      }}
    >
      <div className="absolute inset-0  bg-[#1E3F62] opacity-60"></div>
      <h1 className=" relative container mx-auto relative p-4 text-[#F3F3F3] text-3xl lg:text-5xl font-bold">
        ABOUT US
      </h1>
    </div>
  );
};

export default HeroSection;
