import React from "react";
import Typing from 'react-typing-animation';
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  padding-top: 70px;
  padding-bottom: 70px;
  opacity: 0.9;
  height: fit-content;
  width: 100%;

  box-sizing: border-box;
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

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  align-items: baseline;

  @media (min-width: 992px) {
    max-width: 70%;
  }
`

const Title = styled.h2`
  font-size: 3em;
  font-family: 'Slabo', serif;
  letter-spacing: 0.05em;
  font-weight: normal;
  text-align: center;
  color: black;
  padding: 0;
  margin: 0;
`

const SubTitle = styled.h3`
  text-align: center !important;
  width: 100%;
  font-size: 1.6em;
  font-weight: normal;
  line-height: 1.83;
  text-align: left;
  color: #343a40;
  margin: 0 auto;

  @media (min-width: 992px) {
    max-width: 70%;
  }
`;

const HeroWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
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
        <TitleWrapper
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-delay="400"
        >
          <Title>stream<b>zoom.io</b></Title>
        </TitleWrapper>
        <TitleWrapper>
          <Typing
            className="headertext"
            speed={1}>
            <SubTitle>
              We're connecting streamers and advertisers the right way.
            </SubTitle>
          </Typing>
        </TitleWrapper>
      </HeroWrapper>
    </Section>
  );
};

export default Home;
