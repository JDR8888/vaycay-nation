import { useState } from 'react';
import { states } from '../utils/states';
// import { useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

export default function SearchResults() {
//   const history = useHistory();
  const [selectedState, setSelectedState] = useState('');

  const handleChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // history.push(`/search/${selectedState}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <Form onSubmit={handleSubmit} style={{ width: '50%' }}>
        <Form.Group controlId="stateSelect">
          <Form.Select aria-label="Select state" value={selectedState} onChange={handleChange}>
            <option value="">Select a state</option>
            {states.map((state) => (
              <option key={state.code} value={state.code}>
                {state.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" style={{ width: '100%' }}>
          Search
        </Button>
      </Form>
    </div>
  );
}
