/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

//creamos un contexto que es igual al estado global
const Context = React.createContext();

const Provider = ({children}) => {
  //estado global para obtener el nombre del cliente y mesa
  const [client, changeClient] = useState("");
  const [table, changeTable] = useState("");

  //estado global para añadir productos al pedido
  const [products, setProducts] = useState([]);
  //Función para añadir productos al carro y aumentar cantidad
  const onAdd = (product) => {
    const exist = products.find((item) => item.id === product.id);
    if (exist) {
      setProducts(
        products.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setProducts([...products, { ...product, qty: 1 }]);
    }
  };

  //Función para restar cantidad
  const onRemove = (product) => {
    const exist = products.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setProducts(products.filter((item) => item.id !== product.id));
    } else {
      setProducts(
        products.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  //Función para eliminar productos
  const removeProducts = (product) => {
    const exist = products.find((item) => item.id === product.id);
    if (exist.qty) {
      setProducts(products.filter((item) => item.id !== product.id));
    }
  };

  //Función para el total
  const itemsPrice = products.reduce((a, c) => {
    return a + c.price * c.qty;
  }, 0);

  //Función para subir orden de cliente a Firestore
  const resumeOrder = async () => {
    try {
      await addDoc(collection(db, "Orders"), {
        client: client,
        table: table,
        total: itemsPrice,
        order: products,
        date: new Date(),
      });
    } catch (error) {
      console.log("errores");
      console.log(error);
    }
  };

  const props = {
    client,
    changeClient,
    table,
    changeTable,
    onAdd,
    onRemove,
    products,
    setProducts,
    removeProducts,
    itemsPrice,
    resumeOrder,
  };

  return <Context.Provider value={props}>{children}</Context.Provider>;
};

export { Context, Provider };
