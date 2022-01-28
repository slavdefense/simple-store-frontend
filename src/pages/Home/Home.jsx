import React, { useState } from "react";
import { Link } from "react-router-dom";

import SHOP_DATA from "../Shoppage/ShopData";
import styles from "./Home.module.css";

const Home = () => {
  const [shopData, setShopData] = useState(SHOP_DATA);

  console.log(SHOP_DATA);
  return (
    <div className={styles.homepage}>
      <h1>Home Page</h1>

      <section className={styles.imagesection}>
        {shopData.map((item, idx) => {
          return (
            <div>
              <img
                className={styles.imgPreview}
                src={item.items[0].imageUrl}
                alt="logo"
              />

              <Link allsuits={item} key={idx} to={item.routeName}>
                <p> {item.title} </p>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
