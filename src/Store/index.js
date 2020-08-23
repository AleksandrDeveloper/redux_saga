import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {sagaWatcher} from './Saga'
import createSagaMiddlewere from 'redux-saga'

const saga = createSagaMiddlewere()


export default createStore(reducer,compose(
    applyMiddleware(
        logger,
        saga
        ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
))

saga.run(sagaWatcher)