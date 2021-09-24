import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './reset.css'
import './App.css'

import LandingPage from './components/LandingPage/LandingPage'
import LoginPage from './components/LoginPage/LoginPage'
import NavBar from './components/NavBar/NavBar'
import RegisterPage from './components/RegisterPage/RegisterPage'
import Auth from '../hoc/auth'

export default function App() {
    return (
        <div className="body">
            <header className="header">
                <NavBar />
            </header>
            <main className="main">
                <Switch>
                    <Route exact path="/" component={Auth(LandingPage, null)} />
                    <Route exact path="/login" component={Auth(LoginPage, false)} />
                    <Route exact path="/register" component={Auth(RegisterPage, false)} />
                </Switch>
            </main>
            <footer className="footer"></footer>
        </div>
    )
}
