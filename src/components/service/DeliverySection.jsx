import DeliveryImage from "../../assets/images/DeliveryImage.png";
import TruckIcon from "../../assets/TruckIcon.svg";

const DeliverySection = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12 mb-52">
      <p className="mb-6 text-sm md:text-base lg:text-lg font-semibold text-gray-900">
        Start ordering with confidence — Sebest delivers freshness that lasts.
      </p>

      <section
        className="relative bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: `url(${DeliveryImage})` }}
      >
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>

        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left py-20 px-6">
          <h2 className="flex items-center text-lg md:text-2xl lg:text-[32px] font-bold text-white">
            Delivery
            <img
              src={TruckIcon}
              alt=""
              className="ml-3 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
            />
          </h2>

          <p className="mt-4 max-w-xl text-xs md:text-sm lg:text-base text-white">
            We offer on-site delivery to clients where we operate.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded bg-primary px-6 py-3 text-xs md:text-sm lg:text-base font-bold
                       text-white shadow-lg transition hover:scale-105 hover:bg-primary-hover"
          >
            CONTACT&nbsp;US
          </a>
        </div>
      </section>
    </div>
  );
};

export default DeliverySection;
