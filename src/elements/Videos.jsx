import React, { useState, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import Pagination from "../elements/common/Pagination";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { baseURL } from "../httpService";
import ModalVideo from "react-modal-video";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Total pages for pagination
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setVideoId] = useState(null); // To store the current video to play
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const openModal = (id) => {
    setVideoId(id);
    setIsOpen(true);
  };

  // Fetch videos when the component mounts or when the current page changes
  useEffect(() => {
    getVideos(currentPage);
  }, [currentPage]);

  const getVideos = async (page) => {
    setIsLoading(true); // Start loading
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    try {
      const response = await fetch(`${baseURL}video?limit=10&page=${page}&order=desc`, {
        method: "GET",
        headers,
      });
      const responseJson = await response.json();
      setVideos(responseJson?.videos);
      setTotalPages(responseJson.totalPages); // Ensure total pages are set
    } catch (error) {
    } finally {
      setIsLoading(false); // Stop loading after the fetch
    }
  };

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Videos" />

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
      <div className="rn-blog-area ptb--120 bg_color--1">
        <div className="container">
          <div className="row mt--30 blog-style--2">
            {isLoading ? (
              <p>Loading videos...</p>
            ) : videos.length > 0 ? (
              videos.map((value, i) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
                  key={i}
                >
                  <div className="im_box">
                    <div className="thumbnail position-relative">
                      <img
                        className="w-100"
                        src={`${baseURL}${value.thumbnail}`}
                        alt="Video thumbnail"
                        onClick={() => openModal(value.url)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <div className="content">
                      <div className="inner">
                        <div className="content_heading">
                          <h4 className="title descriptionTrim">
                            {value.title}
                          </h4>
                          <p className="description descriptionTrim">
                            {value.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No videos found.</p>
            )}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>

      {/* ModalVideo for playing YouTube video */}
      {videoId && (
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId={videoId} // Pass the YouTube video ID
          onClose={() => setIsOpen(false)}
        />
      )}

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
