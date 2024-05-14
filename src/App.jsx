/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Abdullah Khan Malokhani",
  title: "Web Developer & Programming Enthusiast",
  email: "Abdullah.khan1@studentambassadors.com",
  gitHub: "https://github.com/Abdullah22588",
  instagram: "abdullah_khan1025",
  linkedIn: "https://www.linkedin.com/in/abdullah-khan-49111826b/",
  medium: "",
  twitter: "",
  youTube: "https://www.youtube.com/channel/UCTLkvxgfdPcR1e8HWH9gVPA",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
