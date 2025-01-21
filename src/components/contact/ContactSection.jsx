import React from "react";

const ContactSection = () => {
  return (
    <div className="flex flex-col justify-center p-8 container mx-auto my-8 md:h-[50vh] ">
      <h2 className="text-lg md:text-2xl lg:text-[32px] font-medium mb-12">
        We’d Love to Hear From You!
      </h2>
      <p className="text-xs md:text-base lg:text-xl leading-[19.36px] lg:leading-[24.2px] mb-10">
        Whether you're curious about our selection of frozen fish, need help
        choosing the perfect fish, or just have a question, we’re here to help!
        Drop us a message, and our friendly team will get back to you as soon as
        possible. Your satisfaction is our top priority—we’re always happy to
        make your experience smooth and delightful.
      </p>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <h3 className="text-lg md:text-xl lg:text-2xl font-medium flex-shrink-0 w-1/4">
            PHONE
          </h3>
          <p className="text-sm md:text-base lg:text-xl text-[#131313] flex-grow">
            <a href="tel:+2348123303873" className="hover:text-primary-hover">
              +234(0)8123303873
            </a>
            ,{" "}
            <a href="tel:+2349070117236" className="hover:text-primary-hover">
              +234(0)9070117236
            </a>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <h3 className="text-lg md:text-xl lg:text-2xl font-medium flex-shrink-0 w-1/4">
            EMAIL
          </h3>
          <p className="text-sm md:text-base lg:text-xl flex-grow">
            <a
              href="mailto:info@sebestrading.com"
              className="hover:text-primary-hover"
            >
              info@sebestrading.com
            </a>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <h3 className="text-lg md:text-xl lg:text-2xl font-medium flex-shrink-0 w-1/4">
            ADDRESS
          </h3>
          <p className="text-sm md:text-base lg:text-xl flex-grow">
            No 13, Park Road Zaria, Kaduna.
            <br />
            No 2, Ibrahim Shehu Street, Mararaba, Nasarawa State.
            <br />
            Shop LS 106, LS 115, FCT, Kado Fish Market, Abuja.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
