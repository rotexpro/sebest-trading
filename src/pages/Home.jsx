import HeroSection from "../components/home/HeroSection";
// import FreshnessSection from "../components/home/FreshnessSection";
import TrustedPartners from "../components/home/TrustedPartners";
import Collection from "../components/home/Collection";
import Features from "../components/home/Features";
import AboutSection from "../components/home/AboutSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* <FreshnessSection /> */}
      <TrustedPartners />
      <Collection />
      <AboutSection />
      <Features />
    </div>
  );
};

export default Home;
