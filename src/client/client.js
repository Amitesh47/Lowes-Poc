// Start point of client side
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import createSagaMiddleware from 'redux-saga'
import Routes from './Routes'
import reducers from './reducers'
import rootSaga from './sagas/sagas'


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers,applyMiddleware(sagaMiddleware));
 sagaMiddleware.run(rootSaga)

//Hydration means replacing something in an already rendered file from the server.
//Since the server side html doc is already rendered , the client.js boots up the client side
//by adding the various events and other js stuff. For this purpose 'hydrate' is used
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);

