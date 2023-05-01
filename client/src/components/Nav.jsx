import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Auth from '../utils/auth.js';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../assets/images/vaycaylogo.png'

import { Link } from 'react-router-dom';

export default function NavbarComp() {
    return (
      <Navbar expand="lg" style={{ backgroundColor: '#1B5448', fontFamily: 'Oxygen' }}>
        <Container>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Navbar.Brand style={{ color: 'white', fontSize: '2.5em', textDecoration: 'none', fontFamily: 'Domine' }}>
            <img src={logo} alt="logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            <span style={{ color: 'white', fontSize: '1em', fontFamily: 'Domine', textAlign: 'center' }}>
              VayCay Nation
            </span>
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
              <Dropdown>
                <Dropdown.Toggle variant="outline" id="dropdown-basic"
                style={{color: 'white', fontFamily: 'Oxygen', fontSize: '1em'}}
                >
                  User Options
                </Dropdown.Toggle>
                <Dropdown.Menu 
                style={{backgroundColor: '#1B5448'}}
                >
                  {/* <Dropdown.Item
                  style={{color: 'white'}} >  */}
                    <div>
                      <Link to='/Profile'
                    style={{textDecoration: 'none', color: 'white', margin: '0.5em'}}>
                        My Profile
                      </Link>
                    </div>
                  {/* </Dropdown.Item> */}

                  {/* <Dropdown.Item */}
                  {/* style={{color: 'white'}}> */}
                    <div>
                      <Link to='/MyStuff'
                      style={{textDecoration: 'none', color: 'white', margin: '0.5em'}}
                      >
                       My Stuff
                      </Link>
                    </div>
                  {/* </Dropdown.Item> */}

                  {/* <Dropdown.Item */}
                  {/* style={{color: 'white'}}> */}
                    <div>
                      <Link to='/Friends'
                      style={{textDecoration: 'none', color:'white', margin: '0.5em'}} 
                      >
                        Friends
                      </Link>
                    </div>
                  {/* </Dropdown.Item> */}

                  <Dropdown.Item onClick={Auth.logout}
                  style={{color: '#F5D2D2'}}>
                    Logout
                  </Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  

