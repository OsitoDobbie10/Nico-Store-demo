import React from 'react'
import "./Portada.css"
import { NavLink } from 'react-router-dom';

const Portada = (props) => {
    const {imagen,tipo} = props;
  return (
    <div className='Portada1'>
        <img src={imagen} alt="Portada" />
        <div className="clase">
            <NavLink className={"clase-a"} to={"/"}>Inicio</NavLink>
            <h2>{" >"}</h2>
            <h2>{tipo}</h2>
        </div>

    </div>
  )
}

export default Portada