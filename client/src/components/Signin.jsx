import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
// import Auth from '../utils/auth.js'



function Signin() {
  return (
    <Form style={{fontFamily: 'Oxygen'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button
      style={{backgroundColor: '#1B5448', marginRight: '1em' }}
       type="submit">
        Sign in!
      </Button>
      <Button variant="secondary" type="submit">
        Nevermind
      </Button>
      <Link to='/Signup'>
        <p>Don't have an account yet? Sign up!</p>
      </Link>
    </Form>
  );
}

export default Signin;