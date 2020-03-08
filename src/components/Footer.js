import React from "react"
import styled from 'styled-components'

import { Section, Text } from './common';

const FooterSection = styled(Section)`
  &:after,
  &:before {
    display: none;
  }
`

const FooterWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  align-items: center;
`

const FooterText = styled(Text)`
  width: 100%;
  text-align: center;
  justify-content: center;
  font-size: 0.7em;
`

const Footer = () => (
  <FooterSection id="footer">
    <FooterWrapper>
      <FooterText>© streamzoom.io - 2020</FooterText>
    </FooterWrapper>
  </FooterSection>
);

export default Footer