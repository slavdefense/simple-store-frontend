import React from 'react';
import styles from './Cart.module.css'
const Cart = ({allCartData,toggler}) => {
  console.log(allCartData)


  console.log(allCartData)
  return ( 
    <div className='cartContainer'>

      {toggler?
      <div className={styles.toggler}>
        <h3>Cart Component</h3>
        {
          allCartData.map((item)=>{
            return(
              
              <h5>{item.name} ${item.price}</h5>
            )
          })
        }
        <h3>Total</h3>

      </div>
      

    

      :
      <h1>Show Cart</h1>

      }



      
    </div>
   );
}
 
export default Cart;