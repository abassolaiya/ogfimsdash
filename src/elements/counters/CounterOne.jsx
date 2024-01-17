import React, { useState, useEffect, Fragment } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FiHeart, FiClock, FiCheckCircle, FiAward } from "react-icons/fi";
import { baseURL } from "../../httpService";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const CounterOne = () => {
  const [didViewCountUp, setDidViewCountUp] = useState(false);
  const [data, setData] = useState("");

  const getData = () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    fetch(`${baseURL}user/count`, { method: "GET", headers })
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson)
        setData(responseJson);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!data) {
      getData();
    }
  }, [data]);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  };

  const Data = [
    {
      countNum: data ? data.farmers : 0,
      countTitle: "Farmers",
      background: "#25463A",
    },

    // {
    //   countNum: 0,
    //   countTitle: "Service Providers",
    //   background: "#437E6B",
    // },

    {
      countNum: data ? data.town : 0,
      countTitle: "Locations",
      background: "#70A691",
    },

    {
      countNum: data ? data.processors : 0,
      countTitle: "Processors",
      background: "#25463A",
    },

    {
      countNum: data ? data.offtakers : 0,
      countTitle: "Off Takers",
      background: "#437E6B",
    },

    {
      countNum: data ? data.agroMarketer : 0,
      countTitle: "Agro Marketers",
      background: "#70A691",
    },

    {
      countNum: data ? data.bds : 0,
      countTitle: "Business Development Service Providers",
      background: "#25463A",
    },

    // {
    //   countNum: data ? data.experts : 0,
    //   countTitle: "Experts",
    //   background: "#437E6B",
    // },

    {
      countNum: data ? data.extension_workers : 0,
      countTitle: "Extension Workers",
      background: "#70A691",
    },

    {
      countNum: data ? data.inputDelear : 0,
      countTitle: "Input Dealers",
      background: "#25463A",
    },

    {
      countNum: data ? data.mechanizationService : 0,
      countTitle: "Mechanization Service Providers",
      background: "#437E6B",
    },
    {
      countNum: data ? data.logistic : 0,
      countTitle: "Transporters",
      background: "#70A691",
    },
  ];

  const nFormatter = (n) => {
    let da;
    if (n < 1e3) {
      da = n > 0 ? n + "+" : n;
    }
    if (n >= 1e3) {
      /* eslint-disable-next-line no-useless-concat */
      da = `${+(n / 1e3).toFixed(1)}K +`;
    }
    return da;
  };

  return (
    <>
      <div className="row mt--10">
        <Slider {...settings}>
          {Data.map((value, index) => (
            <div
              className="im_single_counterup col-lg-4 col-md-4 col-sm-6 col-12"
              key={index}
            >
              <div
                className="im_counterup"
                style={{ backgroundColor: value.background }}
              >
                <div className="inner">
                  <VisibilitySensor
                    className="text-white"
                    onChange={onVisibilityChange}
                    delayedCall
                  >
                    <h1 className="text-white im_counterup_font">
                      {nFormatter(value.countNum)}
                    </h1>
                  </VisibilitySensor>
                  <p className="description">{value.countTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default CounterOne;
