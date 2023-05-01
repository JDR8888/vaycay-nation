import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../assets/images/vaycaylogo.png';

export default function NavbarFooter() {
  return (
    <div style={{ paddingTop: '10em' }}>
      <Navbar bg="dark" fixed="bottom">
        <Container className="justify-content-center">
          <Navbar.Brand href="#">
            <img
              alt=""
              src={logo}
              width="30"
              height="24"
              className="d-inline-block align-top"
            />{' '}
            <span className="text-light">VayCay Nation</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
