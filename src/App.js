import React, { useState, useEffect, Fragment } from "react";
import AOS from "aos";
import $ from "jquery";

import Header from "./components/Header";
import Home from "./components/Home";
import Brands from "./components/Brands";
import Contact from "./components/Contact";

import "aos/dist/aos.css";
import "./assets/styles/main.scss";
import Welcome from "./components/Welcome";
import Streamers from "./components/Streamers";

const App = () => {
  const [selectedLayout, setSelectedLayout] = useState('welcome')
  useEffect(() => {
    AOS.init({ once: true });

    let navElement = $("nav");

    $(function() {
      $(window).scrollTop() > navElement.innerHeight()
        ? navElement.addClass("sticky")
        : navElement.removeClass("sticky");
    });
    $(window).on("scroll", function() {
      $(window).scrollTop() > navElement.innerHeight()
        ? navElement.addClass("sticky")
        : navElement.removeClass("sticky");
    });
  });

  return (
    <Fragment>
      <Header
       selectedLayout={selectedLayout}
       setSelectedLayout={setSelectedLayout}/>
      <main>
        <Home />
        {selectedLayout === 'welcome' &&
        <Welcome />}
        {selectedLayout === 'streamer' &&
        <Streamers />}
        {selectedLayout === 'brand' &&
        <Brands />}
        <Contact />
      </main>
    </Fragment>
  );
};

export default App;
