import React from "react";
import DeliveryImage from "../../assets/images/DeliveryImage.png";
import TruckIcon from "../../assets/TruckIcon.svg";

const DeliverySection = () => {
  return (
    <div className="container mx-auto p-12 mb-52">
      <section
        className="relative py-20 px-6 md:px-12 lg:px-16 bg-cover bg-center"
        style={{ backgroundImage: `url(${DeliveryImage})` }}
      >
        <div className="absolute inset-0 bg-[#6E1EEF4D]"></div>

        <div className="relative z-10 flex flex-col items-center text-center md:text-left md:items-start">
          <div className="mb-6">
            <h2 className="text-base md:text-xl lg:text-[32px] font-bold text-[#F3F3F3] leading-tight md:leading-6 lg:leading-[38.73px] flex items-center">
              Delivery
              <img
                src={TruckIcon}
                alt="Truck Icon"
                className="ml-3 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
            </h2>
            <p className="text-sm md:text-base lg:text-lg mt-4 text-[#F3F3F3]">
              We offer on-site delivery to clients where we operate in.
            </p>
          </div>

          <div className="w-full flex justify-center md:justify-start">
            <a
              href="/contact"
              className="bg-primary hover:bg-primary-hover text-[#F3F3F3] px-6 py-3 text-sm md:text-base lg:text-lg rounded
               font-bold transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeliverySection;
