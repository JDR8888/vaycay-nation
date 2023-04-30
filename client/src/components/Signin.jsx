import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth.js'
import { LOGIN_USER } from '../utils/mutations.js';



function Signin() {

  const [formState, setFormState] = useState({ email: '', password: '' });
  //need to verify the mutation actually set up
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };


  return (
    <Form style={{fontFamily: 'Oxygen'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChange} type="email" placeholder="Enter email" name='email' />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={handleChange} placeholder="Password" name='password' />
      </Form.Group>
      <Button
      style={{backgroundColor: '#1B5448', marginRight: '1em' }}
       type="submit" onClick={handleFormSubmit}>
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