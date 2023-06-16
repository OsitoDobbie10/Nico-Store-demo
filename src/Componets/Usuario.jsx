import React from 'react'
import { useState } from 'react'
import Sppiner from './Sppiner';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';
import FormIntro from './FormIntro';
import Productosempleado from './Productosempleado';
const Usuario = () => {
  const [statebegin,setStatebegin] = useState(true);
  const [Lorem1,setLorem1] = useState(true);
  setTimeout(()=>{
      setStatebegin(false)
  },2000)
  if (statebegin) return <Sppiner/>
return (
  <div>
  <Navbar/>
  <ScrollToTop/>
  {Lorem1 ? <FormIntro setLorem1={setLorem1}/>:
            <Productosempleado/>}
  </div>
)}

export default Usuario