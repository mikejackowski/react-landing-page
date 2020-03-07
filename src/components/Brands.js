import React from "react";
import { Section, SectionTitle, Box, BoxTitle, IconWrap, Text } from './Streamers';

import Demo from "./Icons/Demo";


const Brands = () => {
  const width = window.innerWidth;
  return (
    <Section id="brands">
      <div>
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
