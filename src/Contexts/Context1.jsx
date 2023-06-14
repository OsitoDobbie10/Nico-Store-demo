import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const CreateContext1 = createContext();
export function Providercontext({children}){
    //Camisas
    const [variables,setVariables] = useState({
        Talla:'all',
        color:'all',
        precio:100})
    //Zapatos
    const [variables2,setVariables2] = useState({
        Talla:'all',
        color:'all',
        precio:150
    })
    //Vestidos
    const [variables3,setVariables3] = useState({
        Talla:'all',
        color:'all',
        precio:180
    })
    //Pantalones
    const [variables4,setVariables4] = useState({
        Talla:'all',
        color:'all',
        precio:190
    })
    //Faldas
    const [variables5,setVariables5] = useState({
        Talla:'all',
        color:'all',
        precio:200
    })
    return <CreateContext1.Provider value={{
             variables,
             setVariables,
             variables2,
             setVariables2,
             variables3,
             setVariables3,
             variables4,
             setVariables4,
             variables5,
             setVariables5}}>
             {children}
           </CreateContext1.Provider>}
 

