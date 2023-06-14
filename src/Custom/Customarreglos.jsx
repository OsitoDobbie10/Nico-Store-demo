import { useState } from 'react'
import shirt from '../DB/Camisas'
import Zapatos from '../DB/Zapatos'
import Vestidos from "../DB/Vestidos"
import Faldas from "../DB/Faldas"
import Pantalones from "../DB/Pantalones"
const Customarreglos = () => {
//funcion para arreglar el valor del array
const moveLastToFirst = (array)=>{
  let lastvalue = array[array.length - 1];
  for (let i = array.length - 2; i>=0; i--){
    array[i - 1] = array[i];
  }
  array[0] = lastvalue;
  return array
}
//Talla
const arreglo = [... new Set(shirt.map(shirt=>shirt.Talla))];
const TallaCamisas = arreglo.filter((value,index)=>arreglo.indexOf(value) === index);
TallaCamisas.push('all');
const [arraTallaCamisas,setArrayTallaCamisas] = useState(TallaCamisas);
const arreglo1 = [...new Set(Zapatos.map(shoes=>shoes.Talla))];
const TallaZapatos = arreglo1.filter((value,index)=>arreglo1.indexOf(value) === index);
TallaZapatos.push('all');
const [arrayTalla, setArrayTalla] = useState(TallaZapatos);
const arreglo2 = [...new Set(Vestidos.map(dress=>dress.Talla))];
const TallaVestidos = arreglo2.filter((value,index)=>arreglo2.indexOf(value) === index);
TallaVestidos.push('all');
const [arrayTalla2 , setArrayTalla1] = useState(TallaVestidos);
const arreglo3 = [...new Set(Faldas.map(skirt=>skirt.Talla))];
const TallaFaldas = arreglo3.filter((value,index)=>arreglo3.indexOf(value) === index);
TallaFaldas.push('all');
const [arrayTalla3,setArrayTalla3] = useState(TallaFaldas)
const arreglo4 = [...new Set(Pantalones.map(pants=>pants.Talla))];
const TallaPantalones = arreglo4.filter((value,index)=>arreglo4.indexOf(value) === index);
TallaPantalones.push('all');
const [arrayTalla4,setArrayTalla4] = useState(TallaPantalones)
//Vestidos
const arreglo9 = [... new Set(shirt.map(shirt=>shirt.color))];
const ColorCamisas = arreglo9.filter((value,index)=>arreglo9.indexOf(value) === index);
ColorCamisas.push('all');
const [arrayaCamisasColor,setArrayCamisasColor] = useState(ColorCamisas);
const arreglo5 = [...new Set(Zapatos.map(shoes=>shoes.color))];
const ColorZapatos = arreglo5.filter((value,index)=>arreglo5.indexOf(value) === index);
ColorZapatos.push('all');
const [arrayColor, setArrayColor] = useState(ColorZapatos);
const arreglo6 = [...new Set(Vestidos.map(dress=>dress.color))];
const ColorVestidos = arreglo6.filter((value,index)=>arreglo6.indexOf(value) === index);
ColorVestidos.push('all');
const [arrayColor2 , setArrayColor2] = useState(ColorVestidos);
const arreglo7 = [...new Set(Faldas.map(skirt=>skirt.color))];
const ColorFaldas = arreglo7.filter((value,index)=>arreglo7.indexOf(value) === index);
ColorFaldas.push('all');
const [arrayColor3,setArrayColor3] = useState(ColorFaldas)
const arreglo8 = [...new Set(Pantalones.map(pants=>pants.color))];
const ColorPantalones = arreglo8.filter((value,index)=>arreglo8.indexOf(value) === index);
ColorPantalones.push('all');
const [arrayColor4,setArrayColor4] = useState(ColorPantalones)
  return (
    {arraTallaCamisas,
    arrayTalla,
    TallaZapatos,
    arrayTalla2,
    TallaVestidos,
    arrayTalla3,
    TallaFaldas,
    arrayTalla4,
    TallaPantalones,
    arrayaCamisasColor,
    arrayColor,
    ColorZapatos,
    arrayColor2,
    ColorVestidos,
    arrayColor3,
    ColorFaldas,
    arrayColor4,
    ColorPantalones}
  )
}

export default Customarreglos