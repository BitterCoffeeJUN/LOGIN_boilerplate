import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {loginUser} from '../../../_actions/user_actions'
import {withRouter} from 'react-router-dom'

function LoginPage(props) {
    const dispatch = useDispatch()
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

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
            if (res.payload.loginSuccess) {
                props.history.push('/')
            } else {
                alert('Error')
            }
        })
    }

    return (
        <div>
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100vh',
                }}
                onSubmit={onSubmitHandler}
            >
                <label htmlFor="">Email</label>
                <input type="text" value={Email} placeholder="email" onChange={onEmailHandler} />
                <label htmlFor="">Password</label>
                <input
                    type="password"
                    value={Password}
                    placeholder="password"
                    onChange={onPasswordHandler}
                />

                <br />
                <button>Login</button>
            </form>
        </div>
    )
}

export default withRouter(LoginPage)
