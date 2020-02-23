import React from "react";

import styled from "styled-components";

import Demo from "./Icons/Demo";

const Section = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8em;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: normal;
  color: #1b5cce;
  text-align: center;
  margin-bottom: 2%;
`

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
  font-size: 24px;
  font-weight: 300;
  line-height: normal;
  color: #5273c7;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: normal;
  line-height: 1.58;
  color: #8f8f8f;
  margin-bottom: 0;
  max-width: 350px;
`;

const Brands = () => {
  const width = window.innerWidth;
  return (
    <Section id="brands">
      <div className="container">
        <SectionTitle>Make your advertising effective</SectionTitle>
        <div className="row">
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-right" : "fade-up"}>
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Right streamers with right audience</BoxTitle>
              <Text>
                Stop guessing and start using our data to find right patners for your marketing effrots.
              </Text>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos="fade-up">
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Use real data</BoxTitle>
              <Text>
                Leverage 7 key metrics to find streamers with right audience for your product.
              </Text>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-left" : "fade-up"}>
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Effective</BoxTitle>
              <Text>
                Get in contact with the streamers, track their channel statistics, measure your campaign effects.
              </Text>
            </Box>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Brands;
