import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./CommodityPriceList.css"; // Import your custom CSS for styling

const CommodityPriceList = () => {
  // Simulated data for commodity prices
  const simulatedCommodities = [
    {
      commodityName: "Rice",
      description: "Import looking rice",
      recentPrices: [
        { price: 12000, date: "2024-08-24", lga: "Abeokuta_North" },
        { price: 11850, date: "2024-08-23", lga: "Abeokuta_South" },
        { price: 11500, date: "2024-08-22", lga: "Ifo" },
      ],
      priceChange: -2.5, // Example: Price decreased by 2.5%
    },
    {
      commodityName: "Maize",
      description: "IITA white GMO maize",
      recentPrices: [
        { price: 6500, date: "2024-08-24", lga: "Ijebu_North" },
        { price: 6400, date: "2024-08-23", lga: "Ijebu_Ode" },
        { price: 6200, date: "2024-08-22", lga: "Remo_North" },
      ],
      priceChange: 1.8, // Example: Price increased by 1.8%
    },
    {
      commodityName: "Cassava",
      description: "Vitamin A fortified Cassava",
      recentPrices: [
        { price: 12000, date: "2024-08-24", lga: "Abeokuta_North" },
        { price: 11850, date: "2024-08-23", lga: "Abeokuta_South" },
        { price: 11500, date: "2024-08-22", lga: "Ifo" },
      ],
      priceChange: -2.5, // Example: Price decreased by 2.5%
    },
    {
      commodityName: "Maize",
      description: "IITA white GMO maize",
      recentPrices: [
        { price: 6500, date: "2024-08-24", lga: "Ijebu_North" },
        { price: 6400, date: "2024-08-23", lga: "Ijebu_Ode" },
        { price: 6200, date: "2024-08-22", lga: "Remo_North" },
      ],
      priceChange: 1.8, // Example: Price increased by 1.8%
    },
    {
      commodityName: "Rice",
      description: "Import looking rice",
      recentPrices: [
        { price: 12000, date: "2024-08-24", lga: "Abeokuta_North" },
        { price: 11850, date: "2024-08-23", lga: "Abeokuta_South" },
        { price: 11500, date: "2024-08-22", lga: "Ifo" },
      ],
      priceChange: -2.5, // Example: Price decreased by 2.5%
    },
    {
      commodityName: "Maize",
      description: "IITA white GMO maize",
      recentPrices: [
        { price: 6500, date: "2024-08-24", lga: "Ijebu_North" },
        { price: 6400, date: "2024-08-23", lga: "Ijebu_Ode" },
        { price: 6200, date: "2024-08-22", lga: "Remo_North" },
      ],
      priceChange: 1.8, // Example: Price increased by 1.8%
    },
  ];

  // Use simulated data instead of fetched data
  const [commodities, setCommodities] = useState(simulatedCommodities);

  // Comment out the useEffect for now
  // useEffect(() => {
  //   // Fetch the commodity prices from the backend
  //   fetch("/api/commodity-prices/recent")
  //     .then((response) => response.json())
  //     .then((data) => setCommodities(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  return (
    <div className="commodity-price-list">
      {commodities.map((commodity) => (
        <Link to={`/commodity/${commodity.id}`}>
          <div className="commodity-box" key={commodity.commodityName}>
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
                        <path
                          d="M21.875 8.00008V14.0001C21.875 14.2984 21.7564 14.5846 21.5455 14.7956C21.3345 15.0065 21.0483 15.1251 20.75 15.1251H14.75C14.4516 15.1251 14.1654 15.0065 13.9545 14.7956C13.7435 14.5846 13.625 14.2984 13.625 14.0001C13.625 13.7017 13.7435 13.4156 13.9545 13.2046C14.1654 12.9936 14.4516 12.8751 14.75 12.8751H18.0312L11.75 6.59383L8.7959 9.54883C8.69138 9.65371 8.56719 9.73692 8.43044 9.7937C8.2937 9.85049 8.14709 9.87971 7.99902 9.87971C7.85096 9.87971 7.70435 9.85049 7.5676 9.7937C7.43085 9.73692 7.30666 9.65371 7.20215 9.54883L0.452147 2.79883C0.240802 2.58748 0.12207 2.30084 0.12207 2.00195C0.12207 1.85396 0.15122 1.70741 0.207854 1.57069C0.264489 1.43396 0.3475 1.30972 0.452147 1.20508C0.556794 1.10043 0.681028 1.01742 0.817756 0.960784C0.954484 0.90415 1.10103 0.875 1.24902 0.875C1.54791 0.875 1.83455 0.993732 2.0459 1.20508L7.99996 7.15633L10.954 4.20133C11.0585 4.09645 11.1827 4.01323 11.3195 3.95645C11.4562 3.89967 11.6028 3.87044 11.7509 3.87044C11.899 3.87044 12.0456 3.89967 12.1823 3.95645C12.3191 4.01323 12.4433 4.09645 12.5478 4.20133L19.625 11.2813V8.00008C19.625 7.70171 19.7435 7.41556 19.9545 7.20458C20.1654 6.9936 20.4516 6.87508 20.75 6.87508C21.0483 6.87508 21.3345 6.9936 21.5455 7.20458C21.7564 7.41556 21.875 7.70171 21.875 8.00008Z"
                          fill="#45C378"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="22"
                        height="15"
                        viewBox="0 0 22 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.875 1.25V7.25C21.875 7.54837 21.7564 7.83452 21.5455 8.04549C21.3345 8.25647 21.0483 8.375 20.75 8.375C20.4516 8.375 20.1654 8.25647 19.9545 8.04549C19.7435 7.83452 19.625 7.54837 19.625 7.25V3.96875L12.5459 11.0487C12.4414 11.1536 12.3172 11.2368 12.1804 11.2936C12.0437 11.3504 11.8971 11.3796 11.749 11.3796C11.601 11.3796 11.4543 11.3504 11.3176 11.2936C11.1809 11.2368 11.0567 11.1536 10.9521 11.0487L7.99996 8.09375L2.0459 14.0459C1.83455 14.2573 1.54791 14.376 1.24902 14.376C0.950136 14.376 0.663491 14.2573 0.452147 14.0459C0.240802 13.8346 0.12207 13.5479 0.12207 13.2491C0.12207 12.9502 0.240802 12.6635 0.452147 12.4522L7.20215 5.70219C7.30666 5.59731 7.43085 5.51409 7.5676 5.45731C7.70435 5.40053 7.85096 5.3713 7.99902 5.3713C8.14709 5.3713 8.2937 5.40053 8.43044 5.45731C8.56719 5.51409 8.69138 5.59731 8.7959 5.70219L11.75 8.65625L18.0312 2.375H14.75C14.4516 2.375 14.1654 2.25647 13.9545 2.0455C13.7435 1.83452 13.625 1.54837 13.625 1.25C13.625 0.951631 13.7435 0.665483 13.9545 0.454505C14.1654 0.243526 14.4516 0.125 14.75 0.125H20.75C21.0483 0.125 21.3345 0.243526 21.5455 0.454505C21.7564 0.665483 21.875 0.951631 21.875 1.25Z"
                          fill="#F46565"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="line-plot">
                    <svg
                      width="106"
                      height="70"
                      viewBox="0 0 106 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6951 36.5463C6.70224 38.5536 1.90135 38.219 0 37.8009V70H53H106V15.4287C95.5426 -7.6543 84.3722 2.04726 80.0942 9.78342L72.7265 22.5376C69.4783 28.6708 59.4646 38.8881 45.3946 30.6919C31.3247 22.4958 23.5291 25.7436 21.3901 28.392C19.4888 30.2738 14.6879 34.5391 10.6951 36.5463Z"
                        fill="url(#paint0_linear_2024_57)"
                      />
                      <path
                        d="M1.13977 37.6838C3.00023 38.1006 7.69788 38.4341 11.6048 36.4333C15.5118 34.4324 20.2094 30.1807 22.0699 28.3049C24.1629 25.6649 31.7908 22.4274 45.5582 30.5975C59.3255 38.7676 69.1239 28.5828 72.3022 22.4691L79.5115 9.75548C83.6975 2.04393 94.6277 -7.62677 104.86 15.3828"
                        stroke="#8BBF87"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_2024_57"
                          x1="53"
                          y1="1"
                          x2="53"
                          y2="70"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#D5F7D5" />
                          <stop offset="1" stop-color="#F8FFF8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
                <span
                  className={`percentage-change ${
                    commodity.priceChange > 0 ? "up" : "down"
                  }`}
                >
                  {commodity.priceChange > 0
                    ? `+${commodity.priceChange}%`
                    : `${commodity.priceChange}%`}
                </span>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="bottom-section">
              <hr />
              <div className="local-gov-prices">
                {commodity.recentPrices.slice(0, 3).map((price, index) => (
                  <div className="lga-box" key={index}>
                    <span className="lga-name">{price.lga}</span>
                    <span className="lga-price">₦{price.price}</span>
                  </div>
                ))}
              </div>
              <hr />
              <div className="last-updated">
                Price updated, {commodity.recentPrices[0].date}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CommodityPriceList;
