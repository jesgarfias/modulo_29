import { configureStore } from "@reduxjs/toolkit";
import itemReducer from '../features/Items/itemSlice'
import cartReducer from '../features/AddToCart/AddToCartSlice'
export const store=configureStore({
    reducer:{
        item:itemReducer,
        cart:cartReducer,
    }
})

