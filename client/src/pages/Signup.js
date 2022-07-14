import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Form, Button, Alert } from 'react-bootstrap';

import Auth from '../utils/auth';

const Signup = () => {
  const [userFormData, setUserFormData] = useState({ 
    username: '', 
    email: '', 
    password: '' 
  });

  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error, data }] = useMutation(ADD_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserFormData({
      ...userFormData,
      [name]: value 
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    
    <>
    {/* This is needed for the validation functionality above */}
    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
      {/* show alert if server response is bad */}
      <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
        Something went wrong with your signup!
      </Alert>

      <Form.Group className='form'>
        <Form.Label htmlFor='username'>USERNAME</Form.Label>
        <Form.Control
          type='text'
          placeholder='Your username'
          name='username'
          onChange={handleInputChange}
          value={userFormData.username}
          required
        />
        <Form.Control.Feedback type='invalid'>USERNAME IS REQUIRED</Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='EMAIL'>EMAIL</Form.Label>
        <Form.Control
          type='email'
          placeholder='Your email address'
          name='email'
          onChange={handleInputChange}
          value={userFormData.email}
          required
        />
        <Form.Control.Feedback type='invalid'>EMAIL IS REQUIRED</Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='password'>PASSWORD</Form.Label>
        <Form.Control
          type='password'
          placeholder='Your password'
          name='password'
          onChange={handleInputChange}
          value={userFormData.password}
          required
        />
        <Form.Control.Feedback type='invalid'>PASSWORD IS REQUIRED</Form.Control.Feedback>
      </Form.Group>
      <Button
        disabled={!(userFormData.username && userFormData.email && userFormData.password)}
        type='submit'
        variant='success'>
        Submit
      </Button>
    </Form>
  </>
);
};

export default Signup;
