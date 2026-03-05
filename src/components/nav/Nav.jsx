import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./n.css";

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav_scrolled" : ""}`}>
      <div className="nav_container">
        <div className="nav_logo"></div>

        <ul className={`nav_ul ${mobileOpen ? "nav_ul_mobile_open" : ""}`}>
          <li className="nav_li">
            <a href="/">Home</a>
          </li>
          <li className="nav_li">
            <a href="/wedding-party">Wedding Party</a>
          </li>
          <li className="nav_li">
            <a href="/wedding-schedule">Wedding Schedule</a>
          </li>
          <li className="nav_li">
            <a href="/travel-info">Travel Info</a>
          </li>
          <li className="nav_li">
            <a href="/rsvp">RSVP</a>
          </li>
        </ul>

        <div className="nav_mobile_icon" onClick={toggleMobileMenu}>
          {mobileOpen ? <X size={32} /> : <Menu size={32} />}
        </div>
      </div>
    </nav>
  );
};

export default Nav;