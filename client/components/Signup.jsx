import React, { Component } from 'react';
import Dashboard from './Dashboard.jsx';

class Signup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Sign up</h1>
                <form onSubmit={this.props.handleSubmit}>
                <label>
                First Name:
                    <input name='firstName' type='text' />
                </label>
                <br/>
                <label>
                Last Name:
                    <input name='lastName' type='text' />
                </label>
                <br/>
                <label>
                Email:
                    <input name='email' type='email' />
                </label>
                <br/>
                <label>
                Username:
                    <input name='username' type='text' />
                </label>
                <br/>
                <label>
                Password:
                    <input name='password' type='password' />
                </label>
                <br/>
                <button type='Submit'>Submit Form</button>
                </form>
            </div>
        )
    }
}

export default Signup;