import React, { useState } from 'react';
// import data from './data/menu.json'

//creamos un contexto que es igual al estado global
const Context = React.createContext();

const Provider = ({children}) => {
    
    //estado global para obtener el nombre del cliente y mesa
    const [client, changeClient] = useState("");
    const [table, changeTable] = useState("");

    //estado global para añadir productos al pedido
    const [ products, setProducts] = useState([]);
    const onAdd = (product) =>{
        const exist = products.find((item)=> item.id === product.id);
        if(exist){
            setProducts(
                products.map((item)=>
                item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
                )
            );
        }else{
            setProducts([...products, {...product, qty: 1 }]);
        }
    };

    const props = {client, changeClient, table, changeTable, onAdd, products, setProducts}

    return (
        <Context.Provider value={props}>
            {children}
        </Context.Provider>
    );
}
 
export {Context, Provider};