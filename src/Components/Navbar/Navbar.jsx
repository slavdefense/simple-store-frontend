import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Cart from "../Cart/Cart";


const Navbar = ({ navItems,allCartData }) => {

//   const [allCartData,setAllCardData] = useState()
// const cartPropsLifter=(data)=>{
//  setAllCardData(data)

// }


  return (
    <div>
      <div className={styles.nav}>
        <img className={styles.logo} src="./logo-scout.png" alt="logo" />
        {navItems.map((item,idx) => {
          return (

            <div>
              <Link key={idx} className={styles.link} to={item.url}>
              <p key = {idx}> {item.name} </p>
            </Link>
            
              
            </div>
            
          );
        })}
        <Cart allCartData={allCartData}  />
        
      </div>
      
      
    </div>
  );
};

export default Navbar;
