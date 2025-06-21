import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="w-full border-t flex items-center justify-between">
        <div className="left">
          <h1 className="text-xl md:text-3xl font-black">Fyndora</h1>
        </div>
        <div className="right text-sm md:text-lg pt-3 text-right">
          <p>© 2025 Fyndora. All rights reserved.</p>
          <p className="italic py-2">
            Fashion for everyone — quality you can trust.
          </p>
          <p>
            <span className="hover:border-b transition-all duration-100 cursor-pointer">
              Privacy Policy
            </span>{" "}
            |{" "}
            <span className="hover:border-b transition-all duration-100 cursor-pointer">
              Terms of Service
            </span>{" "}
            |{" "}
            <span className="hover:border-b transition-all duration-100 cursor-pointer">
              Contact Us
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
