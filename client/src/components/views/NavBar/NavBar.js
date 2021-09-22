import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import {withRouter} from 'react-router-dom'

import axios from 'axios'
import {useSelector} from 'react-redux'

function NavBar(props) {
    const user = useSelector(state => state.user)

    const LogoutHandler = () => {
        axios.get('/api/users/logout').then(res => {
            if (res.data.success) {
                props.history.push('/login')
            } else {
                alert('faild to logout')
            }
        })
    }

    if (user.userData && !user.userData.isAuth) {
        return (
            <nav>
                <div className="left_nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    } else {
        return (
            <nav>
                <div className="left_nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
                <div className="right_nav">
                    <button onClick={LogoutHandler}>Logout</button>
                </div>
            </nav>
        )
    }
}

export default withRouter(NavBar)
