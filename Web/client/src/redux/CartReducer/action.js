import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "./actionType"
// add to cart
export const addtoCart=(item)=>{
    return{
        type:ADD_TO_CART,
        payload:item,
    };
}
// remove from cart
export const removefromCart=(id)=>{
    return{
        type:REMOVE_FROM_CART,
        payload:id,
    }
}
// increment quantity
export const incrementQuantity = (id) => {
    return {
      type: INCREMENT_QUANTITY,
      payload: id,
    };
  };
//   decrement quantity
  export const decrementQuantity = (id) => {
    return {
      type: DECREMENT_QUANTITY,
      payload: id,
    };
  };