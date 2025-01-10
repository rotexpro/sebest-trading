import React from "react";
import Partner1 from "../../assets/images/Partner1.svg";
import Partner2 from "../../assets/images/Partner2.svg";
import Partner3 from "../../assets/images/Partner3.svg";

const TrustedPartners = () => {
  return (
    <section className="w-full flex flex-col items-center py-16">
      <h2 className="text-center font-bold text-sm md:text-xl lg:text-2xl mb-8">
        BRANDS WE WORK WITH
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-24">
        <div className="flex justify-center items-center">
          <img
            src={Partner1}
            alt="Ocean Spray Logo"
            className="h-12 w-auto object-contain md:h-16 lg:h-32"
          />
        </div>

        <div className="flex justify-center items-center">
          <img
            src={Partner2}
            alt="Pelagia Logo"
            className="h-12 w-auto object-contain md:h-16 lg:h-20"
          />
        </div>

        <div className="flex justify-center items-center">
          <img
            src={Partner3}
            alt="Cornelis Vrolijk Logo"
            className="h-12 w-auto object-contain md:h-16 lg:h-20"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
