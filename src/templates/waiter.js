import React from "react";
import logo from "../imagenes/logo.png"

export const PrincipalPage = ()=>{
    return(
       <>
        <div className="Box-waiter"> 
          <header className="Header-logo">
              <img src={logo} className="App-logo" alt="logo" />
          </header>
          <section className="Box-white">
              <section className="Box-menu">
                  <div className="Inputs-names">
                      <div className="Input-client">
                        <p className="names">Cliente</p>
                        <input type="text" name="client" className="inputs" />
                      </div>
                      <div className="Input-waiter">
                        <p className="names">Meserx</p>
                        <input type="text" name="waiter" className="inputs"  />
                      </div>
                  </div>
                  <div className="Buttons">
                      <button className="buttons-menu">Hamburguesas</button>
                      <button className="buttons-menu">Bebestibles</button>
                      <button className="buttons-menu">Acompañamientos</button>
                  </div>
              </section>
              <section className="Box-order">
                  <div>
                     <p>Pedido de: </p> 
                     <p>Meserx: </p> 
                     <p>Total $ </p> 
                  </div>
              </section>
          </section>
        </div>
      </>
    );
};