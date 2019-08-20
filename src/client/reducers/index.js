import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import fetchDataReducer from'./fetchDataReducer'
import filterCategoryReducer from'./filterCategoryReducer'
import filterRatingReducer from'./filterRatingReducer'


export default combineReducers({
    count: cartReducer,
    wholeData: fetchDataReducer,
    categoryFilter: filterCategoryReducer,
    ratingFilter: filterRatingReducer,
})