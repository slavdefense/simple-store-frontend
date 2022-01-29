import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Suits.module.css";

const Suites = ({liftingCartHandler}) => {
  const location = useLocation();
  console.log(location)

  const [shoppingList] = useState(location.state.items);
  const [cartItems, setCartItems] = useState({
    name:'start',
    price:0
  });

  const [allCartItems, setAllCartItems] = useState([]);

  useEffect(() => {
    setAllCartItems([...allCartItems, { price: cartItems.price,name:cartItems.name }]);
    liftingCartHandler(allCartItems)

   
  }, [cartItems]);

  console.log(allCartItems);

  const clickHandler = (price,name) => {
    setCartItems({price:price,name:name});
  };

  return (
    <div>
      <h1> All Suits</h1>

      <section className={styles.containerSuits}>
        {shoppingList.map((item) => {
          return (
            <div className={styles.containerdiv}>
              <h1>
                {item.name} {item.price}
              </h1>
              <img src={item.imageUrl} alt="images" />

              <button className={styles.buttonhover}
                onClick={() => {
                  clickHandler(item.price,item.name);
                }}
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Suites;
