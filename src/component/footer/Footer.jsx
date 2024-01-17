import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  FaFlickr,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
const logoUrl = <img src="/assets/images/logo/logo.png" alt="ogfims logo" />;

const SocialShare = [
  {
    Social: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=100089630072348",
  },
  { Social: <FaTwitter />, link: "https://twitter.com/FarmersReg32308" },
  {
    Social: <FaYoutube />,
    link: "https://www.youtube.com/channel/UClkc8-dYNqM8vp8xrOV2J3w",
  },
  { Social: <FaInstagram />, link: "https://www.instagram.com/ogfimsweb/" },
  {
    Social: <FaFlickr />,
    link: "https://www.flickr.com/photos/197403087@N07/",
  },
];

class Footer extends Component {
  currentYear() {
    const d = new Date();
    return d.getFullYear();
  }

  render() {
    return (
      <React.Fragment>
        <footer className="footer-area footer-style-01 bg_color--6">
          {/* Start Call to Action Area  * 
                    <div className="im-call-to-action-area ptb--70 im-separator">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-xl-6 col-md-12 col-sm-12 col-12">
                                    <div className="inner">
                                        <h2 className="text-white mb--0">Enough Talk, Let's Build Something Together</h2>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 offset-xl-2 col-md-12 col-sm-12 col-12">
                                    <div className="call-to-cation-tbn text-left text-lg-right mt_md--20 mt_sm--20">
                                        <a className="btn-default btn-large btn-border btn-opacity" href="#button">Read Out Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     End Call to Action Area  */}

          {/* Start Footer Area  */}
          <div className="footer-wrapper ptb--70">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="ft-text">
                    <div className="logo">
                      <Link to="/">{logoUrl}</Link>
                    </div>
                    <p>
                      Copyright © {this.currentYear()}{" "}
                      <Link to="/">OGFIMS</Link> All rights reserved.
                    </p>
                  </div>
                </div>

                {/* Start Single Widget  */}
                <div className="col-lg-2 col-xl-2 offset-xl-1 col-md-6 col-sm-6 col-12 mt_mobile--40">
                  {/*<div className="footer-link">
                                        <h4>Quick Link</h4>
                                        <ul className="ft-link">
                                            <li><Link to="/">About</Link></li>
                                            <li><Link to="/">Resources</Link></li>
                                            <li><Link to="/">Featured Stories</Link></li>
                                            <li><Link to="/">FAQ</Link></li>
                                            <li><Link to="/">Contact</Link></li>
                                        </ul>
                                    </div>*/}
                </div>
                {/* End Single Widget  */}

                {/* Start Single Widget  */}
                <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                  {/*<div className="footer-link">
                                        <h4>Links</h4>
                                        <ul className="ft-link">
                                            <li><Link to="/about">About</Link></li>
                                            <li><Link to="/publication">Publications</Link></li>
                                            <li><Link to="/news">Featured Stories</Link></li>
                                            <li><Link to="/faq">FAQ</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </div>*/}
                </div>
                {/* End Single Widget  */}

                {/* Start Single Widget  */}
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                  <div className="footer-link">
                    <h4>Connect with us today!</h4>

                    <div className="social-share-inner mt--20">
                      <ul className="social-share social-style--2 d-flex justify-content-start liststyle">
                        {SocialShare.map((val, i) => (
                          <li key={i}>
                            <a
                              href={`${val.link}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {val.Social}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <ul className="ft-link">
                      <li>
                        Email:{" "}
                        <a href="mailto:ogfimsweb@gmail.com">
                          ogfimsweb@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Widget  */}
              </div>
            </div>
          </div>
          {/* End Footer Area  */}
        </footer>
      </React.Fragment>
    );
  }
}
export default Footer;
