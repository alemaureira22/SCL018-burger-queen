import React,{ useState, useEffect} from "react";
import {db} from "../firebase"
import {collection, onSnapshot} from "firebase/firestore"



export const Kitchen = ()=>{
    const [order, changeOrder]= useState([]);

    useEffect(()=>{
        onSnapshot(
            collection(db,'Orders'),
            (snapshot) =>{
                const products = snapshot.docs.map((documento) => {
                    return {...document.data(),id:documento.id}
                })
                changeOrder(products);
            }
        );
    }, []);

    return(
        <div>
            {order.map((order)=>(
                <main>
                    <div>
                        <p>{order.cliente}</p>
                    </div>
                    <div>
                        <li>{order.order}</li>
                        <p>{order.total}</p>
                        <p>{order.estado}</p>
                    </div>
                </main>
            ))}
        </div>
    )
           
            }  


