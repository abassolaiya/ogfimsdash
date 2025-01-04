import React, { useState, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { baseURL } from "../httpService";
import { Link } from "react-router-dom";
import Pagination from "../elements/common/Pagination"; // Import your Pagination component

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [publicationsPerPage] = useState(6); // Set number of publications per page
  const [totalPages, setTotalPages] = useState(1); // Track total pages
  const [searchTerm, setSearchTerm] = useState(""); // Track search term
  const [filter, setFilter] = useState("all"); // Track selected filter
  const [isLoading, setIsLoading] = useState(false); // Loading state

  useEffect(() => {
    getPublications(currentPage, searchTerm, filter); // Fetch data when the component mounts or the page, searchTerm, or filter changes
  }, [currentPage, searchTerm, filter]);

  const getPublications = async (page, searchTerm, filter) => {
    setIsLoading(true); // Start loading
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    // Construct the query params
    let query = `limit=${publicationsPerPage}&page=${page}`;
    if (searchTerm) query += `&search=${searchTerm}`;
    if (filter && filter !== "all") query += `&filter=${filter}`;

    try {
      const response = await fetch(`${baseURL}publications?${query}`, {
        method: "GET",
        headers,
      });
      const responseJson = await response.json();
      console.log(responseJson);
      setPublications(responseJson.publications); // Set the new publications for the current page
      setTotalPages(responseJson.totalPages); // Update total pages from response
    } catch (error) {
      console.log("Error fetching publications:", error);
    } finally {
      setIsLoading(false); // Stop loading after the fetch
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
              <option value="crops">Crops</option>
              <option value="livestock">Livestock</option>
              <option value="production-management-practices">
                Production and Management practices
              </option>
              <option value="training-materials">Training materials</option>
              <option value="technology-innovations">
                Technology and Innovations
              </option>
              <option value="market-economic-information">
                Market and Economic information
              </option>
              <option value="climate-environmental-information">
                Climate and Environmental information
              </option>
              <option value="policy-regulatory-guidelines">
                Policy and Regulatory Guidelines
              </option>
              <option value="reports">Reports</option>
            </select>
          </div>
        </div>
      </div>
      {/* End Search and Filter Area */}

      {/* Start Blog Area */}
      <div className="rn-blog-area ptb--120 bg_color--1">
        <div className="container">
          <div className="row mt--30 blog-style--2">
            {isLoading ? (
              <p>Loading publications...</p>
            ) : publications.length > 0 ? (
              publications.map((value, i) => (
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
            ) : (
              <p>No publications found.</p>
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
