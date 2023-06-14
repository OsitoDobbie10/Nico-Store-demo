import React from 'react'
import "../Styles/Coveruser.css"
import { NavLink } from 'react-router-dom';
import CustomCart from '../Custom/CustomCart';

const Coveruser = (props) => {
    const {imagen,tipo,valor} = props;
  return (
    <div className='Portada1'>
        <img src={imagen} alt="Portada" />
        <div className="clase">
            <NavLink className={"clase-a"} to={`/`}>{valor}</NavLink>
            <h2>{" >"}</h2>
            <h2>{tipo}</h2>
        </div>
        <CustomCart/>
    </div>
  )
}

export default Coveruser