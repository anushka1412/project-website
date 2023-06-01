import React from "react";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer bg-dark mt-5">
      <div className="footer-left">
        <p className=" text-white p-4 mb-0 mx-4">
          {" "}
          By{" "}
          <span className="text-warning h6">Anushka Srivastava</span>
        </p>
      </div>

      <div className="footer-right">
        <p className="px-5">
          <a
            href="https://www.linkedin.com/in/anushka1412"
            target="_blank"
            rel="noreferrer"
          >
            <span className="pp">
              <BsLinkedin />
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
