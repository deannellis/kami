import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        © Dean Nellis {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
