import { Link } from "react-router-dom";
import { HeaderContainer, HeaderTitleLogo } from "./styled";
import ShopBag from "../icons/ShopBag";
import { useSelector } from "react-redux";
const Header=()=>{
    const itemsInBack=useSelector(state=>state.cart.cartQuantity);
    return(
        <HeaderContainer>
             <Link style={{textDecoration:'none', color:'#111'}} to="/" ><HeaderTitleLogo>EShop</HeaderTitleLogo></Link>
            <nav style={{display:'flex', alignItems:'center'}}>
                <div>
                    <Link to="/cart" ><ShopBag/></Link>
                    <span>{itemsInBack}</span>
                </div>
            </nav>
        </HeaderContainer>
    )
}

export default Header;