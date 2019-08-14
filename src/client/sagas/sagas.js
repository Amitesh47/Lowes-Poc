import { takeEvery, put, all } from 'redux-saga/effects'

function* fetchData(){
    const json = yield fetch('https://api.myjson.com/bins/kjl6h')
    .then(response => response.json()); 
    console.log(json)
    yield put({ type: "RECEIVED_DATA", payload: json, });
}

function* fetchActions() {
    yield takeEvery('GET_DATA', fetchData);
}

export default function* rootSaga() {
    yield all([fetchActions()])
}