import React, { useState } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

import Logo from "../images/halazoofejlec.png";

const links = [
  { path: "home", name: "Home", key: 0 },
  { path: "about", name: "About", key: 1 },
  { path: "products", name: "Products", key: 2 },
  { path: "services", name: "Services", key: 3 },
];

const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const handleClick = () => {
    if (isMenuClicked) {
      console.log("yeah");
      updateMenu();
    }
  };
  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="halazoo logo" />
      </div>
      <div className={!isMenuClicked ? "nav-items" : "nav-items-active"}>
        <ul>
          {links.map((link, i) => (
            <li onClick={handleClick} key={link.key}>
              <Link to={link.path}>
                <p>{link.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="hamburger">
        <nav>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </nav>
        {/* <div className={menu_class}>lila</div> */}
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
