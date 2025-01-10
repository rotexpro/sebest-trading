import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-8">
        WHY CHOOSE US?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xs md:text-sm lg:text-lg leading-[16.94px] md:leading-[19.36px] font-semibold mb-4">
            Quality You Can Trust
          </h3>
          <p className="text-gray-700 text-xs md:text-sm lg:text-lg leading-[16.94px] md:leading-[19.36px]">
            Every product is sourced from trusted suppliers with strong
            adherence to strict industry standards.
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-xs md:text-sm lg:text-lg leading-[16.94px] md:leading-[19.36px] font-semibold mb-4">
            Sustainability Focus
          </h3>
          <p className="text-gray-700 text-xs md:text-sm lg:text-lg leading-[16.94px] md:leading-[19.36px]">
            With a commitment to sustainability, we prioritize purchasing
            products from suppliers committed to environmentally friendly
            practices dedicated to marine conservation.
          </p>
        </div>

        <div className="text-center md:text-right">
          <h3 className="text-xs md:text-sm lg:text-lg leading-[16.94px] md:leading-[19.36px] font-semibold mb-4">
            Customer-Centric Approach
          </h3>
          <p className="text-gray-700 text-xs md:text-sm lg:text-lg leading-[16.94px] md:leading-[19.36px]">
            Your success is our priority. We tailor our services to meet your
            unique needs, whether you’re a single-store retailer or a large
            chain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
