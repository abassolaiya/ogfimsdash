import React, { useState, useEffect } from "react";
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
import { useParams } from "react-router-dom"; // Import the hook
import "./CommodityDetailPage.css";
import { baseURL } from "../../httpService";

const CommodityDetailPage = () => {
  const { id } = useParams(); // Use useParams to get the 'id' from the URL
  const [commodityData, setCommodityData] = useState(null);
  const [plotType, setPlotType] = useState("line");

  // Fetch commodity data from the backend
  useEffect(() => {
    const fetchCommodityData = async () => {
      try {
        console.log("Fetching data for commodity ID:", id);
        const response = await fetch(`${baseURL}commodity-prices/${id}`);
        const data = await response.json(); // Convert response to JSON

        if (data) {
          setCommodityData(data); // Set data if valid
        } else {
          console.error("Invalid data structure:", data);
        }
      } catch (error) {
        console.error("Error fetching commodity data:", error);
      }
    };

    fetchCommodityData();
  }, [id]);

  if (!commodityData) {
    return <div>Loading...</div>;
  }

  const { name, averagePrice, prices, plotData } = commodityData;

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
                ₦{priceEntry.price}{" "}
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
