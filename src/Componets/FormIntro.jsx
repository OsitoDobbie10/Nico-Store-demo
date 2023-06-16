import React from 'react';
import CustomForm from '../Custom/CustomForm';
import "../Styles/FormIntro.css"

const FormIntro = () => {
    const {password,setPassword,error} = CustomForm();
    const cambiarvalores = (texto)=>{
      let palabra = ''
      for (let i=0; i<texto.length; i++){
           palabra += '*';
          }
          return palabra
    }
  return (
    <div className='Formulario'>
        <div className="formelemento">
            <h2>Bienvenido</h2>
            <span> Introduce tu contraseña de empleado para ver el panel</span>
            <form className='form'>
                <input
                 onChange={(e)=>setPassword(e.target.value)}
                 type="text"
                 value={cambiarvalores(password)}
                 placeholder='Introduce la contraseña' 
                 style={{
                    borderColor: error ? 'red' : 'transparent'
                 }}/>
                 {error && <p className='ErrorPassword'>{error}</p>}
                 <button type="submit" className='btn btn-dark'>Confirmar empleado</button>
            </form>
        </div>
    </div>
  )
}

export default FormIntro