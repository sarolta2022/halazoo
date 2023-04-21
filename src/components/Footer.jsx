import React from "react";
import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import "./Footer.css";

const icons = [
  {
    id: 0,
    name: "facebook",
    link: "https://www.facebook.com/halazooakvarisztika.hu/",
    icon: FacebookIcon,
  },
  {
    id: 1,
    name: "location",
    link: "https://www.google.com/maps/place/Gy%C5%91r,+N%C3%A1dor+u.+9,+9024+Hungary/@47.6729232,17.6344598,18.75z/data=!4m6!3m5!1s0x476bbff58d135709:0x862e5a141cb30a96!8m2!3d47.6728807!4d17.6349045!16s%2Fg%2F11c1_7xtwk",
    icon: LocationOnIcon,
  },
  {
    id: 2,
    name: "telephone",
    link: "https://www.facebook.com/halazooakvarisztika.hu/",
    icon: CallIcon,
  },
  {
    id: 3,
    name: "email",
    link: "https://www.facebook.com/halazooakvarisztika.hu/",
    icon: MailOutlineIcon,
  },
];
const Footer = () => {
  const date = new Date();
  return (
    <div>
      <footer>
        <div className="icons">
          {icons.map((icon) => (
            <a
              className="icon"
              key={icon.id}
              href={icon.link}
              rel="noreferrer"
              target="_blank"
            >
              <icon.icon />
            </a>
          ))}
        </div>

        <div className="copyright">
          <p>Halazoo Copyright {date.getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
