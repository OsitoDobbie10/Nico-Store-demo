import React from 'react'
import { useState } from 'react'
import Sppiner from './Sppiner';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';
import FormIntro from './FormIntro';
import Productosempleado from './Productosempleado';
import CustomForm from "../Custom/CustomForm";
const Usuario = () => {
  const [statebegin,setStatebegin] = useState(true);
  const {global,setGlobal} = CustomForm();
  setTimeout(()=>{
      setStatebegin(false)
  },2000)
  if (statebegin) return <Sppiner/>
return (
  <div>
  <Navbar/>
  <ScrollToTop/>
  {global ? <FormIntro/>:
            <Productosempleado/>}
  </div>
)}

export default Usuario