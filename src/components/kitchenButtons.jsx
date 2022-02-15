/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import styles from "./css/kitchenButttons.module.css";
import Swal from "sweetalert2";

//Componente para los botones de los pedidos en cocina
const KitchenButtons = ({ id, status }) => {
  //Estado para cambiar el status de los pedidos
  const [statusOrder, setStatusOrder] = useState(status);

  //Función para actualizar status del pedido
  const updateStatus = async () => {
    if (statusOrder === "Listo") {
      return;
    }
    try {
      await updateDoc(doc(db, "Orders", id), {
        status: "Listo",
      });
      setStatusOrder("Listo");
    } catch (error) {
      throw new Error("Error al actualizar el status");
    }
  };

  //Función para cerrar/borrar el pedido
  const closeOrder = async (id) => {
    try {
      await deleteDoc(doc(db, "Orders", id));
    } catch (error) {
      throw new Error("Error al borrar el pedido");
    }
  };

  //Alerta para confirmar
  const alert = () => {
    Swal.fire({
      title: "¿Deseas cerrar el pedido?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Cerrado",
          "El pedido se ha completado correctamente",
          "success"
        );
        closeOrder(id);
      }
    });
  };

  return (
    <section className={styles.boxButtons}>
      <div onClick={() => updateStatus()} className={styles.buttons}>
        {statusOrder === "Pendiente" ? (
          <button className={styles.pending}>Pendiente</button>
        ) : (
          <button className={styles.ready}>Listo</button>
        )}
      </div>
      <button className={styles.close} onClick={() => alert()}>
        Cerrar
      </button>
    </section>
  );
};

export default KitchenButtons;
