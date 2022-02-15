import React, { useContext } from "react";
import { Context } from "./context";
import styles from "./css/totalCount.module.css";

//Componente para mostrar el total de la cuenta
const TotalCount = () => {
  const globalContext = useContext(Context);
  return (
    <div className={styles.total}>
      {globalContext.products.length !== 0 && (
        <div>
          <p>Total $ {globalContext.itemsPrice} </p>
        </div>
      )}
    </div>
  );
};
export default TotalCount;
