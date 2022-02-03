/* eslint-disable default-case */
import React, { useState, useContext } from "react";
import data from "./data/menu.json";
import styles from "./css/menu.module.css";
import { Context } from "./context";

const Menu = () => {
  const dataMenu = data.productos;
  const globalContext = useContext(Context);

  const Button = dataMenu.filter((element) => element.type === "Desayuno");
  const [product, changeProduct] = useState(Button);

  const typeProduct = (option) => {
    switch (option) {
      case "Desayuno":
        changeProduct(dataMenu.filter((element) => element.type === option));
        break;
      case "Principal":
        changeProduct(dataMenu.filter((element) => element.type === option));
        break;
      case "Bebestibles":
        changeProduct(dataMenu.filter((element) => element.type === option));
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
            <button
              className={styles.products}
              onClick={() => globalContext.onAdd(e)}
            >
              <p className={styles.nameProduct}>{e.name}</p>
              <p className={styles.priceProduct}>${e.price}</p>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
