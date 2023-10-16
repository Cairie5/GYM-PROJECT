import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const initialValues = {
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = 'Username is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 4) {
      errors.password = 'Password must be more than 4 characters';
    } else if (values.password.length > 10) {
      errors.password = 'Password cannot exceed more than 10 characters';
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Those passwords did not match. Try again.';
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    try {
      const response = await axios.post('http://localhost:5555/Signup', {
        name: formValues.username,
        email: formValues.email,
        phone_number: formValues.phoneNumber,
        password: formValues.password,
      });
      console.log('Form submission successful', response.data);
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log('Form Values', formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  return (
    <>
      <div className="bgImg" />
      <div className="container">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          console.log('Entered Details', formValues)
        )}

        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="ui divider" />
          <div className="ui form">
            <div className="field">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Choose a username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.username}</p>
            <div className="field">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="field">
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter phone number"
                value={formValues.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.phoneNumber}</p>
            <div className="field">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Choose a password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
            <div className="field">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formValues.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.confirmPassword}</p>
          </div>
          <button className="fluid ui button blue" type="submit">
            Submit
          </button>
        </form>
        <div className="text">
          <span>Already have an account?</span>
        </div>
      </div>
    </>
  );
}

export default Signup;
