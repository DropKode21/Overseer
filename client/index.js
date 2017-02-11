import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import App from './components/App.jsx';
import Signup from './components/Signup.jsx';
import Root from './components/Root.jsx';
import Dashboard from './components/Dashboard.jsx';
import AddProject from './components/AddProject.jsx';
// import Signup from './components/Signup.jsx';
// import Login from './components/Login.jsx';
// import Home from './components/Home.jsx';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={Root}>
            <IndexRoute component={App} />
            <Route path='/signup' component={Signup} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/addproject' component={AddProject} />
            {/*<Route path='/home' component={Home} />*/}
            {/*<Route path='/login' component={Login} />*/}
        </Route>
    </Router>
    , document.getElementById('root'));