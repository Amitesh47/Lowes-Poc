import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import fetchDataReducer from'./fetchDataReducer'

export default combineReducers({
    count: cartReducer,
    wholeData: fetchDataReducer,
})