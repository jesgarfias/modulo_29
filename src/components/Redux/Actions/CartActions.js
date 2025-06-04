export const addToCart=(product)=>{
    return{
        type:'ADD_CART',
        payload:product,
    }
}

export const deleteItem=(id)=>{
    return{
        type:'DELETE_ITEM',
        payload:id,
    }
}