import React from "react";

import styled from "styled-components";

import Demo from "./Icons/Demo";

const Section = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 3em;
  font-weight: 300;
  line-height: normal;
  color: #1b5cce;
  text-align: center;
  margin-bottom: 2px;
`;

const SubTitle = styled.h5`
  font-size: 14px;
  font-weight: normal;
  line-height: normal;
  text-align: center;
  color: #aeaeae;
  margin-bottom: 25px;
  @media (min-width: 992px) {
    margin-bottom: 50px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  &:hover {
    transform: translateY(-5px) !important;
  }

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const IconWrap = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  border: solid 1px #eff2f9;
  background-color: #f8faff;
  margin-bottom: 30px;
  position: relative;
  > svg {
    transition: all 0.3s ease-in;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    > svg {
      transform: translate(-50%, -50%) rotateY(360deg);
    }
  }
`;

const BoxTitle = styled.h4`
  font-size: 18px;
  font-weight: 300;
  line-height: normal;
  color: #5273c7;
`;

const Text = styled.p`
  font-size: 12px;
  font-weight: normal;
  line-height: 1.58;
  color: #8f8f8f;
  margin-bottom: 0;
  max-width: 350px;
`;

const Streamers = () => {
  const width = window.innerWidth;
  return (
    <Section id="streamers">
      <div className="container">
        <SectionTitle>Get the right deals</SectionTitle>
        <SubTitle>Join our platform and take your streaming career to the next level. Learn about your audience, understand their profile, get the right deals.</SubTitle>
        <div className="row">
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-right" : "fade-up"}>
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Personal</BoxTitle>
              <Text>
                Understanding your viewer profile is crucial. Get to know them better, get a graps of what makes them tick.
              </Text>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos="fade-up">
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Personalized</BoxTitle>
              <Text>
                Generic ads are in decline. Personalized marketing is the future.
                Your target audience matters, and we will help you reach the people who really wants your product.
              </Text>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-left" : "fade-up"}>
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Highly customizable</BoxTitle>
              <Text>
                Use our dashboard to get access to the right streamers with right audience.
                Filter and find the right viewer profile. Get in touch with the right streamers. Track their channels growth.
                All in one place.
              </Text>
            </Box>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Streamers;
