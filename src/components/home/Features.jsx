import React from "react";
import FeaturesImage from "../../assets/images/FeaturesImage.svg";

const features = [
  {
    title: "Croaker",
    description:
      "A species of fish known for its scales, typically medium to large in size, is often in high demand for occasions and events such as weddings, parties, and even casual evening gatherings at gardens and restaurants during weekends.",
  },
  {
    title: "Herring",
    description:
      "Commonly called “Shawa” in the northern region and known to be scaly and quite tender. Its weight ranges from 100g - 300g.",
  },
  {
    title: "StockFish",
    description:
      "Commonly called “Panla” in the western region. It’s known to have relatively big eyes compared to other fishes. It is also very nutritious.",
  },
  {
    title: "Mackerel",
    description:
      "Commonly called “Titus” as it is popular and highly in-demand. It’s known to contain high amounts of omega-3 fatty acids.",
  },
];

const Features = () => {
  return (
    <section className="py-12 md:py-20 lg:py-28 px-6 md:px-12 lg:px-16 xl:px-32">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-6 text-center flex flex-col items-center transition-shadow duration-300"
          >
            <div className="w-[40px] h-[40px] bg-primary rounded-full flex items-center justify-center mb-4 transform transition-transform hover:scale-110">
              <img
                src={FeaturesImage}
                alt="Feature Icon"
                className="w-8 h-6 object-contain"
              />
            </div>

            <h4 className="lg:text-xl text-base font-bold mb-2 ">
              {item.title}
            </h4>

            <p className="text-gray-600 text-sm lg:text-xl sm:text-center leading-[16.94px] md:leading-6 ">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
