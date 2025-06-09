import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ItemsSale from "../ListOfElementes/ItemsSale";
import itemReducer from "../../features/Items/itemSlice"

describe('itemsSale',()=>{
    it('should render loading... when loading:true',()=>{
        const store=configureStore({
            reducer:{
            item:itemReducer,
        },
        preloadedState:{
            item:{
                loading:true,
                data:[],
                error:'',
            }
        }        
        });
        render(
            <Provider store={store}>
                <ItemsSale/>
            </Provider>
        )
        const showLoading=screen.getByText("Loading ...");
        expect(showLoading).toBeInTheDocument();
    })
})