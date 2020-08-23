import { takeEvery } from "redux-saga/effects";

import {LOAD_DATA } from "./actions";
import { put, call } from "redux-saga/effects";
import {setLoadData} from './actions/index';

function d (){
    return fetch('https://jsonplaceholder.typicode.com/users/')
    .then(res=>res.json())
}

function* workerLoadData(){
    const data =  yield call(d)

    yield put(setLoadData(data))
}

export function* watchLoadData(){
    yield takeEvery(LOAD_DATA,workerLoadData)
} 