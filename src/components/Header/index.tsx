import React from "react";
import { Link } from "react-router-dom";

import Icon from "../Icon";

const Header = () => (
  <header className="header">
    <Icon size={32} title="Kami Logo" />
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/theme">Theme</Link>
        </li>
        <li>
          <Link to="/utilities">Utils</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
