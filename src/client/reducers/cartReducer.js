let initialState = {
    quantityById: [],
    totalCount: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let { productId,count } = action.payload


            return {...state,
                    quantityById:[...(new Set([
                        ...state.quantityById,
                        productId
                    ]))],
                    totalCount: state.totalCount+count
                }
            
        }
            
        case 'REMOVE_FROM_CART':{
            const { productId,count } = action.payload
            return {...state,
                quantityById:[
                    ...state.quantityById
                ].filter((id)=>id!=productId),
                totalCount: state.totalCount-count
            }
        }
            
        default:
            return state
    }
}