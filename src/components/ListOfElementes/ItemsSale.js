import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../features/Items/itemSlice";
import { ProductCart,ImageProduct,BtnContainer,BtnCart, ProductMainContainer } from "./styled";
import { useState } from "react";
import ShopBag from "../icons/ShopBag";
import { addToCart } from "../../features/AddToCart/AddToCartSlice";
import styled from "../ListOfElementes/styled.css"

const ItemsSale=()=>{
    const dispatch=useDispatch()
    const elemntenadd=useSelector((state)=>state.cart.items);
    const totalInCart=useSelector((state)=>state.cart.cartQuantity);
    const data =useSelector((state)=>state.item)
    useEffect(()=>{
        dispatch(fetchItems())
    },[])
    console.log(data)
    const [isHover, setIsHover]=useState(null);

    const handleAdd=(product)=>{
        dispatch(addToCart(product));
        console.log(elemntenadd);
        console.log(totalInCart)
    }
    return(
        <ProductMainContainer>
            {
                data.loading ? <h1> Loading ...</h1>:
                data.data.map((element,index)=>{
                    return (
                    
                    <ProductCart key={index} onMouseEnter={()=>setIsHover(index)} onMouseLeave={()=>setIsHover(null)}>
                        <ImageProduct src={element.image} />
                        <p>{element.title}</p>
                        <p>${element.price}</p>
                        <BtnContainer className={isHover===index ?'add-btn show': 'add-btn'}>
                            <BtnCart onClick={()=>handleAdd(element)}><ShopBag/></BtnCart>    
                        </BtnContainer>
                    </ProductCart>
                       
                    )
                })
            }
        </ProductMainContainer>
    )
}
export default ItemsSale