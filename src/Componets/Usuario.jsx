import React from 'react'
import { useState } from 'react'
import Sppiner from './Sppiner';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';
const Usuario = () => {
    const [statebegin,setStatebegin] = useState(true);
    setTimeout(()=>{
        setStatebegin(false)
    },2000)
    if (statebegin) return <Sppiner/>
  return (
    <div>
    <Navbar/>
    <ScrollToTop/>
    

    </div>
  )
}

export default Usuario