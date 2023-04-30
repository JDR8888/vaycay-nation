// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Auth from '../utils/auth.js';
import Dropdown from 'react-bootstrap/Dropdown';

import { Link } from 'react-router-dom';

export default function NavbarComp() {
    return (
      <Navbar expand="lg" style={{ backgroundColor: '#1B5448', fontFamily: 'Oxygen' }}>
        <Container>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Navbar.Brand style={{ color: 'white', fontSize: '2.5em', textDecoration: 'none', fontFamily: 'Domine' }}>
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
              {/* <NavDropdown title="User Options" id="basic-nav-dropdown" style={{ color: 'white !important', fontSize: '1.5em' }}>
                <NavDropdown.Item style={{ backgroundColor: '#1B5448', color: 'white' }}>Profile</NavDropdown.Item>
                <NavDropdown.Item style={{ backgroundColor: '#1B5448', color: 'white' }}>My Stuff</NavDropdown.Item>
                <NavDropdown.Item style={{ backgroundColor: '#1B5448', color: 'white' }}>Friends</NavDropdown.Item>
              </NavDropdown> */}
              <Dropdown>
                <Dropdown.Toggle variant="outline" id="dropdown-basic"
                style={{color: 'white', fontFamily: 'Oxygen', fontSize: '1.5em'}}
                >
                  User Options
                </Dropdown.Toggle>
                <Dropdown.Menu 
                style={{backgroundColor: '#1B5448'}}
                >
                  <Dropdown.Item href="#/action-1"
                  style={{color: 'white'}}
                  >Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-2"
                  style={{color: 'white'}}
                  >Your Stuff</Dropdown.Item>
                  <Dropdown.Item href="#/action-3"
                  style={{color: 'white'}}
                  >Friends</Dropdown.Item>
                  <Dropdown.Item onClick={Auth.logout}
                  style={{color: 'white'}}
                  >Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  

