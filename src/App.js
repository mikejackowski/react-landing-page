import React, { useState, useEffect } from "react";
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
import styled from 'styled-components';

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
`;


const MainWrapper = styled.main`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: auto 1fr auto;
`


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
    <AppWrapper>
      <Header
        data-aos="fade-up"
        selectedLayout={selectedLayout}
        setSelectedLayout={setSelectedLayout}/>
      <MainWrapper>
        <Home />
        {/* {selectedLayout === 'welcome' &&
        <Welcome
          selectedLayout={selectedLayout}
          setSelectedLayout={setSelectedLayout}/>
        }
        {selectedLayout === 'streamer' &&
        <Streamers />}
        {selectedLayout === 'brand' && */}
        <Brands />}
        <Contact />
      </MainWrapper>
    </AppWrapper>
  );
};

export default App;
