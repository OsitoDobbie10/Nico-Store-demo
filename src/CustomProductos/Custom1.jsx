import { useState, useEffect, useRef} from 'react'
const Custom1 = () => {
  const [inputIdstate,setInputIdstate] = useState(""); 
  const [inputIcat,setInputIcat] = useState(""); 
  const [errorId,setErrorId] = useState(null);
  const refId = useRef(null);
  useEffect(()=>{
    if(refId.current){
        refId.current = inputIdstate === '';
        return 
      } 
    if(inputIdstate === ''){
        setErrorId('Ingresa bien el numero del ID')
        return
    }
    setErrorId(null)    
  },[inputIdstate])
  const obtenervalor = (e)=>{
    setInputIdstate(e.target.value)
  }
  const obtenercategoeria = (e)=>{
    setInputIcat(e.target.value);
  }
  return {inputIdstate,errorId,obtenervalor,inputIcat,obtenercategoeria}
}

export default Custom1;