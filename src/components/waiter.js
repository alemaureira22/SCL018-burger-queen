import React, { useContext } from "react";
import logo from "../imagenes/logo.png";
import Menu from "./menu";
import styles from "./css/waiter.module.css";
import { Context } from "./context";
import Order from "./order";
import TotalCount from "./totalCount";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


export const Waiter = () => {
  const globalContext = useContext(Context);
  const MySwal = withReactContent(Swal)

  //revisar bien ya que no funciona al 100%
  const sendOrder = ()=>{
    if(globalContext.client === '' || globalContext.table === '' ){
      MySwal.fire({
        title: 'Ups...',
        text: 'Creo que olvidaste escribir el nombre o mesa del cliente',
        icon: 'error'
      })
    }else{
      Swal.fire({
        title: '¿Deseas confirmar el pedido?',
        text: "Si tienes dudas, consúltalo con el cliente",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Enviado',
            'El pedido ha sido enviado a Cocina',
            'success'
          )
        }
      })
    }
  }

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
              <div className={styles.boxClient}>
                <div className={styles.containerOrderByClient}>
                  <p className={styles.orderBy}>Pedido de:</p>
                  <p className={styles.result}>{globalContext.client}</p>
                </div>
                <div className={styles.containerOrderBy}>
                  <p className={styles.orderBy}>Mesa:</p>
                  <p className={styles.result}>{globalContext.table}</p>
                </div>
              </div>
              <div className={styles.totalCount}>
                <TotalCount></TotalCount>
              </div>
            </div>
            <div>
              <Order></Order>
            </div>
            <div className={styles.boxButton}>
            <button 
            className={styles.orderButton}
            onClick={()=> sendOrder()}
            >
              Enviar Pedido</button>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};
