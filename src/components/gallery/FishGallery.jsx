import React from "react";
import Herring from "../../assets/images/Herring.svg";
import Mackerel from "../../assets/images/Mackerel.svg";
import StockFish from "../../assets/images/StockFish.svg";
import Croaker from "../../assets/images/Croacker.svg";

const FishGallery = () => {
  const fishData = [
    {
      name: "Herring Fish",
      image: Herring,
    },
    {
      name: "Mackerel Fish",
      image: Mackerel,
    },
    {
      name: "StockFish",
      image: StockFish,
    },
    {
      name: "Croaker Fish",
      image: Croaker,
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex justify-center items-center container mx-auto px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {fishData.map((fish, index) => (
            <div
              key={index}
              className="group relative bg-secondary text-[#F3F3F3] rounded-lg overflow-hidden transition-transform transform hover:scale-105 shadow-md max-h-[500px] max-w-[500px]"
            >
              <img
                src={fish.image}
                alt={fish.name}
                className="w-full h-64 object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
              <div className="absolute bottom-0 w-full bg-secondary px-4 py-2 group-hover:bg-[#201F3C] transition-colors duration-300">
                <p className=" font-medium text-lg md:text-[21.53px] lg:text-4xl">
                  {fish.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FishGallery;
