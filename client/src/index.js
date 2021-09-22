import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/App'

import {BrowserRouter} from 'react-router-dom'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import Reducer from './_reducers/index'
import ReduxThunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'

const store = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

ReactDOM.render(
    <Provider
        store={store(
            Reducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        )}
    >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
)
