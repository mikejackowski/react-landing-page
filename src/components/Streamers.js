import React from "react";

import styled from "styled-components";

import Demo from "./Icons/Demo";

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 30px 0;
  background: #fff;

  &:after,
  &:before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    bottom: -1px;
    border-bottom: 10px solid #f6f6f6;
    z-index: 2;
  }

  &:before {
    left: 0;
    border-right: 12px solid transparent;
    border-left: calc(50vw - 12px) solid #f6f6f6;
  }

  &:after {
    right: 0;
    border-left: 12px solid transparent;
    border-right: calc(50vw - 12px) solid #f6f6f6;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.8em;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: normal;
  color: #1b5cce;
  text-align: center;
  width: 100%;
  margin: 0 auto 2%;
`

export const Box = styled.div`
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

export const IconWrap = styled.div`
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

export const BoxTitle = styled.h4`
  font-size: 24px;
  font-weight: 300;
  line-height: normal;
  color: #5273c7;
`;

export const Text = styled.p`
  font-size: 18px;
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
      <div>
        <SectionTitle>Find the right opportunities</SectionTitle>
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
                Get in touch with sponsors who offers right products for your audience. Stop wasting their time with ineffective promos.
              </Text>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-left" : "fade-up"}>
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Simple</BoxTitle>
              <Text>
                Requires minimal effort on your side. Setup in minutes, become noticed in days, get partnerships for years.
              </Text>
            </Box>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Streamers;
