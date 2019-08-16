const initialState = {
    quantityById: {},
    totalCount: 0
  }

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const { productId,count } = action.payload
            console.log('hello2')
            console.log(productId)
            // return state + 1;
            return { ...state,
                [productId]: (state[productId ] || 0) + count,
                // totalCount: state.totalCount + action.payload.count
              }
        case 'REMOVE_FROM_CART':
            return state - 1;
        default:
            return state
    }
}