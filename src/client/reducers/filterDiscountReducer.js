export default (state = [], action) => {
    switch (action.type) {
        case 'CATEGORY_DISCOUNT_ON':{
            console.log("disssss")
            return [...state,'discount']
        }
        case 'CATEGORY_DISCOUNT_OFF':{
            return [
                ...state
            ].filter((itemName)=>itemName!='discount')
        }
        default : return state
    }
}