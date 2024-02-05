// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// Create Import File
import "./index.scss";
import "./custom_css.scss";

// Common Layout
// import Layout from "./component/common/App";

import PageScrollTop from "./component/PageScrollTop";

// Home layout

import Home from "./home/Home";

// Element Layout
import About from "./elements/About";
import FAQ from "./elements/FAQ";
import Contact from "./elements/Contact";
import NewsUpdate from "./elements/NewsUpdate";
import NewsDetails from "./elements/NewsDetails";
import Publications from "./elements/Publications";
import PublicationDetails from "./elements/PublicationDetails";

import Service from "./elements/Service";
import PortfolioDetails from "./elements/PortfolioDetails";
import error404 from "./elements/error404";

// Blocks Layout
import Team from "./blocks/Team";
import Counters from "./blocks/Counters";
import Testimonial from "./blocks/Testimonial";
import Portfolio from "./blocks/Portfolio";
import VideoPopup from "./blocks/VideoPopup";
import Gallery from "./blocks/Gallery";
import Brand from "./blocks/Brand";
import ProgressBar from "./blocks/ProgressBar";
import ContactForm from "./blocks/ContactForm";
import GoogleMap from "./blocks/GoogleMap";
import Columns from "./blocks/Columns";
import PricingTable from "./blocks/PricingTable";
import Button from "./blocks/Button";

// import Register from "./elements/Register";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Register from "./elements/RegisterOld";
import RegisterForm from "./elements/RegisterForm";
import Videos from "./elements/Videos";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <ToastContainer />
        <PageScrollTop>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            {/* Element Layot */}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/register`}
              component={RegisterForm}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/faq`}
              component={FAQ}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/publication`}
              component={Publications}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/contact`}
              component={Contact}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/about`}
              component={About}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/news`}
              component={NewsUpdate}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/publication-details`}
              component={PublicationDetails}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/portfolio-details`}
              component={PortfolioDetails}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/videos`}
              component={Videos}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/news-details`}
              component={NewsDetails}
            />

            <Route
              path={`${process.env.PUBLIC_URL}/404`}
              component={error404}
            />
            <Route component={error404} />
          </Switch>
        </PageScrollTop>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
