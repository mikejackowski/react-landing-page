import React from "react"

import { GreySection, SectionTitle, Text } from './common';
import styled from "styled-components"
import ChartIcon from './Icons/Chart';

const AboutWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 2% 0;
  flex-wrap: wrap;
  justify-content: space-between;
`

const AboutContentWrapper = styled.div`
  display: flex;
  width: 65%;
  flex-wrap: wrap;
`

const TextWrapper = styled(AboutWrapper)`
  width: 100%;
  margin: 0;
  justify-content: center;
  flex-wrap: wrap;
  color: black;
`

const AboutIconWrapper = styled.div`
  width: 35%;
`

const About = (props) => {
  return (
    <GreySection id="about">
      <AboutWrapper>
        <SectionTitle data-aos="fade-up">Personalized marketing is the future</SectionTitle>
        <AboutContentWrapper>
          <TextWrapper className="textwrapper">
            <Text>
              stream<b>zoom.io</b> deepens relationship between streamers and their viewers. We enable collecting key demographic metrics to get better understand of viewers' persona.
            </Text>
            <Text>
              Knowing and understanding users is key to running effective ad campaigns.
              Find the right partner and target the right audience.
            </Text>
          </TextWrapper>
        </AboutContentWrapper>
        <AboutIconWrapper>
          <ChartIcon/>
        </AboutIconWrapper>
      </AboutWrapper>
    </GreySection>
  );
};

export default About;
