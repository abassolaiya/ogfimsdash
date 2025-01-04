import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu, FiPhone } from "react-icons/fi";

import { FaPhoneAlt } from "react-icons/fa";

class HeaderFive extends Component {
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

    const { logo, color, headerPosition } = this.props;
    let logoUrl;
    if (logo === "light") {
      logoUrl = <img src="/assets/images/logo/logo.png" alt="" />;
    } else if (logo === "dark") {
      logoUrl = <img src="/assets/images/logo/logo.png" alt="" />;
    } else if (logo === "symbol-dark") {
      logoUrl = <img src="/assets/images/logo/logo.png" alt="" />;
    } else if (logo === "all-dark") {
      logoUrl = <img src="/assets/images/logo/logo.png" alt="" />;
    } else if (logo === "symbol-light") {
      logoUrl = <img src="/assets/images/logo/logo.png" alt="" />;
    } else {
      logoUrl = <img src="/assets/images/logo/logo.png" alt="" />;
    }

    return (
      <header
        className={`header-area header-not-transparent header--fixed formobile-menu ${headerPosition} ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4 col-6">
                <div className="header-left">
                  <div className="logo">
                    <a href="/">{logoUrl}</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-8 col-6">
                <div className="header-right justify-content-end">
                  <nav className="mainmenunav d-lg-block">
                    <ul className="mainmenu">
                      <li>
                        <Link style={{ textDecoration: "none" }} to="/">
                          Home
                        </Link>
                      </li>
                      {/*<li className="has-droupdown"><Link  style={{ textDecoration: "none" }} to="#">Home</Link>
                                                <ul className="submenu">
                                                    <li><Link  style={{ textDecoration: "none" }} to="/main-demo">Main Demo</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/dark-main-demo">Main Demo Dark</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/personal-portfolio">Personal Portfolio</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/interior-landing">Interior Landing</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/dark-portfolio-landing">Portfolio One Page 02</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/portfolio-home">Minimal Portfolio</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/digital-agency">Digital Agency</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/creative-agency">Creative Agency</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/corporate-business">Corporate Business</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/portfolio-landing">Portfolio One Page</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/creative-landing">Creative Agency Landing</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/business">Business</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/designer-portfolio">Designer Portfolio</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/home-particles">Home Particles</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/studio-agency">Studio Agency</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/startup">Startup</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/creative-portfolio">Creative Portfolio</Link></li>
                                                </ul>
                                            </li>*/}
                      <li>
                        <Link style={{ textDecoration: "none" }} to="/about">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link style={{ textDecoration: "none" }} to="/news">
                          Updates
                        </Link>
                      </li>
                      <li className="has-droupdown">
                        <Link style={{ textDecoration: "none" }} to="#">
                          Resources
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/publication"
                            >
                              {" "}
                              Publications{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/tools"
                            >
                              {" "}
                              Digital Tools{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/videos"
                            >
                              Videos
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link style={{ textDecoration: "none" }} to="/faq">
                          FAQ's
                        </Link>
                      </li>

                      {/* <li className="has-droupdown"><Link  style={{ textDecoration: "none" }} to="#pages" >Pages</Link>
                                                <ul className="submenu">
                                                    <li><Link  style={{ textDecoration: "none" }} to="/blog">Blog List</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/blog-details">Blog Details</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/service">Service</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/service-details">Service Details</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/portfolio">Portfolio</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/portfolio-details">Portfolio Details</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/404">404</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-droupdown"><Link  style={{ textDecoration: "none" }} to="#" >Blocks</Link>
                                                <ul className="submenu">
                                                    <li><Link  style={{ textDecoration: "none" }} to="/portfolio">Portfolio</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/team">Team</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/service">Service</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/video-popup">Video Popup</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/progressbar">Progressbar</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/gallery">Gallery</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/counters">Counters</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/blog">Blog List</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/clint-logo">Clint Logo</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/contact-form">Contact Form</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/google-map">Google Map</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/columns">Columns</Link></li>
                                                    <li><Link  style={{ textDecoration: "none" }} to="/pricing-table">Pricing Table</Link></li>
                                                </ul>
                                            </li>*/}
                      <div className="slide-btn">
                        <a
                          style={{ textDecoration: "none" }}
                          className="btn-default btn-border-none btn-opacity"
                          href="/contact"
                        >
                          <span>
                            <FaPhoneAlt style={{ fontSize: 20 }} /> Contact
                          </span>
                        </a>
                      </div>

                      <div className="slide-btn">
                        <a
                          style={{ textDecoration: "none" }}
                          href="/register"
                          target="_blank"
                          className="btn-default"
                        >
                          Register
                        </a>
                      </div>
                      {/* https://enketo.seedtracker.org/preview/UIM4zvDR */}
                    </ul>
                  </nav>

                  {/* Start Humberger Menu  */}
                  <div className="humberger-menu d-block d-lg-none pl--20">
                    <span
                      onClick={this.menuTrigger}
                      className="menutrigger text-white"
                    >
                      <FiMenu />
                    </span>
                  </div>
                  {/* End Humberger Menu  */}
                  <div className="close-menu d-block d-lg-none">
                    <span
                      onClick={this.CLoseMenuTrigger}
                      className="closeTrigger"
                    >
                      <FiX />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default HeaderFive;
