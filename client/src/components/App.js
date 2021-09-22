import React, {Suspense} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LandingPage from './views/LandingPage/LandingPage.js'
import LoginPage from './views/LoginPage/LoginPage.js'
import NavBar from './views/NavBar/NavBar.js'
import RegisterPage from './views/RegisterPage/RegisterPage.js'
import Auth from '../hoc/auth'

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Auth(LandingPage, null)} />
                    <Route exact path="/login" component={Auth(LoginPage, false)} />
                    <Route exact path="/register" component={Auth(RegisterPage, false)} />
                </Switch>
            </Router>
        </Suspense>
    )
}

export default App
