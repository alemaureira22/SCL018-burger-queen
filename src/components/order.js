import React, {useContext} from 'react';
import {Context} from './context'

const Order = () => {
const globalContext = useContext(Context);
    return ( 
        <>
            <div>
                {globalContext.products.length === 0 && (
                    <p>Agrega productos al pedido </p>
                )}
            </div>
            <div>
                {globalContext.products.length >= 1 && (
                    <div>
                        {globalContext.products.map((item)=>(
                            <div key={item.id}>
                                <div>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
);
}
 
export default Order;