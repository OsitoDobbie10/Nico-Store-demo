import React, { useState } from 'react';
//import Navbar from './Navbar';
import Sppiner from './Sppiner';
import ScrollToTop from "./ScrollToTop";
import Fondo from '../ComponentsHome/Fondo';
import Cover from '../ComponentsHome/Cover';
import Categoria from '../ComponentsHome/Categoria';
import "../Styles/Home.css";
import Servicios from '../ComponentsHome/Servicios';
import Footer from '../ComponentsHome/Footer';
const Home = () => {
  const [valor,setValor] = useState(true);
  setTimeout(()=>{
   setValor(false)
  },3000)
  if (valor) return <Sppiner/>
  return (
    <div>
      <ScrollToTop/>
      <Fondo/>
      <Cover/>
      <Categoria/>
      <Servicios 
      Testimonios="Servicios tienda web"
      They="Que ofrecemos?"
      Say="NICCOLE CORTEZ STORE"/>
      <Footer/>
    </div>
  )
}

export default Home