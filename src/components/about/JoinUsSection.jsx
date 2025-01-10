import React from "react";

const JoinUsSection = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
        JOIN US IN DELIVERING EXCELLENCE
      </h2>
      <p className="text-gray-700 text-xs md:text-sm lg:text-lg leading-[16.94px] md:leading-[19.36px] max-w-3xl mx-auto mb-6">
        Partner with Sebest to experience a seamless supply chain, unbeatable
        product quality, and a commitment to your success. Together, let's bring
        the ocean's bounty to your customers.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <a
          href="/contact"
          className="bg-primary text-[#F3F3F3] px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition"
        >
          CONTACT US
        </a>
      </div>
    </div>
  );
};

export default JoinUsSection;
