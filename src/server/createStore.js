import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '../client/reducers'
import rootSaga from '../client/sagas/sagas'

export default (req) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducers,applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga)

    return store
}