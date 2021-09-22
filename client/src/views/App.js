import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import LandingPage from './components/LandingPage/LandingPage'
import LoginPage from './components/LoginPage/LoginPage'
import RegisterPage from './components/RegisterPage/RegisterPage'

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">sign in</Link>
                        </li>
                        <li>
                            <Link to="/register">sign up</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={RegisterPage} />
                </Switch>
            </div>
        </Router>
    )
}
