import React from 'react'
//import Navbar from './Navbar';
import ScrollToTop from "./ScrollToTop";
import { useState } from 'react';
import { useId } from 'react';
import shoes from "../DB/Zapatos";
import Sppiner from './Sppiner';
import Fotozapato from "../Files/Tacones.png";
import Coveruser from './Coveruser';
import FormMcustom from "../Custom/FormMcustom";
import FormMcuston2 from '../Custom/FormMcuston2';
import CustomProducts from '../Custom/CustomProducts';
import Footer from '../ComponentsHome/Footer';
import Customarreglos from '../Custom/Customarreglos';
import Customfilters from '../Custom/Customfilters';


const Zapatos = () => {
  const [intro,setIntro] = useState(true);
  const nombreRefPreciozapatos = useId();
  const nombreRefTallazapatos = useId();
  const nombreRefColorzapatos = useId();
  const mobile1 = window.innerWidth <= 768 ? true : false;
  const {arrayTalla,arrayColor} = Customarreglos();
  const {funcionfilter2,variables2,setVariables2} = Customfilters();
  const productozapatos = funcionfilter2(shoes)
  setTimeout(()=>{
    setIntro(false)
  },2000)
  if (intro) return <Sppiner/>
  return (
    <div>
       <ScrollToTop/>
       <Coveruser imagen={Fotozapato} tipo="Zapatos" valor="Inicio" />
       <div className="grilla">
        {mobile1 ? 
        <FormMcustom TallaZapatos = {arrayTalla}
                     ColorZapatos = {arrayColor}
                     variables={variables2}
                     setVariables={setVariables2}
                     nombreRefid1={nombreRefPreciozapatos}
                     nombreRef2id={nombreRefTallazapatos}
                     nombreRef3id={nombreRefColorzapatos}
                     valormaximo="2000"/>:
        <FormMcuston2 TallaZapatos2 = {arrayTalla}
                      ColorZapatos2 = {arrayColor}
                      variables={variables2}
                      setVariables={setVariables2}
                      nombreRefid1={nombreRefPreciozapatos}
                      nombreRef2id={nombreRefTallazapatos}
                      nombreRef3id={nombreRefColorzapatos}
                      valormaximo="2000"/>}
        <CustomProducts productsshoes = {productozapatos} titulo="Zapatos disponibles"/>
        <Footer/>
       </div>
       
    </div>
  )
}

export default Zapatos