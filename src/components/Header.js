import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 5fr 2fr;
  align-items: center;
  justify-content: center;
`

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Header = (props) => {
  const {selectedLayout, setSelectedLayout} = props
  const scrollTo = id => e => {
    e.preventDefault();
    console.log("id", id);
    scroll.scrollTo({
      duration: 1500,
      delay: 100,
      smooth: "easeInOutQuint",
      containerId: id
    });
  };
  console.log('selectedLayout: ', selectedLayout)
  return (
    <header>
      <Navbar bg="light" expand="lg" fixed="top">
        <HeaderWrapper>
          <Navbar.Brand
            href="#home"
            onClick={scrollTo("home")}
            aria-label="Logo"
          >
            LOGO
          </Navbar.Brand>
          <ButtonWrapper>
            <Button
              style={{marginRight: '10px'}}
              variant={selectedLayout === 'brand' ? 'primary' : 'outline-primary'}
              size="lg"
              onClick={() => setSelectedLayout('brand')}
            >brand</Button>
            <Button

              variant={selectedLayout === 'streamer' ? 'primary' : 'outline-primary'}
              size="lg"
              onClick={() => setSelectedLayout('streamer')}>streamer</Button>
          </ButtonWrapper>
          <div id="basic-navbar-nav">
            <Nav>
              <Button
                variant='outline-success'
                size="lg">
                <Link
                  href="#"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={400}
                >
                  Get started
                </Link>
              </Button>
            </Nav>
          </div>
        </HeaderWrapper>
      </Navbar>
    </header>
  );
};

export default Header;
