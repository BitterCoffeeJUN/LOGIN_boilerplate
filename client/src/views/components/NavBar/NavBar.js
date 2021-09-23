import axios from 'axios'
import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

import './NavBar.css'

function NavBar(props) {
    const user = useSelector(state => state.user)

    const logoutHandler = () => {
        axios.get('/api/users/logout').then(res => {
            if (res.data.success) {
                props.history.push('/login')
            } else {
                alert('로그아웃에 실패하였습니다.')
            }
        })
    }

    if (user.userData && !user.userData.isAuth) {
        return (
            <nav>
                <ul>
                    <li>
                        <Link className="link" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/login">
                            sign in
                        </Link>
                        <Link className="link" to="/register">
                            sign up
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    } else {
        return (
            <ul>
                <li>
                    <Link className="link" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <button onClick={logoutHandler}>logout</button>
                </li>
            </ul>
        )
    }
}

export default withRouter(NavBar)
