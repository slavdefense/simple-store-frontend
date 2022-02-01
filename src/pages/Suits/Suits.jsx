import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Suits.module.css";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import { useRef } from "react";


const Suites = ({liftingCartHandler}) => {
  const location = useLocation();
  
  const amountInputRef = useRef()

  const cartCtx = useContext(CartContext)

const clickHandler=(price,name,idx)=>{



cartCtx.addItems({
  // id:amountInputRef.id,
  id:idx,
  price: price,
  name:name
  
})

}

  const [shoppingList] = useState(location.state.items);
  const [cartItems, setCartItems] = useState({
    name:'',
    price:0
  });

  const [allCartItems, setAllCartItems] = useState([]);

  useEffect(() => {
    setAllCartItems([...allCartItems, { price: cartItems.price,name:cartItems.name }]);
    liftingCartHandler(allCartItems)

   
  }, [cartItems]);

  console.log(allCartItems);

  // const clickHandler = (price,name) => {
  //   setCartItems({price:price,name:name});
  // };

  return (
    <div>
      <h1> All Suits</h1>

      <section className={styles.containerSuits}>
        {shoppingList.map((item,idx) => {
          return (
            <div className={styles.containerdiv}>
              <h1>
                {item.name} {item.price}
              </h1>
              <h1> {idx}</h1>
              <img src={item.imageUrl} alt="images" />

              <button className={styles.buttonhover}
                onClick={() => {
                  clickHandler(item.price,item.name,item.idx);

                }}
              >
                Add to cart
              </button>
              <form >

                <label>Quantity</label>
              <input ref={amountInputRef} id="amount" type="number" min="1" defaultValue="1"></input>
              </form>
              
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Suites;
