import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu, FiPhone } from "react-icons/fi";

import { FaPhoneAlt } from "react-icons/fa";

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }

  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }
  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }
  render() {
    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 50) {
        document.querySelector(".header--fixed").classList.add("sticky");
      } else {
        document.querySelector(".header--fixed").classList.remove("sticky");
      }
    });

    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }

    const { logo, headerPosition, color = "default-color" } = this.props;
    let logoUrl;
    if (logo === "light") {
      logoUrl = (
        <img src="/assets/images/logo/logo-light.png" alt="ogfims logo" />
      );
    } else if (logo === "dark") {
      logoUrl = (
        <img src="/assets/images/logo/logo-dark.png" alt="ogfims logo" />
      );
    } else if (logo === "symbol-dark") {
      logoUrl = (
        <img src="/assets/images/logo/logo-symbol-dark.png" alt="ogfims logo" />
      );
    } else if (logo === "symbol-light") {
      logoUrl = (
        <img
          src="/assets/images/logo/logo-symbol-light.png"
          alt="ogfims logo"
        />
      );
    } else {
      logoUrl = <img src="/assets/images/logo/logo.png" alt="ogfims logo" />;
    }

    return (
      <header
        headerPosition="header--static logoresize"
        className={`header-area header--fixed formobile-menu  header--transparent ${headerPosition} ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <a href="/">{logoUrl}</a>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/news">Updates</Link>
                </li>
                <li className="has-droupdown">
                  <Link to="#">Resources</Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/publication"> Publications </Link>
                    </li>
                    <li>
                      <a
                        href="https://www.iita.org/digital-tools"
                        target="_blank"
                      >
                        {" "}
                        Digital Tools{" "}
                      </a>
                    </li>
                    <li>
                      <Link to="/">Videos</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/faq">FAQ's</Link>
                </li>
              </ul>
            </nav>
            <div className="slide-btn">
              <a
                className="btn-default btn-border-none btn-opacity"
                href="/contact"
              >
                <span>
                  <FaPhoneAlt style={{ fontSize: 20 }} /> Contact
                </span>
              </a>
            </div>

            <div className="slide-btn">
              <a href="/register" className="btn-default">
                Register
              </a>
            </div>

            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20 pl_sm--10">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
