import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
const Cart = ({ allCartData, toggler }) => {
  console.log(allCartData);

  console.log(allCartData);

  const [total, setTotal] = useState(0);
  const [itemTotal, setItemTotal] = useState([]);

  useEffect(() => {
    let sum = 0;
    for (let item of allCartData) {
      sum += parseInt(item.price);
    }
    setTotal(sum);
  }, [allCartData]);

  console.log(total);

  useEffect(() => {
    let myArr = [];

    let myCartArray = {};
    for (let item of allCartData) {
      if (myCartArray[item.name]) {
        myCartArray[item.name] = myCartArray[item.name] + 1;
      } else {
        myCartArray[item.name] = 1;
      }
    }
    console.log(myCartArray);

    for (let item in myCartArray) {
      myArr.push(`  Item:${item}    Total:${myCartArray[item]}`);
    }
    setItemTotal(myArr);
  }, [allCartData]);

  console.log(itemTotal);

  return (
    <div className="cartContainer">
      {toggler ? (
        <div className={styles.toggler}>
          <h3>Checkout</h3>
          {itemTotal
            .filter((item) => item.Total !== 0)
            .map((item) => {
              return (
                <h5>
                  {item} {item.price}:
                </h5>
              );
            })}
          <h3>Your total is ${total}</h3>
        </div>
      ) : (
        <h1>Cart</h1>
      )}
    </div>
  );
};

export default Cart;
