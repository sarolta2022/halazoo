import React, { useState } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

import Logo from "../images/halazoofejlec.png";

/* const setOpen = () => {
  console.log("setOpen");
}; */

const links = [
  { path: "home", name: "Home", key: 0 },
  { path: "about", name: "About", key: 1 },
  { path: "products", name: "Products", key: 2 },
  { path: "services", name: "Services", key: 3 },
];
const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="halazoo logo" />
      </div>
      <div className={!active ? "nav-items" : "nav-items-active"}>
        <ul>
          {links.map((link, i) => (
            <li key={link.key}>
              <Link to={link.path}>
                <p>{link.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={!active ? "hamburger" : "hamburger-active"}
        onClick={handleClick}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;

/* <header>
      <p>why</p>
      <nav>
        <div className=""></div>
        <div className="">
          <a href="/">the logo</a>
        </div>
        <div className="">
          <ul>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Users</a>
            </li>
          </ul>
        </div>
      </nav>
    </header> */
