import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CommodityPriceList.css"; // Import your custom CSS for styling

const CommodityPriceList = () => {
  const [commodities, setCommodities] = useState([]);

  // Fetch commodities from the backend API
  useEffect(() => {
    const fetchCommodities = async () => {
      try {
        const response = await fetch("/api/commodities/latest");
        const data = await response.json();
        setCommodities(data); // Assume data is an array of commodities
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCommodities();
  }, []);

  // Check if the length of commodities is less than 3
  if (commodities.length < 3) {
    return null; // Do not render anything if there are less than 3 commodities
  }

  return (
    <div className="commodity-price-list">
      {/* Render title only if there are 3 or more commodities */}
      <div className="section-title">
        <h2 className="title">Market Trends</h2>
      </div>
      {commodities.map((commodity) => (
        <Link to={`/commodity/${commodity.id}`} key={commodity.commodityName}>
          <div className="commodity-box">
            {/* Top Section */}
            <div className="top-section">
              <div className="name">{commodity.commodityName}</div>
              <div className="description">{commodity.description}</div>
            </div>

            {/* Middle Section */}
            <div className="middle-section">
              <hr />
              <div className="current-price">
                <div className="price-container">
                  <span className="price">
                    ₦{commodity.recentPrices[0].price}
                  </span>
                  <span
                    className={`arrow ${
                      commodity.priceChange > 0 ? "up" : "down"
                    }`}
                  >
                    {commodity.priceChange > 0 ? (
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* SVG for upward arrow */}
                      </svg>
                    ) : (
                      <svg
                        width="22"
                        height="15"
                        viewBox="0 0 22 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* SVG for downward arrow */}
                      </svg>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CommodityPriceList;
