import React from 'react';
import Navbar from './Navbar';
import ScrollToTop from "./ScrollToTop";
import { useId } from 'react';
import { useState } from 'react';
import Sppiner from './Sppiner';
import imagen from "../Files/Camisa.png";
import dato from '../DB/Camisas';
import Coveruser from './Coveruser';
import FormMcustom from "../Custom/FormMcustom";
import FormMcuston2 from '../Custom/FormMcuston2';
import CustomProducts from '../Custom/CustomProducts';
import Footer from '../ComponentsHome/Footer';
import Customarreglos from '../Custom/Customarreglos';
import Customfilters from '../Custom/Customfilters';
import '../Styles/Camisas.css';
const Camisas = () => {
  const [time,setTime] =  useState(true);
  const mobile = window.innerWidth <= 768 ? true: false
  const nombreRefPreciocamisas = useId();
  const nombreRefTallacamisas = useId();
  const nombreRefColorcamisas = useId();
  const {arraTallaCamisas,arrayaCamisasColor} = Customarreglos();
  const {functionfilter,variables,setVariables} = Customfilters();
  const producto = functionfilter(dato);
  setTimeout(()=>{
    setTime(false);
  },2000)
  if (time) return <Sppiner/>

  return (
    <div>
      <Navbar/>
      <ScrollToTop/>
      <Coveruser imagen={imagen} tipo="Pantalones" valor="Inicio" />
      <div className="grilla">
      {mobile ? 
        <FormMcustom TallaZapatos = {arraTallaCamisas}
                     ColorZapatos = {arrayaCamisasColor}
                     variables={variables}
                     setVariables={setVariables}
                     nombreRefid1={nombreRefPreciocamisas}
                     nombreRef2id={nombreRefTallacamisas}
                     nombreRef3id={nombreRefColorcamisas}
                     valormaximo="500"/>:
        <FormMcuston2 TallaZapatos2 = {arraTallaCamisas}
                      ColorZapatos2 = {arrayaCamisasColor}
                      variables={variables}
                      setVariables={setVariables}
                      nombreRefid1={nombreRefPreciocamisas}
                      nombreRef2id={nombreRefTallacamisas}
                      nombreRef3id={nombreRefColorcamisas}
                      valormaximo="500"/>} 
        <CustomProducts productsshoes = {producto} titulo="Zapatos disponibles"/>
        <Footer/>

    </div>
    </div>
  )
}

export default Camisas