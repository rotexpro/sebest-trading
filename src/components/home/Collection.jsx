import React from "react";
import Rectangle6 from "../../assets/images/Rectangle6.svg";
import Rectangle5 from "../../assets/images/Rectangle5.svg";

const Collection = () => {
  return (
    <section className="px-6 mb-16">
      <div className="text-center mb-12">
        <h3 className="text-sm md:text-xl lg:text-2xl font-bold uppercase tracking-wide text-bold">
          Our Collection
        </h3>
      </div>

      <div className="flex items-center justify-center gap-8">
        <div
          className="w-40 md:w-56 lg:w-64 h-32 md:h-40 lg:h-48 rounded-lg flex items-center justify-center transition-transform transform hover:scale-105"
          style={{ backgroundColor: "rgba(32, 117, 245, 0.15)" }}
        >
          <img
            src={Rectangle6}
            alt="Fish 1"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="w-40 md:w-56 lg:w-64 h-32 md:h-40 lg:h-48 rounded-lg flex items-center justify-center transition-transform transform hover:scale-105"
          style={{ backgroundColor: "rgba(217, 217, 217, 0.3)" }}
        >
          <img
            src={Rectangle5}
            alt="Fish 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="text-center mt-12">
      <a
          href="/gallery"
          className="bg-primary hover:bg-primary-hover px-5 py-2 text-center md:px-6 md:py-3 rounded text-[#F3F3F3] font-medium text-xs md:text-base lg:text-xl transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          GALLERY
        </a>
      </div>
    </section>
  );
};

export default Collection;
