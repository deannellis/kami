import React from "react";
import Icon from "../Icon";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        © Dean Nellis {new Date().getFullYear()}
      </div>
      <div className="footer__right">
        <Icon title="Facebook Logo" />
      </div>
    </footer>
  );
};

export default Footer;
