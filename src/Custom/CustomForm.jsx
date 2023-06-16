import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const CustomForm = () => {
    const [global,setGlobal] = useState(true);
    const [error,setError] = useState(null);
    const [password,setPassword] = useState("")
    const InputCurrent = useRef(true);
    useEffect(()=>{
        if(InputCurrent.current){
            InputCurrent.current = password === ''
            return 
        }

        if (password === ''){
            setError('La contraseña debe contener al menos un caracter')
            return
        }

        if (password.match(/^\d+$/)){
            setError('La contrasena no puede comenzar con un numero')
            return
        }
        
        if (password !== 'Hillary2011'){
            setError('contrasena no valida')
            return
        }
        setError(null)
    },[password])
  return {global,setGlobal,password,error,setPassword}
}

export default CustomForm