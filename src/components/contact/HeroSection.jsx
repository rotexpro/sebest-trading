import HeroSectionImage from "../../assets/images/HeroSectionImage.jpeg";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[30vh] flex items-center"
      style={{
        backgroundImage: `url(${HeroSectionImage})`,
      }}
    >
      <div className="absolute inset-0  bg-[#1E3F62] opacity-60"></div>
      <h1 className="  container mx-auto relative px-4 text-[#F3F3F3] text-3xl lg:text-5xl font-bold ">
        CONTACT US
      </h1>
    </div>
  );
};

export default HeroSection;
