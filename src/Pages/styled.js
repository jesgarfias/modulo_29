import styled from "styled-components";
const ListContanier=styled.div`
    display: flex;
    width: 39%;
    margin-left: 13.2rem;
    justify-content: space-around;

`
const CartElemetContainer=styled.div`
    display: flex;
    border: solid 1px #7aa5bb;
    border-radius: 2px;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    margin: 2rem 0rem;
`
const ElementImgContainer=styled.div`
    width: 40%;
`
const ElementImg=styled.img`
    width: 100%;
`
const CartImgContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export {
    ListContanier,
    CartElemetContainer,
    ElementImg,
    ElementImgContainer,
    CartImgContainer
}