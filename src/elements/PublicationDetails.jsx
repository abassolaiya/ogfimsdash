import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { useLocation } from "react-router-dom";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { baseURL } from "../httpService";

const PublicationDetails = () => {
  const location = useLocation();
  const [data, setData] = useState(location.state?.data);

  // Function to increment the download count
  const handleDownload = async () => {
    try {
      // Call the download API to increment the count
      const response = await fetch(`${baseURL}publications/download/${data._id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Download count incremented successfully");
      } else {
        console.error("Failed to increment download count");
      }
    } catch (error) {
      console.error("Error incrementing download count:", error);
    }
  };

  return (
    <React.Fragment>
      {/* Start Pagehelmet  */}
      <PageHelmet pageTitle="Service Details" />
      {/* End Pagehelmet  */}

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Start Breadcrump Area */}
      <div
        className="rn-page-title-area pt--120 pb--190 pt_md--100 pb_md--100 pt_sm--100 pb_sm--100 bg_image bg_image--1"
        data-black-overlay="5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100 pt_md--50 pt_sm--100">
                <h3 className="title text-white">{data.title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Page Wrapper */}
      <div className="rn-service-details ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-details-inner">
                <div className="inner row">
                  <div className="col-lg-4">
                    <img src={`${baseURL + data.thumbnail}`} alt="Thumbnail" />
                    <p>Size: {data.size}</p>
                    <p>Download count: {data.downloadCount}</p>
                    {/* Handle Download Action */}
                    <a
                      style={{ textDecoration: "none" }}
                      href={`${baseURL}${data.url}`}
                      className="btn-default size-lg text-center"
                      onClick={handleDownload} // Call the handleDownload function when clicked
                      download
                    >
                      Download
                    </a>
                  </div>

                  <div
                    className="col-lg-8"
                    dangerouslySetInnerHTML={{ __html: data.body }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Wrapper */}

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

export default PublicationDetails;
