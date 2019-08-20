import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import fetchDataReducer from'./fetchDataReducer'
import filterCategoryReducer from'./filterCategoryReducer'

export default combineReducers({
    count: cartReducer,
    wholeData: fetchDataReducer,
    categoryFilter: filterCategoryReducer
})