import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import styles from "./css/kitchenOrders.module.css";
import KitchenButtons from "./kitchenButtons";

//Componente para visualizar los pedidos en cocina
const KitchenOrder = () => {
  //Estado de las ordenes
  const [orders, changeOrders] = useState([]);

  //Función para acceder a la base de datos de Firestore y ordenar pedidos
  useEffect(() => {
    onSnapshot(
      query(collection(db, "Orders"), orderBy("date", "asc")),
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

  return orders.length > 0 ? (
    orders.map((order) => (
      <section key={order.id} className={styles.boxOrders}>
        <header className={styles.header}>
          <h1 className={styles.orderBy}>Pedido Mesa {order.table}</h1>
          <hr className={styles.line} />
        </header>
        <main className={styles.text}>
          <p className={styles.clientName}>Nombre Cliente: {order.client}</p>
          <table className={styles.mainTable}>
            <thead>
            <tr className={styles.title}>
              <th>Productos</th>
              <th>Cantidad</th>
            </tr>
            </thead>
            {order.order.map((item) => (
                  <tbody key={item.id} className={styles.table}>
                    <tr className={styles.trName}>
                      <td>{item.name}</td>
                    </tr>
                    <tr className={styles.trQty}>
                      <td>{item.qty}</td>
                    </tr>
                  </tbody>
            ))}
          </table>
        </main>
        <KitchenButtons id={order.id} status={order.status} />
      </section>
    ))
  ) : (
    <section className={styles.title1}>
      <h1 className={styles.title2}>NO HAY PEDIDOS PENDIENTES</h1>
      <img
        src="https://img.icons8.com/external-tulpahn-outline-color-tulpahn/64/000000/external-happy-emotion-tulpahn-outline-color-tulpahn.png"
        alt="good job"
        className={styles.goodJob}
      />
    </section>
  );
};

export default KitchenOrder;
