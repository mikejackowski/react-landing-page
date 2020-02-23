import React from "react"
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  height: 100%;
  height: fit-content;
  background-color: #f6f6f6;
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
`

const ContactText = styled.h3`
  position: relative;
  width: 100%;
  font-size: 1.5em;
  font-weight: 300;
  padding: 2% 0;
  color: #343a40;

  &:after {
    content: "";
    width: 40%;
    height: 0;
    position: absolute;
    bottom: -1px;
    left: 30%;
    border-bottom: 5px solid #007bff;
    z-index: 2;
  }
`

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding-top: 2%;
  justify-content: center;
  align-items: center;
`

const MailAddress = styled.p`
color: #007bff;
font-size: 1em;

  &:hover {
    font-size: 1.2em;
    transition: font-size 0.5s;
}
`


const Contact = () => (
  <Section id="contact">
    <ContactText>
      Contact us:
    </ContactText>
    <FormWrapper>
      <MailAddress><a href="mailto:streamers@streamzoom.io">streamers@streamzoom.io</a></MailAddress>
      <MailAddress><a href="mailto:brands@streamzoom.io">brands@streamzoom.io</a></MailAddress>
    </FormWrapper>
  </Section>
)

export default Contact