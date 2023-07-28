import React from 'react'
import Navbar from './Navbar';
import ScrollToTop from "./ScrollToTop";
import { useState } from 'react';
import { useId } from 'react';
import shirt from "../DB/Faldas";
import Sppiner from './Sppiner';
import FotoFalda from "../Files/Falda.png";
import Coveruser from './Coveruser';
import FormMcustom from "../Custom/FormMcustom";
import FormMcuston2 from '../Custom/FormMcuston2';
import CustomProducts from '../Custom/CustomProducts';
import Footer from '../ComponentsHome/Footer';
import Customarreglos from '../Custom/Customarreglos';
import Customfilters from '../Custom/Customfilters';

const Faldas = () => {
  const [intro3,setIntro3] = useState(true);
  const nombreRefPreciofaldas = useId();
  const nombreRefTallafaldas = useId();
  const nombreRefColorfaldas = useId();
  const mobile3 = window.innerWidth <= 768 ? true : false;
  const {arrayTalla3,arrayColor3} = Customarreglos();
  const {funcionfilter4,variables4,setVariables4} = Customfilters();
  const productofalds = funcionfilter4(shirt);
  setTimeout(()=>{
    setIntro3(false)
  },2000)
  if (intro3) return <Sppiner/>
  return (
    <div>
      <Navbar/>
      <ScrollToTop/>
      <Coveruser imagen={FotoFalda} tipo="Faldas" valor="Inicio" />
      <div className="grilla">
        {
          mobile3?
          <FormMcustom TallaZapatos = {arrayTalla3}
                       ColorZapatos = {arrayColor3}
                       variables={variables4}
                       setVariables={setVariables4}
                       nombreRefid1={nombreRefPreciofaldas}
                       nombreRef2id={nombreRefTallafaldas}
                       nombreRef3id={nombreRefColorfaldas}
                       valormaximo = "400"
                       />:
          <FormMcuston2 TallaZapatos2 = {arrayTalla3}
                        ColorZapatos2 = {arrayColor3}
                        variables={variables4}
                        setVariables={setVariables4}
                        nombreRefid1={nombreRefPreciofaldas}
                        nombreRef2id={nombreRefTallafaldas}
                        nombreRef3id={nombreRefColorfaldas}
                        valormaximo = "400"/>
        } 
         <CustomProducts productsshoes = {productofalds} titulo="Faldas disponibles"/>
         <Footer/>
      </div>

    </div>
  )
}

export default Faldas