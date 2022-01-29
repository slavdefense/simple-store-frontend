import React,{useState} from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Cart from "../Cart/Cart";


const Navbar = ({ navItems,allCartData }) => {

//   const [allCartData,setAllCardData] = useState()
// const cartPropsLifter=(data)=>{
//  setAllCardData(data)

// }
const [toggler,setToggler] = useState(false)


const handleCartClick=(evt)=>{
  evt.preventDefault()
  setToggler(!toggler)
  console.log('clicked')


}
console.log(toggler)

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

        <form action="#">
        <Cart toggler={toggler}  allCartData={allCartData}>
         
         </Cart> 

           
        <button onClick={handleCartClick}>Show Items</button>
        </form>
       
        
      </div>
      
      
    </div>
  );
};

export default Navbar;
