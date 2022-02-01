import React,{useReducer} from 'react';
import CartContext from './cart-context';

const defaultCardState = {
  items: [],
  totalAmount:0
}

const cartReducer =(state,action)=>{

  if(action.type==='ADD'){
    const updatedItems = state.items.concat(action.item)
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
    return {
      items: updatedItems,
      totalAmount:updatedTotalAmount
        }
  }
  return  defaultCardState
}


const CartProvider = (props) => {


  const [cartState, dispatchCartAction]=useReducer(cartReducer, defaultCardState)

  const addCartItemsHandler = item => {
    dispatchCartAction({type:'ADD', item:item})

  }
  const removeCartItemsHandler = item => {}

  const cartContext = {
    items: cartState.items,
    totalAmount : cartState.totalAmount,
    addItems: addCartItemsHandler,
    removeItems : removeCartItemsHandler
  }
  return ( 
      <CartContext.Provider
      value= {cartContext}
      
      >
        {props.children}
      </CartContext.Provider>
  
   );
}
 
export default CartProvider ;