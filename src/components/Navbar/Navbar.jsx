import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Tecno Grapy</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
             <a target="_blank" href="https://64b68182bbabb413876a6408--benevolent-dolphin-6d3f7a.netlify.app/demop">Project</a>
            </li>
            <li>
             <a  target="_blank" href="https://64b68182bbabb413876a6408--benevolent-dolphin-6d3f7a.netlify.app/demoss">SS</a>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
             
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        
        {/* <button className="button n-button">Contact</button> */}
        <a  target="_blank" className="button" href="https://64b68182bbabb413876a6408--benevolent-dolphin-6d3f7a.netlify.app/contact">Contact</a>
        
      </div>
    </div>
  );
};

export default navbar;
