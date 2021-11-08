import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {registerUser} from '../../../_actions/user_action'

import {Container, Grid, Box} from '@mui/material'
import './RegisterPage.css'

function RegisterPage(props) {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch()

    const onNameHandler = e => {
        setName(e.currentTarget.value)
    }
    const onEmailHandler = e => {
        setEmail(e.currentTarget.value)
    }
    const onPasswordHandler = e => {
        setPassword(e.currentTarget.value)
    }
    const onConfirmPasswordHandler = e => {
        setConfirmPassword(e.currentTarget.value)
    }

    const onSubmitHandler = e => {
        e.preventDefault()

        if (Password !== ConfirmPassword) {
            return alert('비밀번호가 일치하지 않습니다.')
        }

        let body = {
            name: Name,
            email: Email,
            password: Password,
        }

        dispatch(registerUser(body)).then(res => {
            if (res.payload.success) {
                props.history.push('/login')
            } else {
                alert('회원가입 실패')
            }
        })
    }

    return (
        <Box sx={{height: '100vh'}}>
            <Grid container spacing={2} className="Grid">
                <Grid item xs={6}>
                    <h1>Welcome Page</h1>
                </Grid>
                <Grid item xs={6}>
                    <form onSubmit={onSubmitHandler}>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="name" value={Name} onChange={onNameHandler} />

                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="email" value={Email} onChange={onEmailHandler} />

                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="password" value={Password} onChange={onPasswordHandler} />

                        <label htmlFor="">ConfirmPassword</label>
                        <input type="password" placeholder="confirm-password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

                        <button>sign up</button>
                    </form>
                </Grid>
            </Grid>
        </Box>
    )
}

export default withRouter(RegisterPage)
