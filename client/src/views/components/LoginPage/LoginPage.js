import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {loginUser} from '../../../_actions/user_action'
import {withRouter} from 'react-router-dom'

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
        <div>
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
                onSubmit={onSubmitHandler}
            >
                <label htmlFor="">Email</label>
                <input type="text" placeholder="email" value={Email} onChange={onEmailHandler} />
                <label htmlFor="">Password</label>
                <input
                    type="password"
                    placeholder="password"
                    value={Password}
                    onChange={onPasswordHandler}
                />

                <button>login</button>
            </form>
        </div>
    )
}

export default withRouter(LoginPage)
