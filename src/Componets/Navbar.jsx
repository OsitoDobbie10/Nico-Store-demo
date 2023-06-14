import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import {FiXCircle} from "react-icons/fi";
import {FiMenu} from "react-icons/fi";
import img1 from "../Files/Bolsa-compras2.png"
import "../Styles/navbar.css";

const Navbar = () => {
    const [estado,setEstado] = useState(false);
    const mobile = window.innerWidth <= 768 ? true: false;
    const open = ()=>{
        setEstado(true);
    }

    const close = ()=>{
        setEstado(false);
    }

  return (
    <div className='navbar'>
    {estado === false && mobile === true ?
    <div className='mobile'>
        <div className='buton'>
        <FiMenu onClick={open} style={{border:'1px solid white'}}/>
        </div>
        <a href="#" class="logo"><span>Nico </span>Shop</a>
    </div>:
        <div className='header'>
        <div className='botoncerrar'>
            <FiXCircle onClick={close}/>
        </div>
        <a href="#" class="logo"><span>Nico </span>Store.</a>
        <ul className='navbar-header'>
            <li><NavLink to={'/'} className={'link'}>Inicio</NavLink></li>
            <li><NavLink to={'/Camisas'} className={'link'}>Camisas</NavLink></li>
            <li><NavLink to={'/Zapatos'} className={'link'}>Zapatos</NavLink></li>
            <li><NavLink to={'/Vestidos'} className={'link'}>Vestidos</NavLink></li>
            <li><NavLink to={'/Pantalones'} className={'link'}>Pantalones</NavLink></li>
            <li><NavLink to={'/Faldas'} className={'link'}>Faldas</NavLink></li>
        </ul>
        <div className="imagen">
        <img src={img1} alt="Imagen encabezado" />
        </div>
      
        </div>
    }
</div>   
  )
}

export default Navbar