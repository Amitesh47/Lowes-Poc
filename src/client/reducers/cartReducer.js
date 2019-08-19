let initialState = {
    quantityById: [],
    totalCount: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let { productId,count } = action.payload
            // console.log('hello2')
            console.log(state)
            // return state + 1;

            return {...state,
                    quantityById:[...(new Set([
                        ...state.quantityById,
                        productId
                    ]))],
                    totalCount: state.totalCount+count
                }
            // return state+ count


            //     Object.assign({} , state,
            //     {[productId]: (state[productId ] || 0) + count}
            //     // totalCount: state.totalCount + action.payload.count
            //   )
        }
            
        case 'REMOVE_FROM_CART':{
            const { productId,count } = action.payload
            console.log("Hello1");            
            console.log(productId);
            return {...state,
                // quantityById:CartWithoutProd,
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