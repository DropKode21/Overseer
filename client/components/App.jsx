import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

class App extends Component {
    // test without props later
  construtor(props) {

  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Overseer</h1>
        <form onSubmit={this.props.handleLogin}>
          <label>
                        Username:
                        <input name="username" type="text" />
          </label>
          <label>
                        Password:
                        <input name="password" type="password" />
          </label>
          <button type="Submit">Log In</button>
        </form>
        <button><Link to="Signup" style={{ textDecoration: 'none' }}>Sign Up</Link></button>
      </div>
    );
  }
}

export default App;

