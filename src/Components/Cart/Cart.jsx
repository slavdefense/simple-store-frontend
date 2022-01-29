import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
const Cart = ({ allCartData, toggler }) => {
  console.log(allCartData);

  console.log(allCartData);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (let item of allCartData) {
      sum += parseInt(item.price);
    }
    setTotal(sum);
  }, [allCartData]);

  console.log(total);

  // let myarr = []
  // let myCartArray = {}
  // for(let item of allCartData){
  //   if(myCartArray[item.name]){
  //     myarr.push(myCartArray[item.name]++)
  //   }
  //     else{
  //      myarr.push(myCartArray[item.name]=0)
  //     }

  // }
  // console.log(myarr)

  return (
    <div className="cartContainer">
      {toggler ? (
        <div className={styles.toggler}>
          <h3>Cart Component</h3>
          {allCartData
            .filter((item) => item.price !== 0)
            .map((item) => {
              return (
                <h5>
                  {item.name} ${item.price}:
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
