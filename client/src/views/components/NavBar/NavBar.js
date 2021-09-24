import axios from 'axios'
import React from 'react'
import {useSelector} from 'react-redux'
// import {Link} from 'react-router-dom'
import Link from '@mui/material/Link'
import {withRouter} from 'react-router-dom'

import './NavBar.css'
import Button from '@mui/material/Button'

function NavBar(props) {
    const user = useSelector(state => state.user)

    const logoutHandler = e => {
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
                        <Button className="Btn" variant="contained" href="/" color="secondary">
                            HOME
                        </Button>
                    </li>
                    <li>
                        <span>
                            <Button
                                className="Btn"
                                variant="outlined"
                                href="/login"
                                color="secondary"
                            >
                                sign in
                            </Button>
                        </span>
                        <span>
                            <Button
                                className="Btn"
                                variant="outlined"
                                href="/register"
                                color="secondary"
                            >
                                sign up
                            </Button>
                        </span>
                    </li>
                </ul>
            </nav>
        )
    } else {
        return (
            <ul>
                <li>
                    <Button className="Btn" variant="contained" href="/" color="secondary">
                        HOME
                    </Button>
                </li>
                <li>
                    <Button
                        className="Btn"
                        onClick={logoutHandler}
                        variant="outlined"
                        color="secondary"
                    >
                        LOGOUT
                    </Button>
                </li>
            </ul>
        )
    }
}

export default withRouter(NavBar)
