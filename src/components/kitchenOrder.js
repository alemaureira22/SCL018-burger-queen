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

  return (
    <>
      {orders.length > 0 ? (
        <section className={styles.containerOrders}>
          {orders.map((order) => (
            <div key={order.id} className={styles.boxOrders}>
              <div className={styles.text}>
                <h3 className={styles.orderBy}>Pedido Mesa {order.table}</h3>
                <hr className={styles.line} />
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
              <KitchenButtons id={order.id} status={order.status} />
            </div>
          ))}
        </section>
      ) : (
        <div className={styles.title1}>
          <h1 className={styles.title2}>NO HAY PEDIDOS PENDIENTES</h1>
          <img
            src="https://img.icons8.com/external-tulpahn-outline-color-tulpahn/64/000000/external-happy-emotion-tulpahn-outline-color-tulpahn.png"
            alt="good job"
            className={styles.goodJob}
          />
        </div>
      )}
    </>
  );
};

export default KitchenOrder;
