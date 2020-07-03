import React, { Component } from 'react';
import {
  FormText,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from 'react-bootstrap';

export default class sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      confirmationCode: '',
      newUser: null,
    };
  }
  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
  };

  handleConfirmationSubmit = async (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className='Signup'>
        {this.state.newUser === null
          ? this.renderForm()
          : this.renderConfirmationForm()}
      </div>
    );
  }

  renderConfirmationForm() {
    return (
      <div className='Home'>
        <div className='col-md-4'>
          <form onSubmit={this.handleConfirmationSubmit}>
            <FormGroup controlId='confirmationCode'>
              <FormLabel>Confirmation Code</FormLabel>
              <FormControl
                autoFocus
                type='tel'
                value={this.state.confirmationCode}
                onChange={this.handleChange}
              />
              <FormText>Please check your email for the code.</FormText>
            </FormGroup>
            <Button type='submit'>Verify</Button>
          </form>
        </div>
      </div>
    );
  }

  renderForm() {
    return (
      <div className='Home'>
        <div className='col-md-4'>
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId='email'>
              <FormLabel>Email</FormLabel>
              <FormControl
                autoFocus
                type='email'
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId='password'>
              <FormLabel>Password</FormLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type='password'
              />
            </FormGroup>
            <FormGroup controlId='confirmPassword'>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                type='password'
              />
            </FormGroup>
            <Button type='submit'>Signup</Button>
          </form>
        </div>
      </div>
    );
  }
}
