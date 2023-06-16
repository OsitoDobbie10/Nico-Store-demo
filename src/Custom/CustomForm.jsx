import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const CustomForm = () => {
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

        if (password.length < 3){
            setError('La contraseña contiene mas de 3 caracteres no es valida')
            return
        }

        if (password.match(/^\d+$/)){
            setError('La contrasena no puede comenzar con un numero')
            return
        }
    
    },[password])
  return {password,error,setPassword}
}

export default CustomForm