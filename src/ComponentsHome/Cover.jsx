import React from 'react';
import Fondo from "../Files/FondoTienda.jpg";
import Fondo1 from "../Files/LOGO2.png";
import { motion } from "framer-motion";
import "./Cover.css";

const Cover = () => {
  return (
    <div className='cover'>
        <img src={Fondo} alt="Tienda" className='img1'/>
        <div>
        <motion.img
        whileHover={{ scale: 1.2 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}
        src={Fondo1} alt="" /> 
        </div>
    </div>
  )
}

export default Cover