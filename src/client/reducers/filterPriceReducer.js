export default (state = [], action) => {
    switch (action.type) {
        case 'PRICE_FILTER_ON':{
            return [...state,action.payload]
        }
        case 'PRICE_FILTER_OFF':{
            return [
                ...state
            ].filter((price)=>price!=action.payload)
        }
        default : return state
    }
}