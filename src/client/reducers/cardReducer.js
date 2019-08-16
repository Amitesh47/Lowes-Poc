export default (state = 1, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return state + 1;
        case 'DECREMENT_COUNT':
            return state - 1;
        default:
            return state
    }
}