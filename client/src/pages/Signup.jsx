import { useState } from 'react';
import { Form, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ADD_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'
import icon4 from '../assets/images/icon4.png'
import icon5 from '../assets/images/icon5.png'
import icon6 from '../assets/images/icon6.png'
import icon7 from '../assets/images/icon7.png'
import icon8 from '../assets/images/icon8.png'
import icon9 from '../assets/images/icon9.png'
import icon10 from '../assets/images/icon10.png'
import icon11 from '../assets/images/icon11.png'
import icon12 from '../assets/images/icon12.png'


const userIcons = [
    {name: icon1, path: '../assets/images/icon1.png' },
    {name: icon2, path: '../assets/images/icon2.png' },
    {name: icon3, path: '../assets/images/icon3.png' },
    {name: icon4, path: '../assets/images/icon4.png' },
    {name: icon5, path: '../assets/images/icon5.png' },
    {name: icon6, path: '../assets/images/icon6.png' },
    {name: icon7, path: '../assets/images/icon7.png' },
    {name: icon8, path: '../assets/images/icon8.png' },
    {name: icon9, path: '../assets/images/icon9.png' },
    {name: icon10, path: '../assets/images/icon10.png' },
    {name: icon11, path: '../assets/images/icon11.png' },
    {name: icon12, path: '../assets/images/icon12.png' }
]


export default function Signup() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(userIcons[0].name);
  
  const [addUser, { loading, error }] = useMutation(ADD_USER, {
    onCompleted: (data) => {
      console.log('User added:', data.addUser);
    },
    onError: (error) => {
      console.error('Error adding user:', error);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser({
      variables: { name, username, email, password, avatar },
    });
  };

  return (
    <>
  <h1 style={{textAlign: 'center'}}>Sign Up</h1>
  <div style={{ maxWidth: '500px', margin: '0 auto' }}>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(event) => setName(event.target.value)} />
      </Form.Group>

      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={(event) => setUsername(event.target.value)} />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </Form.Group>

      <Form.Group controlId="avatar">
        <Form.Label>Avatar</Form.Label>
        <Dropdown >
          <Dropdown.Toggle variant="outline-secondary" id="dropdown-avatar" style={{width: '50%', margin: '0.5em'}}>
            <img src={avatar} alt="Avatar" style={{ height: '2em', marginRight: '0.5em' }} />
            Choose avatar
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {userIcons.map((option, index) => (
              <Dropdown.Item key={index} onClick={() => setAvatar(option.name)}>
                <img src={option.name} alt="Avatar" style={{ height: '2em', marginRight: '0.5em' }} />
                icon {' '}{index}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>

      <div style={{ display: 'flex' }}>
    <Button type="submit" disabled={loading} style={{ margin: '0.5em', width: '50%', backgroundColor: '#1B5448' }}>
      {loading ? 'Submitting...' : 'Submit'}
    </Button>

    <Link to="/">
      <Button variant="secondary" style={{ margin: '0.5em', width: '100%' }}>
        Cancel
      </Button>
    </Link>
  </div>

      {error && <p style={{ color: 'red' }}>Error submitting form. Please try again.</p>}
    </Form>
  </div>
</>

  );
}
