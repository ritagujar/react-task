import React from "react";
import "./Navbar.css";
import logo from "../images/Fliqa-India.png";

const Navbar = () => {
  return (
    <>
      <nav class="header">
        <div class="headTitle">
          <div class="headerDiv col">
            <a href="/" className="logo">
              <img className="nav-img" src={logo} alt="logo" />
            </a>
          </div>
        </div>
        <div
          class="navOptions"
          style={{ paddingLeft: "250px", textDecorationLine: "none" }}
        >
          <span>
            <a href="/">Home</a>
          </span>
          <span>
            <a href="/">About us</a>
          </span>
          <span>
            <a href="/services">Services</a>
          </span>
          <span>
            <a href="/">Frelancers</a>
          </span>
          <span>
            <a href="/">Blog</a>
          </span>
          <span>
            <a href="/">Tutorial</a>
          </span>
          <span>
            <a href="/">Contact us</a>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
