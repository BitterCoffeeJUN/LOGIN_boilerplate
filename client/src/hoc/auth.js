import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {authUser} from '../_actions/user_actions'

function auth(SpecificComponent, option, adminRoute = null) {
    // null 아무나 출입 가능 페이지
    // true 로그인한 유저만 출입 가능
    // false 로그인한 유저는 출입 불가

    function AuthenticationChedk(props) {
        const dispatch = useDispatch()
        useEffect(() => {
            dispatch(authUser()).then(res => {
                if (!res.payload.isAuth) {
                    if (option) {
                        props.history.push('/login')
                    }
                } else {
                    if (adminRoute && !res.payload.isAdmin) {
                        props.history.push('/')
                    } else {
                        if (option === false) {
                            props.history.push('/')
                        }
                    }
                }
            })
        }, [])
        return <SpecificComponent />
    }
    return AuthenticationChedk
}

export default auth
