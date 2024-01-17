import React, { useState, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import AboutComp from "../component/HomeLayout/homeOne/About";
import { baseURL } from "../httpService";

import { FiSend } from "react-icons/fi";

import { Link } from "react-router-dom";

let title = "Who we are";

const About = () => {
  const [aboutContent, setAboutContent] = useState("");

  useEffect(() => {
    if (!aboutContent) {
      getAbout();
    }
  }, []);

  const getAbout = () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    fetch(`${baseURL}about/63be6ae74d53a9f1ef5d7a7e`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setAboutContent(responseJson.about);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <PageHelmet pageTitle="About" />

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* Start Breadcrump Area */}

      <div
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--32"
        data-black-overlay="6"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title text-white">About</h2>
                <p> </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Breadcrump Area */}

      {/* Start About Area */}
      <div className="rn-blog-details ptb--120 bg_color--1">
        <div className="about-wrapper">
          <div className="container">
            {aboutContent ? (
              <div className="row align-items-center">
                {/*<div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-1.png" alt="About Images"/>
                                </div>
                            </div>*/}

                <div className="col-md-12">
                  <div className="inner-wrapper">
                    <div className="section-title inner">
                      <h2 className="title">{title}</h2>
                      <p
                        className="description"
                        dangerouslySetInnerHTML={{ __html: aboutContent.body }}
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {/* End About Area */}

      {/* Start CounterUp Area 
            <div className="rn-counterup-area ptb--120 bg_color--5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span className="subtitle">Experts growths</span>
                                <h2 className="title">Our Impact</h2>
                                <p className="description">We have grown strength over the past 20 years.</p>
                            </div>
                        </div>
                    </div>
                    <CounterOne />
                </div>
            </div>
             End CounterUp Area */}

      {/* Start Finding Us Area  
            <div className="rn-finding-us-area attacment-fixed rn-finding-us ptb--120 bg_color--1 bg_image bg_image--18" data-black-overlay="5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="inner">
                                <div className="content-wrapper">
                                    <div className="content">
                                        <h4 className="theme-gradient">Lots of Benefit in stock for you</h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.</p>
                                        <a className="btn-default" href="/about">Join Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             End Finding Us Area  */}

      {/* Start Testimonial Area 
            <div className="rn-testimonial-area bg_color--1 ptb--120">
                <div className="container">
                    <Testimonial />
                </div>
            </div>
             End Testimonial Area */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />
    </React.Fragment>
  );
};
export default About;
