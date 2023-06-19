import React from 'react';
import '../Styles/Productosempleados..css';
import { useId } from 'react';
import Custom1 from '../CustomProductos/Custom1';

const Productosempleado = () => {
    const Inputselect = useId();
    const IdInput = useId();
    const cat = ['Camisas','Zapatos','Vestidos','Faldas','Pantalones'];
    const {inputIdstate,errorId,obtenervalor} = Custom1();    
  return (
    <div className='Formato'>
        <h2 style={{textAlign:'center'}}>Busqueda de productos</h2>
        <form className='formularioproducts'>
            <label  htmlFor = {Inputselect} className='Categoria'>
                Seleccione el producto que el cliente compro
            </label>
            <select className='SelectCategoria' id={Inputselect}>
                {
                    cat.map((categoria)=>{
                        return <option value={categoria}>{categoria}</option>
                    })
                }
            </select>
            <label htmlFor={IdInput} className='Id'>
                Escriba el ID del producto que compro el cliente
            </label>
            <input type="text"
                   id={IdInput}
                   placeholder='Escriba el ID'
                   value={inputIdstate}
                   onChange={obtenervalor}
                   className='IDInput' />
            {
                errorId&& <p style={{textAlign:'center',
                             color:'red',
                             fontSize:'10px'}}>{errorId}</p>
            }
            <button type="submit" className='btn btn-info mb-2 mt-2'>Buscar</button>
        </form>
        <div className="resultdos=busqueda">

        </div>
    </div>
  )
}

export default Productosempleado