import { combineReducers } from 'redux'
import cardReducer from './cardReducer'
import fetchDataReducer from'./fetchDataReducer'

export default combineReducers({
    count: cardReducer,
    wholeData: fetchDataReducer,
})