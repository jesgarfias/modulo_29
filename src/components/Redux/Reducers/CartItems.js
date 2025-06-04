const initialCartState={
    items:[],
    cartQuantity:0,
    cartAmount:0
}

const cartReducer=(state=initialCartState,action)=>{
    switch(action.type){
        case'ADD_CART':{
            const itemAdd=action.payload;
            const currerntQty=state.items[itemAdd.id]?.quantity || 0;
            return{
                    ...state,
                    items:{
                        ...state.items,
                        [itemAdd.id]:{
                            ...itemAdd,
                            quantity:currerntQty +1,
                        },
                    },
                    cartQuantity: state.cartQuantity + 1,
            };
        }
        case 'DELETE_ITEM':
            {
                const newCart={...state.items};
                const removedItemQty = newCart[action.payload]?.quantity || 0;
                delete newCart[action.payload];
                return{
                    ...state,
                    items:newCart,
                    cartQuantity:state.cartQuantity - removedItemQty,
                }
            }
        default: return state;
    }
}
export default cartReducer;