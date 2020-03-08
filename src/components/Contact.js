import React from "react"
import styled from 'styled-components'

import { GreySection, SectionTitle } from './common';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import CopyIcon from './Icons/Copy';

const ContactSection = styled(GreySection)`

  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
`

const ContactSectionTitle = styled(SectionTitle)`
  font-size: 2.5em;
  margin: 5% auto 2% auto;
`


const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 5%;
`

const MailAddress = styled.p`
color: #007bff;
font-size: 3em;
color: #28a745;

  &:hover {
    font-weight: bold;
    transition: font-weight 0.5s;
}
`

const CopyIconWrapper = styled.div`
  position: relative;
  width: 70px;
  padding-left: 5px;
  height: 100%;
`

const Tooltip = styled.div`
  position: absolute;
  top: -50px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  background: black;
`


const Contact = () => {
  const [showTooltip, setShowTooltip ] = React.useState(false);
  const displayTooltip = () => {
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 3000);
  }
  return (
    <ContactSection id="contact">
      <ContactSectionTitle>
        Let's get in touch
      </ContactSectionTitle>
      <FormWrapper>
        <MailAddress><a href="mailto:hi@streamzoom.io">hi@streamzoom.io</a></MailAddress>

          <CopyToClipboard onCopy={() => displayTooltip()} text="hi@streamzoom.io">
            <CopyIconWrapper>
              <CopyIcon />
              {showTooltip && <Tooltip data-aos="fade-up">Copied to clipboard!</Tooltip>}
            </CopyIconWrapper>
          </CopyToClipboard>
      </FormWrapper>
    </ContactSection>
  )
}

export default Contact