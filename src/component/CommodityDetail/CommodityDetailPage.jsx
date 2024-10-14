import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Table, Dropdown } from "react-bootstrap";
import "./CommodityDetailPage.css";

const dummyCommodityData = {
  name: "Maize",
  averagePrice: 250,
  prices: [
    {
      lga: "Ijebu_North",
      price: 240,
      scale: "Kg",
      trend: "up",
    },
    {
      lga: "Abeokuta_South",
      price: 260,
      scale: "Kg",
      trend: "down",
    },
    {
      lga: "Remo_North",
      price: 255,
      scale: "Kg",
      trend: "up",
    },
  ],
  plotData: [
    { month: "Jan", price: 230 },
    { month: "Feb", price: 240 },
    { month: "Mar", price: 250 },
    { month: "Apr", price: 245 },
    { month: "May", price: 255 },
    { month: "Jun", price: 250 },
  ],
};

const CommodityDetailPage = () => {
  const [plotType, setPlotType] = useState("line");

  const { name, averagePrice, prices, plotData } = dummyCommodityData;

  const renderPlot = () => {
    switch (plotType) {
      case "line":
        return (
          <ResponsiveContainer width="100%" height={500}>
            <LineChart data={plotData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="price" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        );
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={plotData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="price" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        );
      case "histogram":
        return (
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={plotData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        );
      case "histogramWithLine":
        return (
          <ResponsiveContainer width="100%" height={500}>
            <LineChart data={plotData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="price" fill="#82ca9d" />
              <Line type="monotone" dataKey="price" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div className="commodity-detail-page">
      <h1>Market Trend</h1>
      <div className="totalContainer">
        <div className="plot-section">
          <div className="plot-info">
            <div className="info-box">
              <strong>{name}</strong>
            </div>
            <div className="price-box">
              <span>Average Price</span>
              <strong>₦{averagePrice}</strong>
            </div>
          </div>

          <div className="plot-controls">
            <Dropdown className="control-dropdown">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Plot Type:{" "}
                {plotType.charAt(0).toUpperCase() + plotType.slice(1)}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setPlotType("line")}>
                  Line Plot
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setPlotType("bar")}>
                  Bar Chart
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setPlotType("histogram")}>
                  Histogram
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setPlotType("histogramWithLine")}>
                  Histogram with Line
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div className="plot-container">{renderPlot()}</div>
      </div>

      {/* <h2>Price Details by LGA</h2> */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Location</th>
            <th>Measuring Scale</th>
            <th>Current Price</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((priceEntry, index) => (
            <tr key={index}>
              <td>{priceEntry.lga}</td>
              <td>{priceEntry.scale}</td>
              <td>
                ${priceEntry.price}{" "}
                <span className={`trend-icon ${priceEntry.trend}`}>
                  {priceEntry.trend === "up" ? "▲" : "▼"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CommodityDetailPage;
