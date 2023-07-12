import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>ff245185@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/musicfunetc626/"><Insta color="white" size={"3rem"} /></a>
          <a href="https://www.facebook.com/profile.php?id=100088709946078"><Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/ff245185"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
