import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Signin from '../components/Signin';
import trees from '../assets/images/forest.png'

export default function HomePage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100"
    style={{fontFamily: 'Oxygen', padding: '1em'}}
    >
      <div className="row justify-content-center p2">
        <div className="col-md-6 mb-5 mb-md-0 text-right pr-md-5">
          <h1 className="display-3 text-right" style={{fontFamily: 'Domine'}}>Nature is waiting</h1>
          <h2 className="font-weight-light">Browse parks and attractions through all 50 states and find your next destination</h2>
          <h2 className="font-weight-light">Invite your friends, review parks, and more!</h2>
          <Button 
            size='lg'
            style={{ backgroundColor: '#1B5448', marginTop: '2rem' }}
            onClick={handleShow}>
            Sign In Here
          </Button>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img 
            src={trees}
            alt="Some image"
            className="img-fluid my-auto"
            style={{ maxHeight: '60vh' }}
          />
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Please Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signin />
        </Modal.Body>
      </Modal>
    </div>
  );
}
