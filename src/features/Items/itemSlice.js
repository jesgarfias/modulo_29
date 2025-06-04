import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState={
    loading:false,
    data:[],
    error:'',
}

export const fetchItems=createAsyncThunk('item/fetchItems', ()=>{
   return axios.get('https://fakestoreapi.com/products')
    .then(res=>res.data)
    .catch(err=> console.log(err))
})
const itemSlice=createSlice({
    name:'item',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchItems.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchItems.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
            state.error=''
        })
        builder.addCase(fetchItems.rejected,(state,action)=>{
            state.loading=false
            state.data=[]
            state.error=action.error.message
        })
    }
})

export default itemSlice.reducer;