import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-3 position-relative">
      <div className="container ">
        <div className="row justify-content-center align-items-center">
          <p className="text-center">
            © 2022 User Library. All rights reserved.
          </p>
        </div>
        <div>
          <Link
            to="/"
            className="p-3 position-absolute end-0 bottom-0 text-info"
          >
            <i className="bi bi-arrow-right-circle h1"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
