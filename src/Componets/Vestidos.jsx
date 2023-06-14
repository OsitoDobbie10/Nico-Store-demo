import React from 'react'
import Navbar from './Navbar';
import ScrollToTop from "./ScrollToTop";
import { useState } from 'react';
import { useId } from 'react';
import dress from "../DB/Vestidos";
import Sppiner from './Sppiner';
import FotoVestido from "../Files/Vestido.png";
import Coveruser from './Coveruser';
import FormMcustom from "../Custom/FormMcustom";
import FormMcuston2 from '../Custom/FormMcuston2';
import CustomProducts from '../Custom/CustomProducts';
import Footer from '../ComponentsHome/Footer';
import Customarreglos from '../Custom/Customarreglos';
import Customfilters from '../Custom/Customfilters';
const Vestidos = () => {
  const [intro2,setIntro2] = useState(true);
  const mobile2 = window.innerWidth <= 768 ? true : false;
  const nombreRefPreciovestidos = useId();
  const nombreRefTallavestidos = useId();
  const nombreRefColorvestidos = useId();
  const {arrayTalla2,arrayColor2} = Customarreglos();
  const {funcionfilter3,variables3,setVariables3} = Customfilters();
  const productosvestidos = funcionfilter3(dress);
  setTimeout(()=>{
    setIntro2(false)
  },2000)
  if (intro2) return <Sppiner/>
  return (
    <div>
      <Navbar/>
      <ScrollToTop/>
      <Coveruser imagen={FotoVestido} tipo="Vestidos" valor="Inicio" />
      <div className="grilla">
        {
          mobile2?
          <FormMcustom TallaZapatos = {arrayTalla2}
                       ColorZapatos = {arrayColor2}
                       variables={variables3}
                       setVariables={setVariables3}
                       nombreRefid1={nombreRefPreciovestidos}
                       nombreRef2id={nombreRefTallavestidos}
                       nombreRef3id={nombreRefColorvestidos}
                       valormaximo = "400"
                       />:
          <FormMcuston2 TallaZapatos2 = {arrayTalla2}
                        ColorZapatos2 = {arrayColor2}
                        variables={variables3}
                        setVariables={setVariables3}
                        nombreRefid1={nombreRefPreciovestidos}
                        nombreRef2id={nombreRefTallavestidos}
                        nombreRef3id={nombreRefColorvestidos}
                        valormaximo = "400"/>
        } 
         <CustomProducts productsshoes = {productosvestidos} titulo="Vestidos disponibles"/>
         <Footer/>
      </div>

    </div>
  )
}

export default Vestidos;  