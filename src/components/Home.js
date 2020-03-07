import React from "react";

import styled from "styled-components";

const Section = styled.section`
  position: relative;
  padding-top: 70px;
  padding-bottom: 70px;
  opacity: 0.9;
  height: fit-content;
  width: 100%;
  box-sizing: border-box;
  /* background: linear-gradient(to top, rgba(253, 253, 253, 0.3) 0%, rgba(193, 218, 255, 0.3) 100%); */
  background: linear-gradient(to top, rgba(193, 218, 255, 0.3) 0%, rgba(253, 253, 253, 0.3) 100%);

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
    padding-top: 90px;
    padding-bottom: 70px;
  }

  .container {
    z-index: 1;
    user-select: none;
    cursor: default;
  }
`;

const LogoWrapper = styled.h1`
  font-weight: 300;
  text-align: center;
  color: #fff;
  font-size: 1em;
  line-height: 1.55;
  margin-bottom: 23px;
  margin-right: 2%;

  @media (min-width: 992px) {
    font-size: 1.5em;
    line-height: 1.39;
    max-width: 1100px;
    margin-bottom: 0;
  }
`;

const Title = styled.h2`
  max-width: 70%;
  font-size: 1.2em;
  font-weight: normal;
  line-height: 1.83;
  text-align: left;
  color: black;

  @media (min-width: 992px) {
    max-width: 70%;
  }
`

const SubTitle = styled.h3`
  max-width: 70%;
  font-size: 1.2em;
  font-weight: normal;
  line-height: 1.83;
  text-align: left;
  color: #343a40;

  @media (min-width: 992px) {
    max-width: 70%;
  }
`;

const Logo = styled.img`
  max-height: 100px;
  padding: 10px;
`

const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
  }
`

const Home = () => {
  return (
    <Section id="home">
        <HeroWrapper>
          <LogoWrapper data-aos="zoom-in">
            <Logo src='https://brand.twitch.tv/assets/logos/svg/wordmark-extruded/purple.svg'/>
          </LogoWrapper>
          <Title
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-delay="400"
          >
            stream<b>zoom</b>.io
          </Title>
          <SubTitle
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-delay="400"
          >
            We're connecting streamers and advertisers the right way.
          </SubTitle>
        </HeroWrapper>
    </Section>
  );
};

export default Home;
