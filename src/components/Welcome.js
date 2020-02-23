import React from "react"

import styled from "styled-components"
import Button from 'react-bootstrap/Button'

const Section = styled.section`
  height: 100%;
  width: 100%;
  margin-top: 30px;
`

const SectionTitle = styled.h2`
  font-size: 3em;
  font-weight: 300;
  line-height: normal;
  color: #1b5cce;
  text-align: center;
  margin-bottom: 2px;
`

const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin: 20px 0;

  justify-content: center;
  align-items: center;
`

const Welcome = (props) => {
  const { selectedLayout, setSelectedLayout } = props;
  return (
    <Section id="Welcome">
      <div className="container">
        <SectionTitle>Effective partnerships for:</SectionTitle>
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
      </div>
    </Section>
  );
};

export default Welcome;
