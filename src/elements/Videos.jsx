import React, { useState, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import Pagination from "../elements/common/Pagination";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { baseURL } from "../httpService";
import { Link } from "react-router-dom";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (publications.length === 0) {
      getVideos();
    }
  }, []);

  const getVideos = () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    fetch(`${baseURL}videos?limit=100&page=1&order=desc`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.videos);
        setVideos(responseJson.videos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Updates" />

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* Start Breadcrump Area */}

      <div
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--20"
        data-black-overlay="6"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title text-white">Videos</h2>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Breadcrump Area */}

      {/* Video Area */}
      <div
        className="col-lg-6 col-md-12 col-sm-12 col-12 mt--40"
        style={{ zIndex: 1 }}
      >
        {videos.length > 0
          ? videos.map((value, i) => (
              <div key={i}>
                <div className="im_box">
                  <div className="thumbnail position-relative">
                    <img
                      className="w-100"
                      src={`${baseURL}${value.thumbnail}`}
                      alt="Video thumbnail"
                    />
                    <ModalVideo
                      channel="custom"
                      isOpen={isOpen}
                      url={
                        value.url.startsWith("https://")
                          ? value.url
                          : `${baseURL}${value.url}`
                      }
                      onClose={() => setIsOpen(false)}
                    />
                    <button
                      className="video-popup position-top-center theme-color"
                      onClick={() => openModal()}
                    >
                      <span className="play-icon"></span>
                    </button>
                  </div>
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
                              <Link to="/videos">More Videos</Link>
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
      {/* End Blog Area */}

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
export default Videos;
