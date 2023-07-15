import React from 'react';
import CustomForm from '../Custom/CustomForm';
import "../Styles/FormIntro.css"

const FormIntro = (props) => {
    const {setLorem1} = props;
    const {password,setPassword,error,invalido,setInvalido} = CustomForm();
    const cambiarvalores = (texto)=>{
      let palabra = ''
      for (let i=0; i< texto.length; i++){
           palabra += '*';
          }
          return palabra
    }
    const Validar = (event)=>{
      event.preventDefault();
      if (password === '1993'){
        setLorem1(false)
      }
      else{
        setInvalido('Contraseña invalida, prueba de nuevo')
      }
      

    }
  return (
    <div className='Formulario101'>
        <div className="formelemento">
            <h2>Bienvenido</h2>
            <span> Introduce tu contraseña de empleado para ver el panel</span>
            <form className='form' onSubmit={Validar}>
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
                 {invalido && <span className='Invalido'>{invalido}</span> }
            </form>
        </div>
    </div>
  )
}

export default FormIntro