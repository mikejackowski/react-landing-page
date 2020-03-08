import React, { useEffect } from "react";
import AOS from "aos";
import $ from "jquery";

import Header from "./components/Header";
import Home from "./components/Home";
import Metrics from "./components/Metrics";
import Contact from "./components/Contact";
import Growing from './components/Growing';
import About from "./components/About";
import Footer from "./components/Footer";

import "aos/dist/aos.css";
import "./assets/styles/main.scss";
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
        data-aos="fade-up"/>
      <MainWrapper>
        <Home />
        <Growing/>
        <About/>
        <Metrics />
        <Contact />
        <Footer />
      </MainWrapper>
    </AppWrapper>
  );
};

export default App;
