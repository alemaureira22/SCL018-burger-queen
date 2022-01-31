import React from 'react';

import { Link } from "react-router-dom";

export const Home  = () => {
    return ( 
        <div>
            <h1>HOLIWIS</h1>
            <button>
                <Link to='/waiter'>MESERX</Link>
            </button>
            <button><Link to='/kitchen'>Cocina</Link></button>
        </div>
     );
}

