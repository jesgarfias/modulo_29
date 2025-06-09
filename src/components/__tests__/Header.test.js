import React from 'react';
import { getByText, render, screen } from '@testing-library/react';
import Header from '../Header';
import "@testing-library/jest-dom"
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../../features/AddToCart/AddToCartSlice'
// Mock de react-router-dom
/*jest.mock('react-router-dom', () => ({
  Link: ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>,
}));

// Mock de react-redux
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));*/

/*describe('Header', () => {
  it('debe renderizar correctamente el logo y el número del carrito', () => {
    // Simular que hay 5 productos en el carrito
    const useSelectorMock = require('react-redux').useSelector;
    useSelectorMock.mockReturnValue(5);

    render(<Header />);
    const linkElement=screen.getByText("EShop");
    expect(linkElement).toBeInTheDocument();
    //expect(screen.getByText(/EShop/i)).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument(); // número del carrito
  });
});*/
 describe('Header',()=>{
    it('shoul render the links in the header',()=>{
            const store=configureStore({
        reducer:{
            cart:cartReducer
        },
        preloadedState:{
            cart:{
                items:[],
                cartQuantity:2,
                cartAmount:0
            }
        }
    });
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                </BrowserRouter>
            </Provider>
        )
        const linkElement=screen.getByText(/Eshop/i);
        expect(linkElement).toBeInTheDocument();
        const elemtInCart=screen.getByText('2');
        expect(elemtInCart).toBeInTheDocument();
    })
 })
