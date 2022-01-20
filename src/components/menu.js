import React from "react";
import data from "./data/menu.json";
import styles from "./css/menu.module.css";
import { useState } from "react/cjs/react.development";

const Menu = () => {
  const dataMenu = data.productos;

  const Button = dataMenu.filter((element) => element.type === "Desayuno");
  const [product, changeProduct] = useState(Button);

  const typeProduct = (option) => {
    switch (option) {
      case "Desayuno":
        const breakFast = dataMenu.filter((element) => element.type === option);
        changeProduct(breakFast);
        break;
      case "Principal":
        const principal = dataMenu.filter((element) => element.type === option);
        changeProduct(principal);
        break;
      case "Bebestibles":
        const drinks = dataMenu.filter((element) => element.type === option);
        changeProduct(drinks);
        break;
    }
  };

  return (
    <>
      <div className={styles.Buttons}>
        <button
          onClick={() => typeProduct("Desayuno")}
          className={styles.buttonsMenu}
        >
          Desayuno
        </button>
        <button
          onClick={() => typeProduct("Principal")}
          className={styles.buttonsMenu}
        >
          Principal
        </button>
        <button
          onClick={() => typeProduct("Bebestibles")}
          className={styles.buttonsMenu}
        >
          Bebestibles
        </button>
      </div>
      <div className={styles.boxMenu}>
        {product.map((e) => (
          <div key={e.id}>
            <button className={styles.products}>
              {e.name}
              {e.price}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
