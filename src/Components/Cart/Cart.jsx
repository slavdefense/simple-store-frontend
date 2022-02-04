import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
const Cart = ({ allCartData, toggler }) => {
  console.log(allCartData);

  console.log(allCartData);

  const [total, setTotal] = useState(0);
  const [itemTotal, setItemTotal] = useState([]);



  console.log(itemTotal);

  return (
    <div className="cartContainer">
 
    </div>
  );
};

export default Cart;
