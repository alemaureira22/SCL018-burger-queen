import React from "react";
import logo from "../imagenes/logo.png";
import styles from "./css/kitchen.module.css";
import { Link } from "react-router-dom";
import KitchenOrder from "./kitchenOrder";

//Componente para despliegue de la página de cocina
export const Kitchen = () => {
  return (
    <section className={styles.containerKitchen}>
      <header className={styles.logo}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <div className={styles.containerLink}>
          <Link to="/">
            <img
              src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/32/000000/external-web-homepage-button-to-redirects-at-main-page-basic-tritone-tal-revivo.png"
              alt="home"
              className={styles.return}
            />
          </Link>
        </div>
      </header>
      <main className={styles.containerOrders}>
        <KitchenOrder />
      </main>
    </section>
  );
};
