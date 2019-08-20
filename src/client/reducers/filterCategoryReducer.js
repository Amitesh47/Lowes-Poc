export default (state = [], action) => {
    switch (action.type) {
        case 'CATEGORY_FILTER_ON':{
            return [...state,action.payload]
        }
        case 'CATEGORY_FILTER_OFF':{
            return [
                ...state
            ].filter((categoryName)=>categoryName!=action.payload)
        }
        default : return state
    }
}