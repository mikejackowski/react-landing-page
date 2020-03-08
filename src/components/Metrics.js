import React from "react";
import { Section, SectionTitle, Box, BoxTitle, IconWrap, Text } from './common';
import styled from 'styled-components';
import GenderIcon from "./Icons/Gender";
import AgeIcon from "./Icons/Age";
import FrequencyIcon from "./Icons/Frequency";
import HobbiesIcon from "./Icons/Hobbies";
import EducationIcon from "./Icons/Education";
import OccupationIcon from "./Icons/Occupation";
import MartialStatusIcon from "./Icons/MartialStatus";

const MetricsWrapper = styled.div`
  width: 80%;
  margin: 0 auto 2% auto;
`

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`




const Metrics = () => {
  const width = window.innerWidth;
  return (
    <Section id="metrics">
      <MetricsWrapper>
        <SectionTitle data-aos="fade-up">Make your advertising effective</SectionTitle>
        <RowWrapper>
          <Text style={{ textAlign: 'center' }}>
            Use our 7 key metrics to find the right audience, adjust your messaging and make your ads count.
          </Text>
        </RowWrapper>
        <RowWrapper>
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-right" : "fade-up"}>
              <IconWrap>
                <AgeIcon />
              </IconWrap>
              <BoxTitle>Age</BoxTitle>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos="fade-up">
              <IconWrap>
                <GenderIcon/>
              </IconWrap>
              <BoxTitle>Gender</BoxTitle>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-left" : "fade-up"}>
              <IconWrap>
                <FrequencyIcon />
              </IconWrap>
              <BoxTitle>Frequency</BoxTitle>
            </Box>
          </div>
        </RowWrapper>
        <RowWrapper style={{ paddingTop: '5%' }}>
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-right" : "fade-up"}>
              <IconWrap>
                <HobbiesIcon />
              </IconWrap>
              <BoxTitle>Other interests</BoxTitle>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos="fade-up">
              <IconWrap>
                <EducationIcon/>
              </IconWrap>
              <BoxTitle>Education</BoxTitle>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-left" : "fade-up"}>
              <IconWrap>
                <OccupationIcon />
              </IconWrap>
              <BoxTitle>Professional occupation</BoxTitle>
            </Box>
          </div>
        </RowWrapper>
        <RowWrapper style={{ paddingTop: '5%', justifyContent: 'center' }}>
          <Box data-aos={"fade-up"}>
              <IconWrap>
                <MartialStatusIcon />
              </IconWrap>
              <BoxTitle>Martial status</BoxTitle>
            </Box>
        </RowWrapper>
      </MetricsWrapper>
    </Section>
  );
};

export default Metrics;
