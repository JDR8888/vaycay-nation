import { useState, useEffect } from 'react';
import { states } from '../utils/states';
// import { useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useLazyQuery } from '@apollo/client';
import { GET_PARKS_BY_STATE } from '../utils/queries';
import ParkCard from '../components/ParkCard';

export default function SearchResults() {
//   const history = useHistory();
  const [selectedState, setSelectedState] = useState('');
  const [parkData, setParkData] = useState([]);

  const handleChange = (event) => {
    setSelectedState(event.target.value);
  };

  

  console.log(parkData)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedState)
    // const selectedStateObject = states.find(state => state.code === selectedState);
    // console.log(selectedStateObject.name);
    getParkData();
  };

  const [getParkData, { loading, error, data }] = useLazyQuery(
    GET_PARKS_BY_STATE,
    {
      variables: {
        state: selectedState,
      },
    }
  );

  useEffect(() => {
    if (data) {
      setParkData(data.getParksByState);
    }
  }, [data]);



  return (
    <>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <Form onSubmit={handleSubmit} style={{ width: '50%' }}>
        <Form.Group controlId="stateSelect">
          <Form.Select aria-label="Select state" value={selectedState} onChange={handleChange}>
            <option value="">Select a state</option>
            {states.map((state) => (
              <option key={state.code} value={state.code} name={state.name}>
                {state.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button  type="submit" style={{ width: '100%', backgroundColor: '#1B5448' }}>
          Search
        </Button>
      </Form>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
  {data && parkData.map((park) => (
    <div key={park.id} style={{ flex: '0 0 calc(25% - 1rem)', margin: '0.5rem' }}>
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
