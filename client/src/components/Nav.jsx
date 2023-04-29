// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';

export default function NavbarComp() {
    return (
      <Navbar expand="lg" style={{ backgroundColor: '#1B5448' }}>
        <Container>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Navbar.Brand style={{ color: 'white', fontSize: '2.5em', textDecoration: 'none' }}>
              VayCay Nation
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5em', marginRight: '1rem' }}>
                Home
              </Link>
              <Link to="/SearchResults" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5em', marginRight: '1rem' }}>
                Search
              </Link>
              <NavDropdown title="User Options" id="basic-nav-dropdown" style={{ color: 'white', fontSize: '1.5em' }}>
                <NavDropdown.Item style={{ backgroundColor: '#1B5448', color: 'white' }}>Action</NavDropdown.Item>
                <NavDropdown.Item style={{ backgroundColor: '#1B5448', color: 'white' }}>Another action</NavDropdown.Item>
                <NavDropdown.Item style={{ backgroundColor: '#1B5448', color: 'white' }}>Something</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  

