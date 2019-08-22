export default (state = [], action) => {
    switch (action.type) {
        case 'PRICE_FILTER_ON':{
            console.log("Hello red")
            return [...state,...action.payload]
        }
        case 'PRICE_FILTER_OFF':{
            return [
                ...state
            ].filter((price) => !action.payload.includes(price))
        }
        default : return state
    }
}