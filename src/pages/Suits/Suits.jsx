import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './Suits.module.css'

const Suites = () => {
  const location = useLocation();

  const [shoppingList] = useState(location.state.items);

  console.log(location.state.items);

  return (
    <div>
      <h1> All Suits</h1>

      <section className={styles.containerSuits}>
        {shoppingList.map((item) => {
          return (
            <div>
              <h1>{item.name}</h1>
              <img src={item.imageUrl} alt="images" />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Suites;
