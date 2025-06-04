import Header from "../components/Header"
import { useSelector, useDispatch } from "react-redux";
import DeleteBtn from "../components/icons/DeleteBtn";
import { deleteOfCart } from "../features/AddToCart/AddToCartSlice";
import { CartElemetContainer, CartImgContainer, ElementImg, ElementImgContainer, ListContanier } from "./styled";
import CarritoVacio from "../assets/CarritoVacio.png"
const Cart=()=>{
    const elementCart=useSelector(state=>state.cart.items);
    const deleteDispatch=useDispatch();
    
    const handleDelete=(id)=>{   
        deleteDispatch(deleteOfCart(id))
        console.log(elementCart);
    }
    const cartItems=Object.values(elementCart).filter(Boolean)
    return(
        <>
            <Header/>
            {cartItems.length===0? <CartImgContainer>
                <img style={{width:'45%'}} src={CarritoVacio}/>
                <p style={{fontSize:'3em'}}>carrito vacio</p>
                </CartImgContainer>:
             <div>
                {cartItems.map(element=>(
                    <>
                        <CartElemetContainer>
                            <div style={{display:'flex', width:'55%', alignItems:'center', justifyContent:'space-evenly'}}>
                                <ElementImgContainer>
                                    <ElementImg src={element.image}/>
                                </ElementImgContainer>
                                <div>
                                    <p>Producto</p>
                                    <p>{element.name}</p>
                                </div>
                            </div>
                            <div>
                                <p>Precio</p>
                                <span>${element.price}</span>
                            </div>
                            <div>
                                <p>Cantidad</p>
                                <span>{element.quantity}</span>
                            </div>
                            <div>
                                <button style={{cursor:'pointer'}} onClick={()=>handleDelete(element.id)}><DeleteBtn/></button>
                            </div>
                        </CartElemetContainer>
                    </>
                ))}
             </div>
            
            }
        </>
    )
}
export default Cart;