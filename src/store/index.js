import { createStore, applyMiddleware } from "redux";
import {Provider} from 'react-redux'
import fetchJson from "./reducer/fetchJson";
import logger from "redux-logger";
//import thunk from "redux-thunk";
import React from 'react';
import createSagaMiddleware from 'redux-saga'
import {watchLoadData} from './saga'


const sagaMiddlewere = createSagaMiddleware()
const store = createStore(fetchJson,applyMiddleware(logger,sagaMiddlewere))
sagaMiddlewere.run(watchLoadData )


export default function ProviderFunction(props) {
    return(
        <Provider store={store}>  
            {props.children}
        </Provider>
    )
};
