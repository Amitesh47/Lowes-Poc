export default (state=[],action) => {
    switch(action.type){
        case 'RECEIVED_DATA':
            return action.payload
        default:
            return state
        }
}