import React from "react";
import logo from "../imagenes/logo.png";
import waiter from "../imagenes/waiter.png";
import chef from "../imagenes/chef.png";
import styles from "./css/home.module.css";

import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className={styles.containerHome}>
      <figure className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.appLogo} />
      </figure>
      <section className={styles.sectionHome}>
        <div>
          <h2 className={styles.title}>Selecciona una opción</h2>
        </div>
        <div className={styles.buttons}>
          <Link to="/waiter" className={styles.buttonWaiter}>
            <img src={waiter} alt="meserx" className={styles.img} />
            Meserx
          </Link>
          <Link to="/kitchen" className={styles.buttonCooker}>
            <img src={chef} alt="chef" className={styles.img} />
            Cocina
          </Link>
        </div>
      </section>
    </div>
  );
};
