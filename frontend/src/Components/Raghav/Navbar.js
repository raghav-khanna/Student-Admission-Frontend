import React, { useState } from "react";
import "./Navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import LogoImage from "../../Assets/Logo.png";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <figure>
            <img className="logo-image" src={LogoImage} alt="LNMIIT Logo" />
          </figure>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <a href="https://admissions.lnmiit.ac.in/ug/FAQs.html">FAQ</a>
            </li>
            <li>
              <a href="https://admissions.lnmiit.ac.in/ug/Placement_Interships.html">
                Placements
              </a>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://www.facebook.com/lnmiit.ac.in" target="_lnmiit">
                <FaFacebookSquare className="social-media-icons" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/lnmiit/" target="_lnmiit">
                <FaInstagramSquare className="social-media-icons" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCBndW-qun8prPOmq5kRFbjw?view_as=subscriber"
                target="_lnmiit"
              >
                <FaYoutubeSquare className="social-media-icons" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/LNMIIT_Jaipur" target="_lnmiit">
                <FaTwitterSquare className="social-media-icons" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
