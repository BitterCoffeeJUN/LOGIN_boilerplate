import React, {useState} from 'react'

function LoginPage() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const onEmailHandler = e => {
        setEmail(e.currentTarget.value)
    }
    const onPasswordHandler = e => {
        setPassword(e.currentTarget.value)
    }

    const onSubmitHandler = () => {}

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

export default LoginPage
