import React from "react";
import { Link } from "react-router-dom";

import kamiMark from "../../images/kami_mark.png";
import navItems from "./navItems";

type HeaderProps = {
  currentPath: string;
};

const Header = ({ currentPath }: HeaderProps) => (
  <header className="header">
    <div className="header__logo">
      <img src={kamiMark} alt="kami brand mark" height="40px" />
      <h1>kami</h1>
    </div>
    <nav>
      <ul>
        {navItems.map(({ title, path }) => (
          <li
            className={
              currentPath === path
                ? "header__nav-item--active"
                : "header__nav-item"
            }
            key={title}
          >
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
