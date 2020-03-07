import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const NavBarWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`

const HeaderWrapper = styled.header`
  width: 100%;
  height: 60px;
  min-height: fit-content;
  max-width: 100vw;
`

const Header = (props) => {
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
  return (
    <HeaderWrapper
      className="fixed-top"
      data-aos="fade-up"
      data-aos-easing="ease"
      data-aos-delay="100"
      >
      <Navbar bg="light" expand="md" fixed="top">
        <NavBarWrapper>
          <Navbar.Brand
            href="#home"
            onClick={scrollTo("home")}
            aria-label="Logo"
          >
            LOGO
          </Navbar.Brand>
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
        </NavBarWrapper>
      </Navbar>
    </HeaderWrapper>
  );
};

export default Header;
