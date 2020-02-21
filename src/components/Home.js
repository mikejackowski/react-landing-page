import React from "react";

import styled from "styled-components";

import bgImg from "../assets/img/bg-home.jpg";

const Section = styled.section`
  position: relative;
  padding-top: 169px;
  padding-bottom: 70px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  &:after,
  &:before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    bottom: -1px;
    border-bottom: 10px solid #fff;
    z-index: 2;
  }

  &:before {
    left: 0;
    border-right: 12px solid transparent;
    border-left: calc(50vw - 12px) solid #fff;
  }

  &:after {
    right: 0;
    border-left: 12px solid transparent;
    border-right: calc(50vw - 12px) solid #fff;
  }

  @media (min-width: 992px) {
    padding-left: 110px;
    padding-right: 110px;
    padding-top: 144px;
    padding-bottom: 55px;
  }

  .container {
    z-index: 1;
    user-select: none;
    cursor: default;
  }
`;

const BgOverlay = styled.div`
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
  opacity: 0.9;
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;

  @media (min-width: 992px) {
    background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
  }
`;

const LogoWrapper = styled.h1`
  font-weight: 300;
  text-align: center;
  color: #fff;
  font-size: 22px;
  line-height: 1.55;
  margin-bottom: 23px;

  @media (min-width: 992px) {
    font-size: 38px;
    line-height: 1.39;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
  }
`;

const SubTitle = styled.h3`
  padding-top: 20px;
  font-size: 20px;
  font-weight: normal;
  line-height: 1.83;
  text-align: center;
  color: #007bff;

  @media (min-width: 992px) {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 19px;
  }
`;

const Logo = styled.img`
  max-height: 100px;
`

const Home = () => {
  return (
    <Section id="home">
      <BgOverlay />
      <div className="container">
        <LogoWrapper data-aos="zoom-in">
          <Logo src='https://brand.twitch.tv/assets/logos/svg/wordmark-extruded/purple.svg'/>
        </LogoWrapper>
        <SubTitle
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay="400"
        >
          No more guessing. TwitchZoom connect brands and streamers the right way.
        </SubTitle>
      </div>
    </Section>
  );
};

export default Home;
