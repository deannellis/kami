import React from "react";
import { Link } from "react-router-dom";

import Icon from "../Icon";
import kamiMark from "../../images/kami_mark.png";

const Footer = () => (
  <footer className="footer">
    <div className="footer__left">
      <Link to="/">
        <img src={kamiMark} alt="kami brand mark" height="40px" />
      </Link>
    </div>
    <div className="footer__copyright">
      <a href="https://deannellis.me/">
        © Dean Nellis {new Date().getFullYear()}
      </a>
    </div>
    <div className="footer__right">
      <a href="https://github.com/deannellis/kami">
        <Icon title="GitHub Logo" />
      </a>
    </div>
  </footer>
);

export default Footer;
