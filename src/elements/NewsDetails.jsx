import React, { useState } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { useParams, useHistory, useLocation } from "react-router-dom";

import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { baseURL } from "../httpService";

const NewsDetails = () => {
  const location = useLocation();
  const [data, setData] = useState(location.state?.data);
  const newsBg = encodeURI(`${baseURL}${location.state?.data.featured_image}`);
  return (
    <React.Fragment>
      <PageHelmet pageTitle="News Details" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Start Breadcrump Area */}
      <div
        className="rn-page-title-area pt--120 pb--190"
        data-black-overlay="7"
        style={{
          backgroundImage: `url(${newsBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-page-title text-center pt--100">
                <h2 className="title text-white"> {data.title}</h2>
                <ul className="blog-meta d-flex justify-content-center align-items-center">
                  <li>
                    <FiClock />
                    {data.createdAt}
                  </li>
                  {/*<li><FiUser />Fatima Asrafi</li>
                                    <li><FiMessageCircle />15 Comments</li>
                                    <li><FiHeart />Like</li>*/}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Blog Details */}
      <div className="rn-blog-details pt--110 pb--70 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-wrapper">
                <div
                  className="inner"
                  dangerouslySetInnerHTML={{ __html: data.content }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Details */}

      {/* Start BLog Comment Form  
            <div className="blog-comment-form pb--120 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <div className="section-title">
                                    <span className="subtitle">Have a Comment?</span>
                                    <h2 className="title">Leave a Reply</h2>
                                </div>
                                <form className="mt--40" action="#">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="rnform-group">
                                                <input type="text" placeholder="Name" />
                                            </div>
                                            <div className="rnform-group">
                                                <input type="email" placeholder="Email" />
                                            </div>
                                            <div className="rnform-group">
                                                <input type="text" placeholder="Website" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="rnform-group">
                                                <textarea type="text" placeholder="Comment"></textarea>
                                            </div>
                                            
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="blog-btn mt--30">
                                                <Link className="btn-default" to="/blog-details"><span>SEND MESSAGE</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             End BLog Comment Form  */}

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
export default NewsDetails;
