import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { baseURL } from "../httpService";

const FAQ = () => {
  const [data, setData] = useState([]);

  const getFAQ = () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    fetch(`${baseURL}faq`, { method: "GET", headers })
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson.faqs);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (data.length < 1) {
      getFAQ();
    }
  }, [data]);

  return (
    <React.Fragment>
      <PageHelmet pageTitle="FAQ" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Start Breadcrump Area */}
      <div
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--33"
        data-black-overlay="6"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title text-white"> Frequently Asked Quetions</h2>
                {/* <p>Lorem Ipsum is not simply random text Lorem Ipsum is not simply random text. </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      <div className="rn-contact-top-area ptb--120 bg_color--5">
        <div className="container">
          <Accordion flush>
            {data.length > 0
              ? data.map((item, i) => (
                  <Accordion.Item key={i} eventKey={i}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    ></Accordion.Body>
                  </Accordion.Item>
                ))
              : null}
          </Accordion>
        </div>
      </div>

      {/* Start Footer Style  */}
      <Footer />
      {/* End Footer Style  */}
    </React.Fragment>
  );
};
export default FAQ;
