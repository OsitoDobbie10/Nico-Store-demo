import React from 'react';
import "./Products.css";
import { motion } from 'framer-motion';
//import camisas from "../DB/Camisas";
const Products = (props) => {
  const {producto} =  props;
  return (
    <div className='Productos'>
      <div className="title">
        Camisas Disponibles
      </div>
      <ul className='arrayCamisas'>
        {
          producto.map((camisa)=>{
            return <motion.li 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    key={camisa.id}>
                    <img src={camisa.imagen} alt={camisa.descp} />
                    <p>{camisa.descp}</p>
                    <p>precio: <span style={{color:"red"}}>{camisa.precio}$</span></p>
                    <button type="button" class="btn btn-success">Agregar carrito</button>
                  </motion.li>
          })
        }
      </ul>
    </div>
  )
}

export default Products