import React from "react";
import Logo from "../../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-300 py-8 md:py-12 px-6 md:px-12 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src={Logo}
              alt="Sebest Trading Logo"
              className="w-[150px] h-[60px] sm:w-[200px] sm:h-[80px] md:w-[279px] md:h-[117px]"
            />
          </div>

          <div className="text-sm leading-relaxed text-center md:text-right">
            <p>
              <a
                href="tel:+2348123303873"
                className="hover:text-primary transition-colors"
              >
                +234(0)8123303873
              </a>
              ,{" "}
              <a
                href="tel:+2349070117236"
                className="hover:text-primary transition-colors"
              >
                +234(0)9070117236
              </a>
            </p>
            <p className="my-2">
              <a
                href="mailto:info@sebesttrading.com"
                className="hover:text-primary transition-colors"
              >
                info@sebesttrading.com
              </a>
            </p>
            <p className="hover:text-primary transition-colors">
              No 13, Park Road Zaria, Kaduna.
            </p>
            <p className="hover:text-primary transition-colors">
              No 2, Ibrahim Shehu Street, Mararaba, Nasarawa State.
            </p>
            <p className="hover:text-primary transition-colors">
              Shop LS 106, LS 115, FCT, Kado Fish Market, Abuja.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex justify-center items-center text-sm">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="font-semibold hover:text-primary transition-colors">
                Sebest Trading
              </span>
              <span>&copy;</span>
              <span>{new Date().getFullYear()}</span>
              <span>|</span>
              <span
                className="hover:text-primary transition-colors"
                style={{ fontFamily: "Rubik, sans-serif", fontSize: "17px" }}
              >
                All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
