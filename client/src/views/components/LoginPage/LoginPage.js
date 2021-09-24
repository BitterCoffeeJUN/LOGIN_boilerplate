import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {loginUser} from '../../../_actions/user_action'
import {withRouter} from 'react-router-dom'

import './LoginPage.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'

function LoginPage(props) {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const dispatch = useDispatch()

    const onEmailHandler = e => {
        setEmail(e.currentTarget.value)
    }
    const onPasswordHandler = e => {
        setPassword(e.currentTarget.value)
    }

    const onSubmitHandler = e => {
        e.preventDefault()

        let body = {
            email: Email,
            password: Password,
        }

        dispatch(loginUser(body)).then(res => {
            console.log(res)
            if (res.payload.loginSuccess) {
                props.history.push('/')
            } else {
                alert('로그인 실패')
            }
        })
    }

    return (
        <div className="Main-Login">
            <div className="Log-left">Welcom Page</div>
            <div className="Log-right">
                <h2>Sign in</h2>
                <form onSubmit={onSubmitHandler}>
                    <TextField
                        className="TextField"
                        id="standard-basic"
                        label="Email"
                        color="secondary"
                        variant="standard"
                        fullWidth
                        value={Email}
                        onChange={onEmailHandler}
                    />
                    <TextField
                        className="TextField"
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        // autoComplete="current-password"
                        color="secondary"
                        variant="standard"
                        fullWidth
                        value={Password}
                        onChange={onPasswordHandler}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        endIcon={<SendIcon />}
                    >
                        LOGIN
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(LoginPage)
