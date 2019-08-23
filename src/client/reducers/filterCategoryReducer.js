export default (state = [null], action) => {
    switch (action.type) {
        case 'CATEGORY_FILTER_ON':{
            return [action.payload,...state]
        }
        case 'CATEGORY_FILTER_OFF':{
            return [
                ...state
            ].filter((categoryName)=>categoryName!=action.payload)
        }
        default : return state
    }
}