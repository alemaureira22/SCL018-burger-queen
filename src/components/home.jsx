import React from "react";
import logo from "../imagenes/logo.png";
import waiter from "../imagenes/waiter.png";
import chef from "../imagenes/chef.png";
import styles from "./css/home.module.css";
import { Link } from "react-router-dom";

//Componente de Página principal
export const Home = () => {
  return (
    <main className={styles.containerHome}>
      <figure className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.appLogo} />
      </figure>
      <section className={styles.sectionHome}>
        <section className={styles.section2Home}>
          <h1 className={styles.title}>Selecciona una opción</h1>
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
      </section>
    </main>
  );
};
