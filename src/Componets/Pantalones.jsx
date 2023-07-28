import React from 'react'
//import Navbar from './Navbar';
import ScrollToTop from "./ScrollToTop";
import { useState } from 'react';
import { useId } from 'react';
import pants from "../DB/Pantalones";
import Sppiner from './Sppiner';
import FotoPantalon from '../Files/Pantalones.png'
import Coveruser from './Coveruser';
import FormMcustom from "../Custom/FormMcustom";
import FormMcuston2 from '../Custom/FormMcuston2';
import CustomProducts from '../Custom/CustomProducts';
import Footer from '../ComponentsHome/Footer';
import Customarreglos from '../Custom/Customarreglos';
import Customfilters from '../Custom/Customfilters';
const Pantalones = () => {
  const [intro3,setIntro3] = useState(true);
  const mobile3 = window.innerWidth <= 768 ? true : false;
  const nombreRefPreciopantalon = useId();
  const nombreRefTallapantalon = useId();
  const nombreRefColorpantalon = useId();
  const {arrayTalla4,arrayColor4} = Customarreglos();
  const {funcionfilter3,variables3,setVariables3} = Customfilters();
  const productosvestidos = funcionfilter3(pants);
  setTimeout(()=>{
    setIntro3(false)
  },2000)
  if (intro3) return <Sppiner/>
  return (
    <div>
      <ScrollToTop/>
      <Coveruser imagen={FotoPantalon} tipo="Pantalones" valor="Inicio" />
      <div className="grilla">
        {mobile3 ? 
        <FormMcustom TallaZapatos = {arrayTalla4}
                     ColorZapatos = {arrayColor4}
                     variables={variables3}
                     setVariables={setVariables3}
                     nombreRefid1={nombreRefPreciopantalon}
                     nombreRef2id={nombreRefTallapantalon}
                     nombreRef3id={nombreRefColorpantalon}
                     valormaximo="1000"/>:
        <FormMcuston2 TallaZapatos2 = {arrayTalla4}
                      ColorZapatos2 = {arrayColor4}
                      variables={variables3}
                      setVariables={setVariables3}
                      nombreRefid1={nombreRefPreciopantalon}
                      nombreRef2id={nombreRefTallapantalon}
                      nombreRef3id={nombreRefColorpantalon}
                      valormaximo="1000"/>}
        <CustomProducts productsshoes = {productosvestidos} titulo="Pantalones disponibles"/>
        <Footer/>
       </div>
    </div>
  )
}

export default Pantalones