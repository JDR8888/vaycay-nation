import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLazyQuery } from '@apollo/client';
import { GET_PARKS_BY_NAME } from '../utils/queries';
import ParkCard from '../components/ParkCard';

export default function SearchByParkName() {
  const [searchText, setSearchText] = useState('');
  const [parkData, setParkData] = useState([]);

  const handleChange = (event) => {
    setSearchText(event.target.value);
    console.log(searchText)
  };

  // console.log(parkData);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(searchText);
    getParkData();
  };

  console.log(parkData);

  const [getParkData, { loading, error, data }] = useLazyQuery(
    GET_PARKS_BY_NAME,
    {
      variables: {
        name: searchText,
      },
    }
  );

  useEffect(() => {
    if (data) {
      setParkData(data.getParksByName);
    }
  }, [data]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
        }}
      >
        <Form onSubmit={handleSubmit} style={{ width: '50%' }}>
          <Form.Group controlId="searchText">
            <Form.Control
              type="text"
              placeholder="Enter park name"
              value={searchText}
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit" style={{ width: '100%', backgroundColor: '#1B5448' }}>
            Search
          </Button>
        </Form>
      </div>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {data &&
          parkData.map((park) => (
            <div
              key={park.id}
              style={{ flex: '0 0 calc(20% - 1rem)', margin: '0.5rem' }}
            >
              <ParkCard
                parkName={park.fullName}
                description={park.description}
                parkId={park.id}
                images={park.images}
                latitude={park.latitude}
                longitude={park.longitude}
                hours={park.operatingHours.description}
                weatherInfo={park.weatherInfo}
              />
            </div>
          ))}
      </div>
    </>
  );
}
