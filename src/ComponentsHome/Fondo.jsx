import React from 'react'
import { motion } from "framer-motion";
import {AiFillFacebook} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai"
import Title from './Title';
import LOGO from "../Files/LOGO1.png";
import LOGO2 from "../Files/Bolsa-compras2.png";
import LOGO3 from "../Files/CompraData.png";
import "./Fondo.css";

const Fondo = () => {
  return (
    <div className='Fondo'>
        <div className='Izquierda'>
            <motion.img
            animate={{ rotate: 360}}
            transition={{
              type: "spring"
            }} 
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            src={LOGO} alt="LOGO1" />
        </div>
        <div className='Derecha'>
            <Title texto="Bienvenido"/>
            <div className="imagenes">
                <img src={LOGO2} alt="LOGO2" />
                <img src={LOGO3} alt="LOGO3" />
            </div>
            <div className="redes">
                <a href=""> <AiFillFacebook/></a>
                <a href=""><AiFillInstagram/></a>
            </div>
        </div>

    </div>
  )
}

export default Fondo