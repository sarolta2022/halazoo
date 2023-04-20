import React from "react";
import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import "./Footer.css";

const Footer = () => {
  const date = new Date();
  return (
    <div>
      <footer>
        <div classname="icons">
          <Link to={{ pathname: "www.index.hu" }} target="_blank">
            <CallIcon />{" "}
          </Link>

          <FacebookIcon className="icon" />
          <LocationOnIcon className="icon" />
          <CallIcon className="icon" />
          <MailOutlineIcon className="icon" />
        </div>
        <div className="copyright">
          <p>Halazoo Copyright {date.getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
