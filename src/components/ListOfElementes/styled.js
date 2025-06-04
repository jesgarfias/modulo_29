import styled from "styled-components";
const ProductMainContainer=styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 1rem;
    row-gap: 1rem;
`
const ProductCart=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    flex-basis: 350px;
    border: solid 2px rgb(45, 101, 105);
    border-radius: 5px;
    cursor: pointer;
`
const ImageContainer=styled.div`
    width: 60%;
`
const ImageProduct=styled.img`
    width: 50%;
    height: 50%;
`
const BtnContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const BtnCart=styled.button`
    background: transparent;
    cursor: pointer;
    border: none;
    width: 100%;
`
export{
    ProductMainContainer,
    ProductCart,
    ImageContainer,
    ImageProduct, 
    BtnContainer,
    BtnCart
}