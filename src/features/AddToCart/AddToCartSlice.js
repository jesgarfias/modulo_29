import { createSlice } from "@reduxjs/toolkit";
const initialState={
    items:[],
    cartQuantity:0,
    cartAmount:0
}

const addToCartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            const item=action.payload;
            const currentQty=state.items[item.id]?.quantity || 0;
            state.items[item.id]={
                ...item,
                quantity:currentQty +1
            };
            state.cartQuantity +=1;
            state.cartAmount += item.price
        },
        deleteOfCart:(state,action)=>{
            const id=action.payload;
            const removedQty=state.items[id]?.quantity||0;
            delete state.items[id];
            state.cartQuantity -=removedQty
        }
    }
})

export const {addToCart, deleteOfCart}=addToCartSlice.actions;
export default addToCartSlice.reducer;