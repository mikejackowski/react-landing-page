import React from "react";

import styled from "styled-components";
import CountUp from 'react-countup';
import ResponseIcon from './Icons/Response';
import JoinedIcon from './Icons/Joined';
import DatabaseIcon from './Icons/Database';
import { SectionTitle, Section } from './common';

const NumbersWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 2% 0;
  flex-wrap: wrap;
  justify-content: space-between;
`

const CountNumber = styled(SectionTitle)`
  font-size: 2.2em;
  letter-spacing: 0.03em;
`

const CountDescription = styled.div`
  display: flex;
  font-size: 1.5em;
  width: 100%;
  font-weight: 300;
  color: #343a40;
  letter-spacing: 0.02em;
  line-height: normal;
  justify-content: center;
  padding: 2% 0;
`

const CounteWrapper = styled.div`
  display: grid;
  grid-template-rows: 1.5fr 1fr;
  justify-content: center;
  align-items: center;
`

const Streamers = () => {
  return (
    <Section id="streamers">
        <SectionTitle data-aos="fade-up">Constantly growing</SectionTitle>
        <NumbersWrapper>
          <CounteWrapper className="col-lg-4">
            <DatabaseIcon/>
            <div>
              <CountUp duration={2.75} end={116} delay={0}>
                {({ countUpRef }) => (
                  <CountNumber ref={countUpRef}/>
                )}
              </CountUp>
              <CountDescription>
                Streamers in our database
              </CountDescription>
            </div>
          </CounteWrapper>
          <CounteWrapper className="col-lg-4">
            <ResponseIcon/>
            <div>
              <CountUp duration={2.75} end={496} delay={0}>
                {({ countUpRef }) => (
                  <CountNumber ref={countUpRef}/>
                )}
              </CountUp>
              <CountDescription>
                Responders today
              </CountDescription>
            </div>
          </CounteWrapper>
          <CounteWrapper className="col-lg-4">
            <JoinedIcon/>
            <div>
              <CountUp duration={2.75} end={13} delay={0}>
                {({ countUpRef }) => (
                  <CountNumber ref={countUpRef}/>
                )}
              </CountUp>
              <CountDescription>
                Streamers joined today
              </CountDescription>
            </div>
          </CounteWrapper>
        </NumbersWrapper>
    </Section>
  );
};

export default Streamers;
