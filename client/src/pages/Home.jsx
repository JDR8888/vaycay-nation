import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Signin from '../components/Signin';
import trees from '../assets/images/forest.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/css/carousel.css';

export default function HomePage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <div
        id="carouselExample"
        class="carousel slide"
        style={{ marginTop: '2em' }}
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://www.nps.gov/common/uploads/structured_data/3C83A128-1DD8-B71B-0B02DED286AFD8C6.jpg"
              class="d-block w-100"
              alt="..."
              style={{
                width: '200px',
                height: '500px',
                objectFit: 'cover',
                // borderRadius: '100px',
              }}
            />
            <div class="caption">
              <h5>What a veiw!</h5>
              <p>Appalachian National Scenic Trail</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://www.nps.gov/common/uploads/structured_data/3C80E7D5-1DD8-B71B-0B44F2F58F98099D.jpg"
              class="d-block w-100"
              alt="..."
              style={{
                width: '200px',
                height: '500px',
                objectFit: 'cover',
                borderRadius: '100px',
              }}
            />
            <div class="caption">
              <h5>What a veiw!</h5>
              <p>Appalachian National Scenic Trail</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://www.nps.gov/common/uploads/structured_data/87E985D9-BF92-9DC3-74B91467FBA15010.jpg"
              class="d-block w-100"
              alt="..."
              style={{
                width: '200px',
                height: '500px',
                objectFit: 'cover',
                borderRadius: '100px',
              }}
            />
            <div class="caption">
              <h5>What a veiw!</h5>
              <p>Appalachian National Scenic Trail</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}
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
      <div
        id="carouselExample"
        className="carousel slide"
        style={{ margin: '2em' }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.nps.gov/common/uploads/structured_data/3C83A128-1DD8-B71B-0B02DED286AFD8C6.jpg"
              className="d-block w-100"
              alt="..."
              style={{
                width: '200px',
                height: '500px',
                objectFit: 'cover',
                borderRadius: '100px',
              }}
            />
            <div className="caption">
              <h5>What a veiw!</h5>
              <p>Appalachian National Scenic Trail</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.nps.gov/common/uploads/structured_data/3C80E7D5-1DD8-B71B-0B44F2F58F98099D.jpg"
              class="d-block w-100"
              alt="..."
              style={{
                width: '200px',
                height: '500px',
                objectFit: 'cover',
                borderRadius: '100px',
              }}
            />
            <div className="caption">
              <h5>What a veiw!</h5>
              <p>Appalachian National Scenic Trail</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.nps.gov/common/uploads/structured_data/87E985D9-BF92-9DC3-74B91467FBA15010.jpg"
              class="d-block w-100"
              alt="..."
              style={{
                width: '200px',
                height: '500px',
                objectFit: 'cover',
                borderRadius: '100px',
              }}
            />
            <div className="caption">
              <h5>What a veiw!</h5>
              <p>Appalachian National Scenic Trail</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
