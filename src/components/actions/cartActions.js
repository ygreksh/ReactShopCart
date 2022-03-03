
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, SELECT_ITEM, LOAD_PRODUCTS} from './action-types/cart-actions'

// load products
export const loadProducts = (items) => {
    return{
        type: LOAD_PRODUCTS,
        items
    }
}

//select product
export const selectItem = (id)=>{
    return{
        type: SELECT_ITEM,
        id
    }
}

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
