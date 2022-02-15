/* eslint-disable default-case */
import React, { useState, useContext } from "react";
import data from "./data/menu.json";
import styles from "./css/menu.module.css";
import { Context } from "./context";

//Componente para despliegue de menú en página de meserx
const Menu = () => {
  const dataMenu = data.productos;
  const globalContext = useContext(Context);

  const Button = dataMenu.filter((element) => element.type === "Desayuno");
  const [product, changeProduct] = useState(Button);

  //Función para filtrar por tipo los productos del menú
  const typeProduct = (option) => {
    changeProduct(dataMenu.filter((element) => element.type === option));
  };

  return (
    <section>
      <nav className={styles.Buttons}>
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
      </nav>
      <section className={styles.boxMenu}>
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
      </section>
    </section>
  );
};

export default Menu;
