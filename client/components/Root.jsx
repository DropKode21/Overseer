import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import App from './App.jsx';

class Root extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      userInformation: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    console.log('fetching');

    fetch('/', {
      method: 'post',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then((res) => {
      if (res.status === 200) {
        browserHistory.push('/dashboard');
      } else {
        alert('Please enter valid fields.');
        browserHistory.push('/');
      }
    }).catch((res) => {
      alert('Please enter valid fields.');
      browserHistory.push('/');
    });

    e.preventDefault();
  }

  handleSubmit(e) {
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const email = e.target.elements.email.value;
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    this.setState({ firstName, lastName, email, username, password }, () => {
      fetch('/signup', {
        method: 'post',
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          username,
          password,
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      }).then((res) => {
        if (res.status === 200) {
          browserHistory.push('/dashboard');
        } else {
          alert('Please enter valid fields.');
          browserHistory.push('/signup');
        }
      }).catch((res) => {
        alert('Please enter valid fields.');
        browserHistory.push('/signup');
      });
    });
    e.preventDefault();
  }

  render() {
    const theProps = React.Children.map(this.props.children, child => React.cloneElement(child, { handleSubmit: this.handleSubmit, handleLogin: this.handleLogin }));
    return (
      <div>
        {theProps}
      </div>
    );
  }
}

export default Root;
