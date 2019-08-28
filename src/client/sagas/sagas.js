import { takeEvery, put, all } from 'redux-saga/effects'
import {category, fillCategory} from './helperFunctions'

function* fetchData(){
    const wholeData = yield fetch('https://api.myjson.com/bins/kjl6h')
    .then(response => response.json()); 
    
    fillCategory(wholeData)
    
    yield put({ type: "RECEIVED_DATA", payload: [wholeData,category] });
}

function* fetchActions() {
    yield takeEvery('GET_DATA', fetchData);
}


export default function* rootSaga() {
    yield all([fetchActions()])
}