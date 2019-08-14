import { takeEvery, put, all } from 'redux-saga/effects'

var category = [];

function isPresent(categoryName){
    for(let i=0; i<category.length; i++){
        if(categoryName === category[i])
            return true;
    }
    return  false
}

function fillCategory(wholeData){
    for(let i=0; i<wholeData.length; i++){
        if(isPresent(wholeData[i].category))
            continue
        category.push(wholeData[i].category)
    }
}
function* fetchData(){
    const wholeData = yield fetch('https://api.myjson.com/bins/kjl6h')
    .then(response => response.json()); 
    console.log(wholeData)
    fillCategory(wholeData)
    console.log(category)
    yield put({ type: "RECEIVED_DATA", payload: [wholeData,category] });
}

function* fetchActions() {
    yield takeEvery('GET_DATA', fetchData);
}

export default function* rootSaga() {
    yield all([fetchActions()])
}