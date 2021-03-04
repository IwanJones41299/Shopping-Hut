import React from "react";
import "./Browser.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright :
          <a
            href="https://github.com/IwanJones41299"
            className="copyright-text"
          >
            Iwan Jones
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;