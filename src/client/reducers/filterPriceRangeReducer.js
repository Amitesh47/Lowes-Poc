export default (state = [], action) => {
    switch (action.type) {
        case 'RANGE_ON':{
            return [...state,action.payload]
        }
        case 'RANGE_OFF':{
            return [
                ...state
            ].filter((range)=>range!=action.payload)
        }
        default : return state
    }
}