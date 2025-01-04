import React, { useState, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import Pagination from "../elements/common/Pagination";
import ScrollToTop from "react-scroll-up";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { baseURL } from "../httpService";

const NewsUpdate = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [totalPages, setTotalPages] = useState(1); // Track total pages
  const [totalPosts, setTotalPosts] = useState(0); // Track total posts
  const [postsPerPage] = useState(10); // Define the number of posts per page

  // Fetch news when page changes or component mounts
  useEffect(() => {
    getNews();
  }, [currentPage]); // Depend on currentPage to trigger effect on page change

  const sanitizeHTML = (html) => {
    const unescapedHTML = html
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&");
    return DOMPurify.sanitize(unescapedHTML, {
      ALLOWED_TAGS: ["p", "strong", "em", "u", "a", "br"],
      ALLOWED_ATTR: ["href", "target"],
    });
  };

  const getNews = () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    // Add pagination parameters: limit and page
    fetch(`${baseURL}posts?limit=${postsPerPage}&page=${currentPage}`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setNews(responseJson.posts);
        setTotalPages(Math.ceil(responseJson.totalPosts / postsPerPage)); // Calculate total pages
        setTotalPosts(responseJson.totalPosts); // Set total posts count
        setIsLoading(false); // Stop loading after data is fetched
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false); // Stop loading in case of error
      });
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Updates" />

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Breadcrumb Area */}
      <div
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--31"
        data-black-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title text-white">Updates</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Area */}
      <div className="rn-blog-area ptb--120 bg_color--1">
        <div className="container">
          <div className="row mt--30 blog-style--2">
            {news.length > 0
              ? news.map((value, i) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
                    key={i}
                  >
                    <div className="im_box">
                      <div className="thumbnail">
                        <Link to="/" style={{ textDecoration: "none" }}>
                          <img
                            className="w-100"
                            src={`${baseURL}${value.featured_image}`}
                            alt="Blog Images"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="inner">
                          <div className="content_heading">
                            <h4 className="title">{value.title}</h4>
                            <br />
                            <p
                              className="description descriptionTrim"
                              dangerouslySetInnerHTML={{
                                __html: sanitizeHTML(value.content),
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
          </div>

          {/* Pagination Area */}
          <div className="row mt--60">
            <div className="col-lg-12">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default NewsUpdate;
