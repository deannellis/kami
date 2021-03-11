import React from "react";

import Icon from "../Icon";

const Header = () => {
  return (
    <header className="header">
      <Icon size={32} title="Kami Logo" />
      <nav>
        <ul>
          <li>Home</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
