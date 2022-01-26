import React, { useContext } from "react";
import { Context } from "./context";
import food from "../imagenes/food.png";
import styles from "./css/order.module.css";

const Order = () => {
  const globalContext = useContext(Context);

  return (
    <>
      <div>
        {globalContext.products.length === 0 && (
          <div className={styles.boxText}>
            <p className={styles.text}>Agrega productos al pedido </p>
            <img src={food} alt="food" />
          </div>
        )}
      </div>
      <div>
        {globalContext.products.length >= 1 && (
          <div className={styles.containerProducts}>
            {globalContext.products.map((item) => (
              <div key={item.id} className={styles.boxOrder}>
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
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Order;
