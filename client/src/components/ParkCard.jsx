import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';



export default function ParkCard(props) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const { parkName, description, parkId, images, latitude, longitude, hours, weatherInfo } = props;

  return (
    <>
      <Card>
        <Card.Img variant="top" src={images[0].url} />
        <Card.Body>
          <Card.Title>{parkName}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" onClick={handleShowModal}>See More!</Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{parkName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: '0 0 50%', paddingRight: '1rem' }}>
              <img src={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/url-https%3A%2F%2Fdocs.mapbox.com%2Fapi%2Fimg%2Fcustom-marker.png(${longitude},${latitude})/${longitude},${latitude},5/500x500?access_token=pk.eyJ1IjoiamRyODg4OCIsImEiOiJjbGVmdTg1bXowYmxmM3ludjJscjNlcWk5In0.T8Nn1lRMy558npSqRLS71w`} alt="Park Location" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div style={{ flex: '0 0 50%', paddingLeft: '1rem' }}>
              <h3>About {parkName}:</h3>
              <p>{description}</p>
              <h3>Typical Weather:</h3>
              <p>{weatherInfo}</p>
              <h3>Normal Operating Hours:</h3>
              <p>{hours}</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {images.map((image, index) => (
              <img key={index} src={image.url} alt={`Park ${parkId} Image ${index + 1}`} style={{ maxWidth: '25%', margin: '0.5rem' }} />
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          <Button variant="primary">Leave a Review</Button>
          <Button variant="primary">Add to Wishlist</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
