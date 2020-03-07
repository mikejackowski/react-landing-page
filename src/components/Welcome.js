import React from "react"

import { Section, SectionTitle } from './Streamers';
import styled from "styled-components"
import Button from 'react-bootstrap/Button'

const ProductDescription = styled.div`
  font-size: 1em;
  width: 70%;
  font-weight: 300;
  letter-spacing: 0.02em;
  line-height: normal;
  text-align: justify;
  padding: 2% 0;
`

const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin: 20px 0;
  justify-content: center;
  align-items: center;
`

const WelcomeWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`
const Welcome = (props) => {
  const { selectedLayout, setSelectedLayout } = props;
  return (
    <Section id="Welcome">
      <WelcomeWrapper>
        <SectionTitle>Data-driven marketing is the future</SectionTitle>
        <ProductDescription>
          <b>StreamZoom</b> allows streamers to learn more about their viewers' profile. We collect key metrics and build a detailed profile.
        </ProductDescription>
        <ProductDescription style={{ paddingTop: '0'}}>
          Knowing and understanding users is key to running effective ad campaigns.
          Find the right partner and target the right audience.
        </ProductDescription>
        <ProductDescription style={{textAlign: 'center', paddingBottom: '1%'}}>
          We are working with:
        </ProductDescription>
        <ButtonWrapper>
          <Button
            style={{marginRight: '10px'}}
            variant={selectedLayout === 'brand' ? 'primary' : 'outline-primary'}
            size="lg"
            onClick={() => setSelectedLayout('brand')}>
              Brands
          </Button>
          <Button
            variant={selectedLayout === 'streamer' ? 'primary' : 'outline-primary'}
            size="lg"
            onClick={() => setSelectedLayout('streamer')}>
              Streamers
          </Button>
        </ButtonWrapper>
      </WelcomeWrapper>
    </Section>
  );
};

export default Welcome;
