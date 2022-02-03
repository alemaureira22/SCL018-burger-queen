import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import styles from "./css/kitchenOrders.module.css";

const KitchenOrder = () => {
  const [orders, changeOrders] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "Orders"), orderBy("date", "desc")),
      (snapshot) => {
        const products = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        changeOrders(products);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div className={styles.kitchenOrderContainer}>
      {orders.length > 0 ? (
        <section className={styles.containerOrders}>
          {orders.map((order) => (
            <div key={order.id} className={styles.boxOrders}>
              <div className={styles.text}>
                <h3 className={styles.orderBy}>Pedido Mesa {order.table}</h3>
                <p className={styles.clientName}>
                  Nombre Cliente: {order.client}
                </p>
                <div>
                  <div className={styles.title}>
                    <p>Productos</p>
                    <p>Cantidad</p>
                  </div>
                  {order.order.map((item) => (
                    <div key={item.id}>
                      <table>
                        <tbody className={styles.table}>
                          <tr className={styles.trName}>
                            <td className={styles.tableName}>{item.name}</td>
                          </tr>
                          <tr className={styles.trQty}>
                            <td className={styles.tableQty}>{item.qty}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <div className={styles.titleContainer}>
          <h1 className={styles.title2}>NO HAY PEDIDOS PENDIENTES</h1>
        </div>
      )}
    </div>
  );
};

export default KitchenOrder;
