import React from "react";
import AboutImage1 from "../../assets/images/AboutImage1.svg";
import AboutImage2 from "../../assets/images/AboutImage2.svg";

const AboutImageSection = () => {
  return (
    <div className="container mx-auto px-6 md:flex md:gap-20 items-center py-8 justify-between">
      <div className="mb-6 md:mb-0 md:w-1/2 ">
        <h2 className="text-2xl md:text-3xl lg:text-[32px] leading-[38.78px] font-bold mb-4">
          <span className="block">Freshness,</span>
          <span className="block">Quality, and Trust</span>
        </h2>

        <p className="text-gray-700 text-xs md:text-sm lg:text-lg leading-[16.94px] md:leading-[19.36px]">
          We are a leading wholesale distributor of frozen fish, proudly serving
          retail companies with a passion for delivering the best of the ocean.
          Our fleet of state-of-the-art trucks and advanced storage facilities
          ensures that every product reaches you in its freshest form. Our
          operations are backed by significant investments in logistics,
          sustainability, and customer service, allowing us to set industry
          standards and exceed client expectations.
        </p>
      </div>
      <div className="md:w-1/2">
        <div className="relative">
          <img
            src={AboutImage1}
            alt="Fresh Fish"
            className="rounded-lg shadow-md w-full md:w-[562px]
          transform scale-100 transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <img
            src={AboutImage2}
            alt="Truck"
            className="absolute -bottom-2 -left-5 rounded-lg h-[30%] md:h-[114px] lg:h-[196px] transform translate-y-8 transition-transform duration-500 ease-in-out hover:translate-y-0"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutImageSection;
