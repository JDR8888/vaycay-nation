import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Signin from '../components/Signin';
import trees from '../assets/images/forest.png';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

export default function HomePage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100"
        style={{ fontFamily: 'Oxygen', padding: '1em' }}
      >
        <div className="row justify-content-center p2">
          <div className="col-md-6 mb-5 mb-md-0 text-right pr-md-5">
            <h1
              className="display-3 text-right"
              style={{ fontFamily: 'Domine' }}
            >
              Nature is waiting
            </h1>
            <h2 className="font-weight-light">
              Browse parks and attractions through all 50 states and find your
              next destination
            </h2>
            <h2 className="font-weight-light">
              Invite your friends, review parks, and more!
            </h2>
            <Button
              size="lg"
              style={{ backgroundColor: '#1B5448', marginTop: '2rem' }}
              onClick={handleShow}
            >
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

        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Please Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Signin />
          </Modal.Body>
        </Modal>
      </div>
      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.nps.gov/common/uploads/structured_data/3C8397D6-1DD8-B71B-0BEF4C54462A1EB3.jpg"
            alt="First slide"
            style={{ height: '600px' }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.nps.gov/common/uploads/structured_data/3C83A128-1DD8-B71B-0B02DED286AFD8C6.jpg"
            alt="Second slide"
            style={{ height: '600px' }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.nps.gov/common/uploads/structured_data/3C83A2B0-1DD8-B71B-0B4589220F4D60D9.jpg"
            alt="Third slide"
            style={{ height: '600px' }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
