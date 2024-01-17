import React, { useState, useEffect, Fragment } from "react";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import Slider from "react-slick";
import { Row, Col, Button, Card, Form, Modal } from "react-bootstrap";

import { Link } from "react-router-dom";
import { slideSlick } from "../page-demo/script";
import BlogContent from "../elements/blog/BlogContent";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/Footer";
import TeamOne from "../blocks/team/TeamOne";
import Accordion01 from "../elements/Accordion";
import Helmet from "../component/common/Helmet";
import {
  FiCast,
  FiLayers,
  FiUsers,
  FiChevronUp,
  FiCheck,
} from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";

import CounterOne from "../elements/counters/CounterOne";
import Brand from "../elements/Brand";
import AboutOne from "../blocks/about/AboutOne";
import CallAction from "../elements/callaction/CallAction";
import GoogleMapReact from "google-map-react";
import { Slide, Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { baseURL } from "../httpService";

const SlideList = [
  {
    textPosition: "text-left",
    bgImage: "bg_image--32",
    category: "",
    title: "Connect with our farmers",
    description: "Ogun State Farmers Information Management System (OGFIMS)",
    buttonText: "Register",
    buttonLink: "/register",
    button2Link: "/",
    button2Text: "Learn more",
    eshopButtonText: "Agro-shop",
    eshopLink: "https://agroshop.ogunfarminfo.org/",
  },
];

const lgas = [
  "Abeokuta-North",
  "Abeokuta-South",
  "Ado-Odo/Ota",
  "Ewekoro",
  "Ifo",
  "Ijebu-East",
  "Ijebu-North",
  "Ijebu-North-East",
  "Ijebu-Ode",
  "Ikenne",
  "Imeko-Afon",
  "Ipokia",
  "Obafemi-Owode",
  "Odeda",
  "Odogbolu",
  "Ogun-Waterside",
  "Remo-North",
  "Shagamu",
  "Yewa North",
];

const defaultProps = {
  center: {
    lat: 7.164477,
    lng: 3.367259,
  },
  zoom: 9,
};

const Home = () => {
  const [users, setUsers] = useState([]);
  const [banner, setBanner] = useState([]);
  const [news, setNews] = useState([]);
  const [tools, setTools] = useState([]);
  const [publications, setPublications] = useState([]);
  const [videos, setVideos] = useState([]);
  const [about_excerpt, setAboutExcerpt] = useState("");
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [pending, setPending] = useState(false);

  const [perPage, setPerPage] = useState(20);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("processor");
  const [currentModalData, setCurrentModalData] = useState("");
  const [lga, setLga] = useState("");
  const [total, setTotal] = useState(0);

  const [show, setShow] = useState(false);
  const [googlemapsapi, setGoogleMapsApi] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    //console.log(e);
    setShow(true);
  };

  //console.log(baseURL+videos[0]?.url)
  const AnyReactComponent = ({ userData }) => (
    <FaMapMarkerAlt
      className="mymarker"
      onClick={() => {
        setCurrentModalData(userData);
        handleShow(userData);
      }}
    />
  );

  useEffect(() => {
    if (banner.length === 0) {
      getData();
    }
  }, [banner]);

  useEffect(() => {
    if (!about_excerpt) {
      getAbout();
    }
  }, []);

  useEffect(() => {
    if (news.length === 0) {
      getNews();
    }
  }, [news]);

  useEffect(() => {
    if (tools.length === 0) {
      getTools();
    }
  }, [tools]);

  useEffect(() => {
    if (publications.length === 0) {
      getPub();
    }
  }, [publications]);

  useEffect(() => {
    if (videos.length === 0) {
      getVid();
    }
  }, [videos]);

  // useEffect(() => {
  //   if (categories.length === 0) {
  //     getCategory();
  //   }
  // }, [categories]);

  // useEffect(() => {
  //   if (users.length === 0) {
  //     // getUsers(page, perPage, category, lga);
  //   }
  // }, [users]);

  const getUsers = (pag, perPag, cate, lg) => {
    setPending(true);
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    setCategory(cate);
    setPerPage(perPage);
    setPage(pag);
    setLga(lg);
    const cat = cate ? `&category=${cate}` : "";
    const localG = lg ? `&lga=${lg}` : "";
    const endPoint = `${baseURL}farmers?limit=10000&page=1&order=desc${cat}${localG}`;
    //console.log(endPoint)
    fetch(endPoint, { method: "GET", headers })
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        setUsers(responseJson.users);
        setTotal(responseJson.total);
        setPending(false);
      })
      .catch((error) => {
        //console.log(error);
        setPending(false);
      });
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const getData = () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    fetch(`${baseURL}banners`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        // setBanner((prevBanners) => [...prevBanners, ...responseJson.banners]);
        setBanner(responseJson.banners);
      })
      .catch((error) => {
        //console.log(error);
      });
  };

  const getNews = () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    // imit=1&page=1&order=desc
    fetch(`${baseURL}posts?l`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("news response =>", responseJson);
        setNews((previousNews) => [...previousNews, ...responseJson.posts]);
        // setNews(responseJson.posts);
      })
      .catch((error) => {
        console.log("news error =>", error);
      });
  };

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
        setAboutExcerpt(responseJson.about.excerpt);
      })
      .catch((error) => {
        console.log("about error =>", error);
      });
  };

  const getCategory = () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    fetch(`${baseURL}category`, { method: "GET", headers })
      .then((response) => response.json())
      .then((responseJson) => {
        setCategories(responseJson.categories);
      })
      .catch((error) => {
        //console.log(error);
      });
  };

  const getTools = () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    // ?limit=1&page=1
    fetch(`${baseURL}tools`, { method: "GET", headers })
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson.tools);
        // setTools(responseJson.tools);
        // setTools(responseJson.tools);
        setTools((prevTools) => [...prevTools, ...responseJson.tools]);
      })
      .catch((error) => {
        //console.log(error);
      });
  };

  const getPub = () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    // ?limit=1&page=1&order=desc
    fetch(`${baseURL}publications`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson.publications);
        // setPublications(responseJson.publications);
        setPublications((prevPubs) => [
          ...prevPubs,
          ...responseJson.publications,
        ]);
      })
      .catch((error) => {
        //console.log(error);
      });
  };

  const getVid = () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    fetch(`${baseURL}video?limit=1&page=1&order=desc`, {
      // fetch(`${baseURL}video`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        // setVideos((prevVideos) => [...prevVideos, ...responseJson.videos]);
        setVideos(responseJson.videos);
      })
      .catch((error) => {
        //console.log(error);
      });
  };

  const geoCod = (text, arr) => {
    const res = text.split(" ");
    return res[arr];
  };

  const getSettings = () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    fetch(`${baseURL}settings/63eb32f6a11bca78138358bb`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setGoogleMapsApi(responseJson.setting.google_maps_api);
        // history.push("/content/banners");
        // history.push("/news/list");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!googlemapsapi) {
      getSettings();
    }
  }, []);

  return (
    <Fragment>
      <Helmet pageTitle="OGFIMS" />

      {/* Start Header Area  */}
      <Header
        headerPosition="header--static logoresize"
        logo="all-dark"
        color="color-black"
      />
      {/* End Header Area  */}

      {/* Start Slider Area   */}
      <div className="slider-wrapper">
        <div className="slider-activation">
          <Slider className="rn-slick-dot dot-light" {...slideSlick}>
            {SlideList.map((value, index) => (
              <div className={`slide slide-style-2`} key={index}>
                <div className="container">
                  <div className="row">
                    {/* text area */}
                    <div className="col-lg-5 col-md-5 col-sm-5 slide-left-text">
                      <div
                        className="inner"
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {value.title ? (
                          <h1 className="title text-dark ">
                            Connect with our{" "}
                            <span className="tertiary-color">farmers</span>
                          </h1>
                        ) : (
                          ""
                        )}
                        {value.description ? (
                          <p className="description text-dark">
                            {value.description}
                          </p>
                        ) : (
                          ""
                        )}
                        <div className="row ">
                          {/* learn more button */}
                          <div className="slide-btn col-md-5">
                            <Link className="btn-default" to="/about">
                              {value.button2Text}
                            </Link>
                            {/* <a
                              className="btn-default size-lg"
                              href={`${value.buttonLink}`}
                            >
                              {value.buttonText}
                            </a> */}
                          </div>
                          {/* agro-shop-shop btn */}
                          <div className="slide-btn col-md-5">
                            <a
                              className="btn-default-2 size-lg"
                              href={`${value.eshopLink}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {value.eshopButtonText}
                            </a>
                          </div>
                          {/* learn more  */}
                          {/* <div style={{ paddingTop: 20 }} className="col-sm-6">
                            <Link className="btn-text" to="/about">
                              {value.button2Text}
                            </Link>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    {/* banner area */}
                    <div className="col-lg-7 col-md-7 col-sm-7">
                      <Fade autoplay={true}>
                        {news.length > 0
                          ? news.slice(0, 6).map((item, i) => (
                              <Link
                                key={i}
                                to={{
                                  pathname: "/news-details",
                                  state: { data: item },
                                }}
                              >
                                <div className="each-slide-effect" key={i}>
                                  <div
                                    style={{
                                      backgroundImage: `url(${encodeURI(
                                        baseURL + item.featured_image
                                      )})`,
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        alignSelf: "flex-end",
                                        backgroundColor: "rgba(0,0,0,.4)",
                                        padding: 10,
                                        width: "100%",
                                      }}
                                    >
                                      <p className="text-white descriptionTrim">
                                        {item.title}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))
                          : null}
                      </Fade>
                    </div>
                  </div>

                  {/*<div className="filter-container row">
                                        <div className="col-lg-6 col-md-6 col-sm-6" style={{padding: 15}}>
                                            <span><b> Who </b> </span> <span className="b-right"> Farmer </span> 
                                            <span style={{paddingLeft: 30}}><b>Location</b></span> <span className="b-right"> Ogun </span> 
                                            <span style={{paddingLeft: 30}}><b>Crop</b></span> <span className="b-right"> Cassava </span>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4">
                                        </div>
                                        <button className="button col-lg-2 col-md-2 col-sm-2 text-white text-center"> Connect </button>
                                    </div>*/}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* End Slider Area   */}

      {/* Start Counterup Area */}
      <div className="counterup-area pt--40 pb--80 theme-text-white">
        <div className="container">
          <div className="section-title">
            <h2 className="title">About</h2>
          </div>

          <div className="row">
            {/* <div className="col-lg-6 col-md-6 col-sm-6" >
                        
                        </div> */}

            <div className="col-lg-12 col-md-12 col-sm-12">
              {about_excerpt}

              <div className="slide-btn">
                <Link className="btn-text" to="/about">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <CounterOne />
          <br />
          <br />
          <br />
          <hr />
        </div>
      </div>
      <br />
      <br />
      {/* End Counterup Area */}

      {/* Start Strategic Initiatives */}

      <div className="rn-pricing-table-area ptb--120 pb--80 bg_color--11">
        <div className="container">
          <div className="row">
            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12 mt--30">
              <div className="">
                <div className="section-title">
                  <h2 className="title text-white">
                    Our <br />
                    <span className="underline-text">Objectives</span>
                  </h2>
                </div>
              </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12 mt--30">
              <div className="rn-pricing">
                <div className="row">
                  <div className="col-2 align-items-center">
                    <img
                      src="/assets/images/icons/leave.webp"
                      alt="About Images"
                    />
                  </div>
                  <h5 className="col-10">Create Market Linkages</h5>
                </div>
                <p className="title-truncate">
                  To create an interactive platform for linkage between farmers
                  and stake holders in the Agricultural sector.
                </p>
              </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12 mt--30">
              <div className="rn-pricing">
                <div className="row">
                  <div className="col-2 align-items-center">
                    <img
                      src="/assets/images/icons/bird.webp"
                      alt="About Images"
                    />
                  </div>
                  <h5 className="col-10">Farmers Database</h5>
                </div>
                <p className="title-truncate">
                  To serve as a database for farmers in Ogun State.
                </p>
              </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12 mt--30">
              <div className="rn-pricing">
                <div className="row">
                  <div className="col-2 align-items-center">
                    <img
                      src="/assets/images/icons/fish.webp"
                      alt="About Images"
                    />
                  </div>
                  <h5 className="col-10">Information Dissemination</h5>
                </div>
                <p className="title-truncate">
                  To keep the farmers informed on new agricultural policies,
                  events, trainings, opportunities etc.
                </p>
              </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12 mt--30">
              <div className="rn-pricing">
                <div className="row">
                  <div className="col-2 align-items-center">
                    <img
                      src="/assets/images/icons/tractor.webp"
                      alt="About Images"
                    />
                  </div>
                  <h5 className="col-10">Curb Middle men activities</h5>
                </div>
                <p className="title-truncate">
                  To curb the activity of middle men in agricultural activities.
                </p>
              </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12 mt--30">
              <div className="rn-pricing">
                <div className="row">
                  <div className="col-2 align-items-center">
                    <img
                      src="/assets/images/icons/money.webp"
                      alt="About Images"
                    />
                  </div>
                  <h5 className="col-10">Capacity Building</h5>
                </div>
                <p className="title-truncate">
                  To enhance the capacity of farmers on best agricultural
                  practices.
                </p>
              </div>
            </div>
            {/* End PRicing Table Area  */}
          </div>
        </div>
      </div>
      {/* End  Start Strategic Initiatives */}

      {/* Start Service Area 
            <div className="service-area ptb--120">
                <div className="container">
                    <div className="section-title">
                        <h2 className="title">Who Can <span className="tertiary-color">Register</span></h2>
                    </div>
                    <div className="row service-main-wrapper">
                        {   categories.length > 0 ?
                            categories.map( (val , i) => (
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 justify-center align-items-center" key={i} style={{justifyContent:'center', alignItems:'center'}}>
                                <div className="service service__style--1 bg-white" style={{justifyContent:'center', alignItems:'center'}}>

                                    <div className="row" style={{width: '90%', justifyContent:'center', alignItems:'center'}}>
                                        <div className="col-lg-3">
                                            <img src="/assets/images/icons/caticon.webp" width={50} alt="categories"/>
                                        </div>
                                        <h5 className="col-lg-9 text-left"> { val.name}</h5>
                                    </div>
                                </div>
                            </div>
                        )):null}
                    </div>
                </div>
            </div>
             End Service Area */}

      {/* Start About Area 
            <div className="about-area rm-about-style-2 ptb--120 bg_color--5" id="about">
                <div className="about-wrapper">
                    <AboutOne />
                </div>
            </div>
             End About Area */}

      {/* Start About Area  
            <div className="rn-about-area ptb--120 bg_color--5">
                <div className="container">
                    <div className="row row--35">
                        <div className="col-lg-6">
                            <div className="thumbnail">
                                <img className="w-100" src="/assets/images/about/about-4.png" alt="About Images"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-inner inner">
                                <div className="section-title">
                                    <span className="subtitle">Our Working Plan</span>
                                    <h2 className="title">Working Process</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim exercitationem impedit iure quia quo recusandae?</p>
                                </div>
                                <div className="accordion-wrapper mt--30">
                                    <Accordion01 />
                                </div>
                                <div className="about-button mt--30">
                                    <a className="btn-default" href="/about">See how it works</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            End About Area  */}

      {/* Start Team Area  *
            <div className="rn-team-area ptb--120 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--25 mb_sm--0">
                                <span className="subtitle">Our Experts</span>
                                <h2 className="title">Managing Team</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <TeamOne column="col-lg-4 col-md-6 col-sm-6 col-12" teamStyle="team-style--bottom" item="3" />
                    </div>
                </div>
            </div>
            End Team Area  */}

      {/* Start Pricing Tbale Area  *
            <div className="rn-pricing-table-area ptb--120 bg_color--5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title service-style--3 text-center mb--25 mb_sm--0">
                                <span className="subtitle">Our Budget Plan</span>
                                <h2 className="title">Pricing Plan</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                         Start PRicing Table Area  
                        <div className="col-lg-4 col-md-6 col-12 mt--30">
                            <div className="rn-pricing">
                                <div className="pricing-table-inner">
                                    <div className="pricing-header">
                                        <h4 className="title">Free</h4>
                                        <div className="pricing">
                                            <span className="price">$45</span>
                                            <span className="subtitle">USD Per Month</span>
                                        </div>
                                    </div>
                                    <div className="pricing-body">
                                        <ul className="list-style--1">
                                            <li><FiCheck /> 5 PPC Campaigns</li>
                                            <li><FiCheck /> Digital Marketing</li>
                                            <li><FiCheck /> Marketing Agency</li>
                                            <li><FiCheck /> Seo Friendly</li>
                                            <li><FiCheck /> UI/UX designs</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <a className="rn-btn" href="#pricing">Purchase Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                         End PRicing Table Area  */}

      {/* Start PRicing Table Area  
                        <div className="col-lg-4 col-md-6 col-12 mt--30">
                            <div className="rn-pricing active">
                                <div className="pricing-table-inner">
                                    <div className="pricing-header">
                                        <h4 className="title">Business</h4>
                                        <div className="pricing">
                                            <span className="price">$45</span>
                                            <span className="subtitle">USD Per Month</span>
                                        </div>
                                    </div>
                                    <div className="pricing-body">
                                        <ul className="list-style--1">
                                            <li><FiCheck /> 5 PPC Campaigns</li>
                                            <li><FiCheck /> Digital Marketing</li>
                                            <li><FiCheck /> Marketing Agency</li>
                                            <li><FiCheck /> Seo Friendly</li>
                                            <li><FiCheck /> UI/UX designs</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <a className="rn-btn" href="#pricing">Purchase Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                         End PRicing Table Area  */}

      {/* Start PRicing Table Area  
                        <div className="col-lg-4 col-md-6 col-12 mt--30">
                            <div className="rn-pricing">
                                <div className="pricing-table-inner">
                                    <div className="pricing-header">
                                        <h4 className="title">Advanced</h4>
                                        <div className="pricing">
                                            <span className="price">$99</span>
                                            <span className="subtitle">USD Per Month</span>
                                        </div>
                                    </div>
                                    <div className="pricing-body">
                                        <ul className="list-style--1">
                                            <li><FiCheck /> 5 PPC Campaigns</li>
                                            <li><FiCheck /> Digital Marketing</li>
                                            <li><FiCheck /> Marketing Agency</li>
                                            <li><FiCheck /> Seo Friendly</li>
                                            <li><FiCheck /> UI/UX designs</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <a className="rn-btn" href="#pricing">Purchase Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                         End PRicing Table Area  
                    </div>
                </div>
            </div>
             End Pricing Tbale Area  */}

      {/* Start Brand Area  *
            <div className="rn-brand-area ptb--120 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--25 mb_sm--0">
                                <span className="subtitle">Top clients</span>
                                <h2 className="title">Clients Say What About Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 mt--30">
                            <div className="thumbnail position-relative">
                                <img className="w-100" src="/assets/images/about/about-10.png" alt="About Images"/>
                                <ModalVideo channel='youtube' isOpen={isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                <button className="video-popup position-top-center theme-color" onClick={this.openModal}><span className="play-icon"></span></button>
                            </div>
                        </div>
                    </div>
                    <div className="row pt--120">
                        <div className="col-lg-12">
                            <BrandTwo />
                        </div>
                    </div>
                </div>
            </div>
             End Brand Area  */}

      {/* Start Blog Area */}
      <div className="rn-blog-area pt--120 pb--80 bg_color--1 ">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-12">
              <div className="section-title service-style--3">
                <h2 className="title">Featured Stories</h2>
              </div>
            </div>
          </div>
          <div className="row mt--30 blog-style--2">
            {news.length > 0
              ? news.slice(0, 3).map((value, i) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30 "
                    key={i}
                  >
                    <div className="im_box">
                      <div className="thumbnail">
                        <Link
                          to={{
                            pathname: "/news-details",
                            state: { data: value },
                          }}
                        >
                          <img
                            className="w-100"
                            src={`${baseURL}${value.featured_image}`}
                            alt="news Images"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="inner">
                          <div className="content_heading">
                            <h4 className="title title-truncate">
                              <Link
                                to={{
                                  pathname: "/news-details",
                                  state: { data: value },
                                }}
                              >
                                {value.title}
                              </Link>
                            </h4>
                            <br />
                            <p
                              className="description descriptionTrim"
                              dangerouslySetInnerHTML={{
                                __html: value.content,
                              }}
                            ></p>
                          </div>
                        </div>
                        <Link
                          className="transparent_link"
                          to={{
                            pathname: "/news-details",
                            state: { data: value },
                          }}
                        ></Link>
                      </div>
                    </div>
                  </div>
                ))
              : null}
            <div className="mt-3 mb-3 text-white text-center">
              <Link to="/news" className="btn-default size-sm text-center ">
                More Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Area */}

      {/* Start Appstore Area */}

      <div className="service-area ptb--120 pb--80 bg_color--1">
        <div className="service-main-wrapper mobile-background">
          <div className="container">
            <div className="mobile-store">
              <h2 className="title text-white">Get our mobile app</h2>
              <p className="description text-white">
                Our mobile app will soon be available for both iOS and Android
                devices and completely free to download
              </p>

              <div className="row">
                <a href="#" className="w-100 col-6" style={{ maxWidth: 150 }}>
                  <img src="assets/images/icons/playstore.webp" />
                </a>
                <a href="#" className="w-100 col-6" style={{ maxWidth: 150 }}>
                  <img src="assets/images/icons/appstore.webp" />
                </a>
              </div>
            </div>

            <div className="mobile-icon">
              <img src="assets/images/icons/mobile-app.webp" />
            </div>
          </div>
        </div>
      </div>

      {/* End Appstore Area */}

      {/* Start RESOURCES Area */}

      <div className="rn-blog-area pt--120 pb--80 ">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-12">
              <div className="section-title service-style--3">
                <h2 className="title">Resources</h2>
              </div>
            </div>
          </div>
          <div className="row mt--30">
            {/* left div - videos */}
            <div
              className="col-lg-6 col-md-12 col-sm-12 col-12 mt--40"
              style={{ zIndex: 1 }}
            >
              {videos.length > 0
                ? videos.map((value, i) => (
                    <div key={i}>
                      <div className="im_box">
                        <video className="w-100" height={"265"} controls>
                          <source src={`${baseURL}${value.url}`} />
                        </video>

                        <div className="content">
                          <div className="inner">
                            <div className="content_heading">
                              <h4 className="title descriptionTrim">
                                <Link to="/">{value.title}</Link>
                              </h4>
                              <br />
                              <div className="row">
                                <p className="description descriptionTrim col-lg-8 col-md-12 col-sm-12 col-12">
                                  {value.body}
                                </p>

                                <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-white text-center">
                                  <button className="btn-default size-sm text-center">
                                    <Link to="">More Videos</Link>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*<Link className="transparent_link" to="/"></Link>*/}
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
            {/* right div - tools */}
            <div
              className="col-lg-6 col-md-12 col-sm-12 col-12 mt--40"
              style={{ zIndex: 0 }}
            >
              {tools.length > 0
                ? tools.map((value, i) => (
                    <div key={i}>
                      <div className="res_box">
                        <div className="thumbnail">
                          <a
                            href="https://www.iita.org/digital-tools/appdetails?app=Seed_tracker"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="w-100"
                              style={{ height: 150 }}
                              src={`${baseURL}${value.thumbnail}`}
                              alt="Blog Images"
                            />
                          </a>
                        </div>
                        <div className="content">
                          <div className="inner row">
                            <div className="content_heading col-lg-9">
                              <h4
                                className="title"
                                style={{
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <Link to="/">{value.title}</Link>
                              </h4>
                              <p
                                className="description descriptionTrimres"
                                dangerouslySetInnerHTML={{ __html: value.body }}
                              ></p>
                            </div>

                            <div className="col-lg-3 col-md-12 col-sm-12 text-white text-center">
                              <a
                                className="btn-default size-sm text-center"
                                target="_blank"
                                href="https://www.iita.org/digital-tools"
                              >
                                {" "}
                                See all{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : null}

              {publications.length > 0
                ? publications.map((value, i) => (
                    <div key={i}>
                      <div className="res_box">
                        <div className="thumbnail">
                          <Link
                            to={{
                              pathname: "/publication-details",
                              state: { data: value },
                            }}
                          >
                            <img
                              className="w-100"
                              style={{ height: 150 }}
                              src={`${baseURL}${value.thumbnail}`}
                              alt="Blog Images"
                            />
                          </Link>
                        </div>
                        <div className="content">
                          <div className="inner row">
                            <div className="content_heading col-lg-9">
                              <h4
                                className="title"
                                style={{
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <Link
                                  to={{
                                    pathname: "/publication-details",
                                    state: { data: value },
                                  }}
                                >
                                  {value.title}
                                </Link>
                              </h4>
                              <p
                                className="description descriptionTrimres"
                                dangerouslySetInnerHTML={{ __html: value.body }}
                              ></p>
                            </div>

                            <div className="col-lg-3 col-md-12 col-sm-12 text-white text-center">
                              <Link
                                to="/publication"
                                className="btn-default size-sm text-center"
                              >
                                {" "}
                                See all{" "}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
      {/* End RESOURCES Area */}

      {/* <div className="rn-blog-area pt--40 pb--80 ">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-12">
                            <div className="section-title service-style--3">
                                <h2 className="title">{category? category.replace('_',' ')+'s':''}</h2>
                            </div>
                        </div>
                    </div>


                    <Row xs="auto" style={{padding:20}}>
                        <Col>
                          <Form.Select aria-label="Category" value={category} style={{fontSize: 15}} size="sm" onChange={(e)=>{setCategory(e.target.value); getUsers(page, perPage, e.target.value, lga);}}>
                            <option value="trader">Traders</option>
                            <option value="processor">Processors</option>
                            <option value="off_taker">Off-takers</option>
                            <option value="transporter">Transporters</option>

                          </Form.Select>
                        </Col>
                          
                        <Col>
                          <Form.Select aria-label="LGA" size="sm" style={{fontSize: 14}} onChange={(e)=>{setCategory(e.target.value); getUsers(page, perPage, category, e.target.value, );}}>
                            <option value="">LGA</option>
                            {
                              lgas.map((item, i)=>(
                                <option key={i} value={item}>{item}</option>
                              ))
                            }
                            
                          </Form.Select>
                        </Col>
                        
                    </Row>


                    <div style={{ height: '50vh', width: '100%' }}>
                      <GoogleMapReact
                        bootstrapURLKeys={{ key: googlemapsapi}}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                      >
                        {
                            users.length > 0 ?
                            users.map((item, i)=>(
                               <AnyReactComponent
                                   key={i}
                                  lat={geoCod(item.geolocation, 0)}
                                  lng={geoCod(item.geolocation, 1)}
                                  userData={item}
                                /> 
                            )):null
                        }
                      </GoogleMapReact>
                    </div>
                    
                </div>
            </div>*/}

      {/* Start Brand Area */}
      <div className="rn-brand-area bg_color--5 ptb--120">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-12">
              <div className="section-title service-style--3">
                <h2 className="title">Partners</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Brand />
            </div>
          </div>
        </div>
      </div>
      {/* End Brand Area */}

      {/* Modal starts*/}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{currentModalData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body> Other user's info here </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/** Modal End  */}

      {/* Start call To Action  *
            <div className="container ptb--100">
               <CallAction />
            </div>
             End call To Action  */}

      {/* Start Footer Style  */}
      <Footer />
      {/* End Footer Style  */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </Fragment>
  );
};
export default Home;
