import React, { Component } from "react";
import { baseURL } from "../../httpService";
import { Link } from "react-router-dom";
import {
  FaFlickr,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const logoUrl = <img src="/assets/images/logo/logo.png" alt="ogfims logo" />;

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialLinks: [], // Initialize socialLinks as an empty array
    };
  }

  componentDidMount() {
    this.fetchSocialMediaLinks();
  }

  // Fetch social media links from the backend
  fetchSocialMediaLinks = async () => {
    try {
      const response = await fetch(`${baseURL}social-media`);
      if (!response.ok) {
        throw new Error("Failed to fetch social media links");
      }
      const result = await response.json();
      
      // Set socialLinks to the data array from the result
      this.setState({ socialLinks: result.data || [] });
    } catch (error) {
      console.error("Error fetching social media links", error);
    }
  };

  currentYear() {
    const d = new Date();
    return d.getFullYear();
  }

  render() {
    return (
      <React.Fragment>
        <footer className="footer-area footer-style-01 bg_color--6">
          <div className="footer-wrapper ptb--70">
            <div className="container">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="ft-text text-start">
                    <div className="logo">
                      <Link to="/">{logoUrl}</Link>
                    </div>
                    <p>
                      Copyright © {this.currentYear()}{" "}
                      <Link to="/">OGFIMS</Link> All rights reserved.
                    </p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                  <div className="footer-link text-end">
                    <h4>Connect with us today!</h4>

                    <div className="social-share-inner mt--20">
                      <ul className="social-share social-style--2 d-flex justify-content-end liststyle">
                        {this.state.socialLinks.length > 0 ? (
                          this.state.socialLinks.map((media, index) => (
                            <li key={media._id}>
                              <a
                                href={media.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {this.getSocialIcon(media.type)}
                              </a>
                            </li>
                          ))
                        ) : (
                          <li>No social links available</li> // Optional message
                        )}
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
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }

  getSocialIcon(type) {
    switch (type) {
      case "Facebook":
        return <FaFacebookF />;
      case "Twitter":
        return <FaTwitter />;
      case "YouTube":
        return <FaYoutube />;
      case "Instagram":
        return <FaInstagram />;
      case "Flickr":
        return <FaFlickr />;
      default:
        return null;
    }
  }
}

export default Footer;
