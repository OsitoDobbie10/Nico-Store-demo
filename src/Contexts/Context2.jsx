import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';
export const CreateContext2 = createContext();

export function Context2Provider({children}){
    const [cart,setCart] = useState([]);

    const addCart = (product)=>{
        const productValid = cart.findIndex(item=>item.id === product.id);

        if (productValid > 0){
            //copia de nuestro arreglo
            const newcart = structuredClone(cart);
            newcart[productValid].quantify += 1;
            return setCart(newcart);

        }
        //caso que no haya un producto en nuestro carrito
        setCart(prevState=>([
            ...prevState,
            {
            ...product,
            quantify:1            
            }
        ]))

    }

    const ClearCard = ()=>{
        setCart([]);
    }


    const removeCart = (product)=>{
        setCart(prevState=> prevState.filter(value=>value.id !== product.id))
    }
    
    return (
        <CreateContext2.Provider value={{
            cart,
            setCart,
            addCart,
            ClearCard,
            removeCart
        }}>
            {children}
        </CreateContext2.Provider>
    )
}
