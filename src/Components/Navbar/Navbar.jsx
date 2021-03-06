import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Cart from "../Cart/Cart";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";

const Navbar = ({ navItems, allCartData }) => {
  const cartCtx = useContext(CartContext);

  // const numberOfCartItems = cartCtx.item.reduce((current, item) => {
  //   return current + item;
  // }, 0);

  const [toggler, setToggler] = useState(false);

  const handleCartClick = (evt) => {
    evt.preventDefault();
    setToggler(!toggler);
    console.log("clicked");
  };
  console.log(toggler);

  return (
    <div className={styles.navbarcontainer}>
      <div className={styles.nav}>
        <img className={styles.logo} src="./logo-scout.png" alt="logo" />
        {navItems.map((item, idx) => {
          return (
            <div>
              <Link key={idx} className={styles.link} to={item.url}>
                <p key={idx}> {item.name} </p>
              </Link>
            </div>
          );
        })}

        <form action="#">
          <Cart
            handleCartClick={handleCartClick}
            toggler={toggler}
            allCartData={allCartData}
            // numberOfCartItems={numberOfCartItems}
          ></Cart>

          {!toggler ? (
            <button className={styles.showcartbutton} onClick={handleCartClick}>
              Show Items
            </button>
          ) : (
            <button className={styles.showcartbutton} onClick={handleCartClick}>
              Hide Items
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Navbar;
