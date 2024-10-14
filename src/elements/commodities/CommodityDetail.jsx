// src/elements/CommodityDetail.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FiChevronUp } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import CommodityDetailPage from "../../component/CommodityDetail/CommodityDetailPage";
import "./comodityDetail.css";

const CommodityDetail = () => {
  // const { id } = useParams();
  // const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   // Fetch product data using the ID from the backend
  //   fetch(`${process.env.REACT_APP_API_URL}/products/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => setProduct(data))
  //     .catch((error) => console.error("Error fetching product data:", error));
  // }, [id]);

  // if (!product) return <div>Loading...</div>;

  return (
    <div>
      <Header
        headerPosition="header--static logoresize"
        logo="all-dark"
        color="color-black"
      />
      <div className="commodityWrapper">
        <CommodityDetailPage />
      </div>
      <Footer /> {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
    </div>
  );
};

export default CommodityDetail;
