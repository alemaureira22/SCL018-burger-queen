import React, { useContext } from "react";
import { Context } from "./context";
import food from "../imagenes/food.png";
import styles from "./css/order.module.css";

//Componente para añadir productos al pedido
const Order = () => {
  const globalContext = useContext(Context);

  return (
    <main>
        {globalContext.products.length >= 1 ? (
          <section className={styles.containerProducts}>
            {globalContext.products.map((item) => (
              <section key={item.id} className={styles.boxOrder}>
                <div className={styles.products}>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                </div>
                <div className={styles.buttons}>
                  <button
                    className={styles.plusLess}
                    onClick={() => globalContext.onAdd(item)}
                  >
                    +
                  </button>
                  <p className={styles.number}>{item.qty}</p>
                  <button
                    className={styles.plusLess}
                    onClick={() => globalContext.onRemove(item)}
                  >
                    -
                  </button>
                </div>
                <button
                  className={styles.x}
                  onClick={() => globalContext.removeProducts(item)}
                >
                  x
                </button>
              </section>
            ))}
          </section>
        ) : (
          <aside className={styles.boxText}>
            <p className={styles.text}>Agrega productos al pedido </p>
            <img src={food} alt="food" className={styles.food} />
          </aside>
        )}
    </main>
  );
};

export default Order;
