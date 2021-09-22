import React from 'react'
import {LOGIN_USER} from '../_actions/types'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return state

        default:
            return state
    }
}
