import React from "react";
import AboutUsImage from "../../assets/images/AboutUsImage.svg";

const AboutSection = () => {
  return (
    <section
      className="relative py-12 md:py-20 lg:py-28 px-6 md:px-12 lg:px-16 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${AboutUsImage})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#6883BAB8] opacity-72"></div>

      {/* Content */}
      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left">
        {/* Heading */}
        <h2 className="text-xs md:text-xl lg:text-[32px] font-bold text-[#131313] md:leading-6 lg:leading-[38.73px] leading-tight mb-8 md:mb-0 md:mr-8">
          Providing high-quality frozen foods with convenience,
          sustainability, and peak freshness preserved.
        </h2>

        {/* Button */}
        <a
          href="/services"
          className="bg-primary hover:bg-primary-hover px-5 py-2 md:px-6 md:py-3 rounded text-[#F3F3F3] font-medium text-xs md:text-base lg:text-xl transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          SERVICES
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
