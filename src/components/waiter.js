import React, {useState} from "react";
import logo from "../imagenes/logo.png"
import Menu from "./menu";
import styles from "./css/waiter.module.css"


//import  swal  from '@sweetalert/with-react' ;

export const PrincipalPage = ()=>{
  const [client, changeClient] = useState('');
  const [table, changeTable] = useState('');

  const onChange=(e)=>{
     if(e.target.name=== 'client'){
       changeClient(e.target.value);
     } else if (e.target.name=== 'table'){
       changeTable(e.target.value);
   }
  }
    return(
       <>
        <div className={styles.waiter}> 
          <header className={styles.logo}>
              <img src={logo} className={styles.appLogo} alt="logo" />
          </header>
          <section className={styles.boxWhite}>
              <section className={styles.boxMenu}>
                  <div className={styles.inputsNames}>
                      <div className={styles.inputClient}>
                        <label htmlFor="client" className={styles.names}>Cliente</label>
                        <input
                         type="text" 
                         name="client" 
                         className={styles.inputs} 
                         value={client}
                         onChange={onChange}
                          
                         />
                      </div>
                      <div className={styles.inputWaiter}>
                        <label htmlFor="table" className={styles.names}>Mesa</label>
                        <input
                         type="text" 
                         name="table" 
                         className={styles.inputs}
                         value={table}
                         onChange={onChange}
                          />
                      </div>
                  </div>
                 <Menu></Menu>
              </section>
              <section className={styles.boxOrder}>
                  <div>
                     <p>Pedido de:{client} </p> 
                     <p>Mesa: {table} </p> 
                     <p>Total $ </p> 
                  </div>
              </section>
          </section>
        </div>
      </>
    );
};