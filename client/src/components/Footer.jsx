import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import logo from '../assets/images/vaycaylogo.png';

function Footer() {
  return (
    <>
      <Navbar 
      style={{ width: '100%', backgroundColor: '#1B5448' }}
      >
        <Container className="d-flex justify-content-center">
          <img src={logo} width="40" height="40" />
          <Navbar.Brand href="#home" className="mx-2">
            VayCay Nation
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <FaInstagram size={20} />{' '}
            </Nav.Link>
            <Nav.Link href="#features">
              <FaTwitter size={20} />
            </Nav.Link>
            <Nav.Link href="#pricing">
              {' '}
              <FaFacebook size={20} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
