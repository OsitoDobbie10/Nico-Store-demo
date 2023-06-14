import React from 'react'
import Categorias from "../DB/Categorias";
import { NavLink } from 'react-router-dom';
import "./Categoria.css";
const Categoria = () => {
  return (
    <div className='categoria'>
        <h1>Tienda por categoria</h1>
        <div className="cats">
            <ul>
                {Categorias.map((prenda)=>{
                    return <li key={prenda.id}>
                            <img src={prenda.imagen} alt={prenda.cat} />
                            <NavLink className="LinkCat" to={`/${prenda.cat}`}>{`ver ${prenda.cat}`}</NavLink>
                           </li>
                })}
            </ul>
        </div>
    </div>
  )
}

export default Categoria