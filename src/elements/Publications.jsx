import React, { useState, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { baseURL } from "../httpService";
import { Link } from "react-router-dom";

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [publicationsPerPage] = useState(6); // Set number of publications per page
  const [totalPages, setTotalPages] = useState(1); // Track total pages
  const [searchTerm, setSearchTerm] = useState(""); // Track search term
  const [filter, setFilter] = useState("all"); // Track selected filter

  useEffect(() => {
    getPublications(currentPage, searchTerm, filter); // Fetch data when the component mounts or the page, searchTerm, or filter changes
  }, [currentPage, searchTerm, filter]);

  const getPublications = (page, searchTerm, filter) => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    // Construct the query params
    let query = `limit=${publicationsPerPage}&page=${page}&order=desc`;
    if (searchTerm) query += `&search=${searchTerm}`;
    if (filter && filter !== "all") query += `&filter=${filter}`;

    fetch(`${baseURL}publications?${query}`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setPublications(responseJson.publications); // Set the new publications for the current page
        setTotalPages(Math.ceil(responseJson.total / publicationsPerPage)); // Update total pages
      })
      .catch((error) => {
        console.log("Error fetching publications:", error);
      });
  };

  // Handle the next and previous buttons
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      window.scrollTo(0, 0); // Scroll to top
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      window.scrollTo(0, 0); // Scroll to top
    }
  };

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Publications" />

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
                <h2 className="title text-white">Publications</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Breadcrump Area */}

      {/* Start Search and Filter Area */}
      <div className="container ptb--60">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search publications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            {/* Filter Dropdown */}
            <select
              className="form-control"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="research">Research</option>
              <option value="reports">Reports</option>
              <option value="articles">Articles</option>
              {/* Add more filter options as needed */}
            </select>
          </div>
        </div>
      </div>
      {/* End Search and Filter Area */}

      {/* Start Blog Area */}
      <div className="rn-blog-area ptb--120 bg_color--1">
        <div className="container">
          <div className="row mt--30 blog-style--2">
            {publications.length > 0
              ? publications.map((value, i) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
                    key={i}
                  >
                    <div className="im_box">
                      <div className="thumbnail">
                        <Link
                          style={{ textDecoration: "none" }}
                          to={{
                            pathname: "/publication-details",
                            state: { data: value },
                          }}
                        >
                          <img
                            className="w-100"
                            src={`${baseURL}${value.thumbnail}`}
                            alt="thumbnail"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="inner">
                          <div className="content_heading">
                            <h4
                              className="title"
                              style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <Link
                                style={{ textDecoration: "none" }}
                                to={{
                                  pathname: "/publication-details",
                                  state: { data: value },
                                }}
                              >
                                {value.title}
                              </Link>
                            </h4>
                            <br />
                            <p
                              className="description descriptionTrim"
                              dangerouslySetInnerHTML={{ __html: value.body }}
                            ></p>
                          </div>
                        </div>
                        <Link
                          style={{ textDecoration: "none" }}
                          className="transparent_link"
                          to={{
                            pathname: "/publication-details",
                            state: { data: value },
                          }}
                        ></Link>
                      </div>
                    </div>
                  </div>
                ))
              : <p>No publications found.</p>}
          </div>

          {/* Pagination Controls */}
          <div className="row mt--60">
            <div className="col-lg-12 text-center">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                style={{
                  backgroundColor: "#28a745", // Green button color
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  opacity: currentPage === 1 ? 0.5 : 0.7,
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                  transition: "opacity 0.3s",
                  margin: "0 15px",
                }}
                className="faded-btn"
              >
                Previous
              </button>
              <span
                style={{
                  margin: "0 15px",
                  fontSize: "20px", // Adjust font size
                  color: "#000", // Set to black for better visibility
                }}
              >
                {currentPage}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                style={{
                  backgroundColor: "#28a745", // Green button color
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  opacity: currentPage === totalPages ? 0.5 : 0.7,
                  cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                  transition: "opacity 0.3s",
                  margin: "0 15px",
                }}
                className="faded-btn"
              >
                Next
              </button>
            </div>
          </div>
        </div>
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

export default Publications;
