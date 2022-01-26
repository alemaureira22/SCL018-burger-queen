import React, { useContext } from "react";
import logo from "../imagenes/logo.png";
import Menu from "./menu";
import styles from "./css/waiter.module.css";
import { Context } from "./context";
import Order from "./order";

export const Waiter = () => {
  const globalContext = useContext(Context);

  const onChange = (e) => {
    if (e.target.name === "client") {
      globalContext.changeClient(e.target.value);
    } else if (e.target.name === "table") {
      globalContext.changeTable(e.target.value);
    }
  };
  return (
    <>
      <div className={styles.waiter}>
        <header className={styles.logo}>
          <img src={logo} className={styles.appLogo} alt="logo" />
        </header>
        <section className={styles.boxWhite}>
          <section className={styles.boxMenu}>
            <div className={styles.inputsNames}>
              <div className={styles.inputClient}>
                <label htmlFor="client" className={styles.names}>
                  Cliente
                </label>
                <input
                  type="text"
                  name="client"
                  className={styles.inputs}
                  value={globalContext.client}
                  onChange={onChange}
                />
              </div>
              <div className={styles.inputWaiter}>
                <label htmlFor="table" className={styles.names}>
                  N° Mesa
                </label>
                <input
                  type="text"
                  name="table"
                  className={styles.inputsTable}
                  value={globalContext.table}
                  onChange={onChange}
                />
              </div>
            </div>
            <Menu></Menu>
          </section>
          <section className={styles.boxOrder}>
            <div className={styles.textOrder}>
              <div className={styles.containerOrderByClient}>
                <p className={styles.orderBy}>Pedido de:</p>
                <p className={styles.result}>{globalContext.client}</p>
              </div>
              <div className={styles.containerOrderBy}>
                <p className={styles.orderBy}>Mesa:</p>
                <p className={styles.result}>{globalContext.table}</p>
              </div>

              <div className={styles.total}>
                <p>Total $ 20.000 </p>
              </div>
              
            </div>
            <div>
                <Order></Order>
              </div>
          </section>
        </section>
      </div>
    </>
  );
};
