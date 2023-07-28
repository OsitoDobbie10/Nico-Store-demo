import React from 'react';
import "../Styles/products.css";
import { motion } from 'framer-motion';
import { useState } from 'react';
import random from "../Files/Add-Cart.png";
import {FiXCircle} from "react-icons/fi";
import CustomAddCart from './CustomAddCart';
const CustomProducts = (props) => {
    const inicialvalue = {
      id:1,
      Talla:'6',
      color:'Cafe',
      precio:600,
      descp:'Sandalia marca coach',
      imagen:random
    }
    const [estado1,setEstado1] = useState(inicialvalue)
    const [cerrar,setCerrar] = useState(false)
 
    const close = ()=>{
      setCerrar(false);
    }
    const {productsshoes,titulo} = props;
    const newproductos = structuredClone(productsshoes)
    const restructurar = (value)=>{
      setCerrar(true);
      const array = newproductos.find(data=>data.id === value.id)
      const newobjeto = {
          imagen: array.imagen,
          descp: array.descp,
          precio: array.precio
      }
      setEstado1(newobjeto)

    }

    const {addCart,cart,removeCart} = CustomAddCart();
    //para cambbiar el botonm del card
    const iscart = (value)=>{
      return cart.some(data=> data.id === value.id)
    }

    return (
        <div className='Productos'>
      <div className="title">
        {titulo}
      </div>
      <ul className='arrayCamisas'>
        {
          productsshoes.map((camisa)=>{
            const operacion = iscart(camisa);
            return <motion.li
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    key={camisa.id}>
                    <img src={camisa.imagen} alt={camisa.descp} onClick={()=>restructurar(camisa)}/>
                    <p>{camisa.descp}</p>
                    <p>precio: <span style={{color:"red"}}>{camisa.precio}$</span></p>
                    {
                     operacion?
                     <button type="button" class="btn btn-dark" onClick={()=>removeCart(camisa)}>Borrar carrito</button>:
                     <button type="button" class="btn btn-success" onClick={()=>addCart(camisa)}>Agregar carrito</button>
                    }
                    
                  </motion.li>
          })
        }
      </ul>
      {
        cerrar?
        <div className="BiggerImage">
        <div className='Cerrar' onClick={close}><FiXCircle/></div>
        <img src={estado1.imagen} alt={estado1.descp} />
        <ul className='Arreglo'>
          <li>{`Articulo: ${estado1.descp}`}</li> 
          <li>{`Precio: ${estado1.precio}`}</li>
        </ul>
       
      </div>:
      <div></div>
      }
       </div>
    )
 
}

export default CustomProducts