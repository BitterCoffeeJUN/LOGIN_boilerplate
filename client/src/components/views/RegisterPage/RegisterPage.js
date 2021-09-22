import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {registerUser} from '../../../_actions/user_actions'

function RegisterPage(props) {
    const dispatch = useDispatch()

    const [Email, setEmail] = useState('')
    const [Name, setName] = useState('')
    const [Password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')

    const onEmailHandler = e => {
        setEmail(e.currentTarget.value)
    }
    const onNameHandler = e => {
        setName(e.currentTarget.value)
    }
    const onPasswordHandler = e => {
        setPassword(e.currentTarget.value)
    }
    const onConfirmPasswordHandler = e => {
        setConfirmPassword(e.currentTarget.value)
    }

    const onSubmitHandler = e => {
        e.preventDefault()

        if (Password !== ConfirmPassword) return alert('비밀번호가 다릅니다')

        let body = {
            email: Email,
            name: Name,
            password: Password,
        }

        dispatch(registerUser(body)).then(res => {
            if (res.payload.success) {
                props.history.push('/')
            } else {
                alert('Faild to sign up')
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

                <label htmlFor="">Name</label>
                <input type="text" value={Name} placeholder="email" onChange={onNameHandler} />

                <label htmlFor="">Password</label>
                <input
                    type="password"
                    value={Password}
                    placeholder="password"
                    onChange={onPasswordHandler}
                />

                <label htmlFor="">ConfirmPassword</label>
                <input
                    type="password"
                    value={ConfirmPassword}
                    placeholder="ConfirmPassword"
                    onChange={onConfirmPasswordHandler}
                />

                <br />
                <button>Register</button>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage)
