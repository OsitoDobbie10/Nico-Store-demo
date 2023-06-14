import React from 'react';
import "./Footer.css";
import {AiFillFacebook} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {AiOutlineGithub} from "react-icons/ai";
const Footer = () => {
  return (
    <footer class="footer"> 
    <div class="box-container">

        <div class="box">
            <h3>Sobre nosotros</h3>
            <p>Niccole Cortez administradora de la tienda</p>
        </div>
        <div class="box">
            <h3>Mis redes sociales: </h3>
            <a href="#"><AiFillFacebook/></a>
            <a href="#"><AiFillInstagram/></a>
            <a href="https://www.linkedin.com/in/carlos-antonio-archaga-martinez-b7a494171/"><AiFillLinkedin/></a>
            <a href="https://github.com/OsitoDobbie10"><AiOutlineGithub/></a>
        </div>

    </div>

    <h1 class="credit"> Creado por <span> Carlos Archaga. </span> | Derechos reservador React JS. </h1>

    </footer>
  )
}

export default Footer;