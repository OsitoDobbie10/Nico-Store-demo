import React, { useEffect, useState } from 'react';
import '../Styles/Productosempleados..css';
import { useId } from 'react';
import Custom1 from '../CustomProductos/Custom1';
import camisas from '../DB/Camisas';
import zapatos from '../DB/Zapatos';
import vestidos from '../DB/Vestidos';
import Pantalones from '../DB/Pantalones';
import faldas from '../DB/Faldas';
import ra from '../Files/Camisa.png'
import { motion } from 'framer-motion';
const Productosempleado = () => {
    const Inputselect = useId();
    const IdInput = useId();
    const cat = ['Camisas','Zapatos','Vestidos','Faldas','Pantalones'];
    const {inputIdstate,errorId,obtenercategoeria,obtenervalor,inputIcat} = Custom1();
    const objeto = {
        id:1,
        Talla:'M',
        color:'Rosada',
        precio:450,
        descp:'Blusa color rosada',
        imagen:ra
    }
    const [producto,setProducto] = useState({});
    const Buscar = (e)=>{
        e.preventDefault();
        if(inputIcat === 'Camisas'){
          const objetocamisa = camisas.find((value)=>value.id === Number(inputIdstate))
          const newobjeto = {
            id:objetocamisa.id,
            Talla:objetocamisa.Talla,
            color:objetocamisa.color,
            precio:objetocamisa.precio,
            descp:objetocamisa.descp,
            imagen:objetocamisa.imagen
          }
          setProducto(newobjeto)
        }
        if(inputIcat === 'Zapatos'){
            const objetozapatos = zapatos.find((value)=>value.id === Number(inputIdstate))
            const newobjeto = {
              id:objetozapatos.id,
              Talla:objetozapatos.Talla,
              color:objetozapatos.color,
              precio:objetozapatos.precio,
              descp:objetozapatos.descp,
              imagen:objetozapatos.imagen
            }
            setProducto(newobjeto)
           
        }
        if(inputIcat === 'Vestidos'){
            const objetovestidos = vestidos.find((value)=>value.id === Number(inputIdstate))
            const newobjeto = {
              id:objetovestidos.id,
              Talla:objetovestidos.Talla,
              color:objetovestidos.color,
              precio:objetovestidos.precio,
              descp:objetovestidos.descp,
              imagen:objetovestidos.imagen
            }
            setProducto(newobjeto)
            
        }
        if(inputIcat === 'Faldas'){
            const objetofaldas = faldas.find((value)=>value.id === Number(inputIdstate))
            const newobjeto = {
              id:objetofaldas.id,
              Talla:objetofaldas.Talla,
              color:objetofaldas.color,
              precio:objetofaldas.precio,
              descp:objetofaldas.descp,
              imagen:objetofaldas.imagen
            }
            setProducto(newobjeto)
        }
        if(inputIcat === 'Pantalones'){
            const objetopantalones = Pantalones.find((value)=>value.id === Number(inputIdstate))
            const newobjeto = {
              id:objetopantalones.id,
              Talla:objetopantalones.Talla,
              color:objetopantalones.color,
              precio:objetopantalones.precio,
              descp:objetopantalones.descp,
              imagen:objetopantalones.imagen
            }
            setProducto(newobjeto)
        }
            

    }
  return (
    <div className='Formato'>
        <h2 style={{textAlign:'center'}}>Busqueda de productos</h2>
        <form className='formularioproducts' onSubmit={Buscar}>
            <label  htmlFor = {Inputselect} className='Categoria'>
                Seleccione el producto que el cliente compro
            </label>
            <select className='SelectCategoria' 
                    id={Inputselect}
                    onChange={obtenercategoeria}>
                {
                    cat.map((categoria,index)=>{
                        return <option key={index} value={categoria}>{categoria}</option>})
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
        <div className="resultdosbusqueda">
        <motion.div 
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
        className="productocompra">
                <h4>Nombre Articulo: {producto.descp}</h4>
                <img src={producto.imagen} alt={producto.descp} />
                <span>Talla: {producto.Talla}</span>
                <span>Color: {producto.color}</span>
                <span>Precio: {producto.precio} Lps.</span>
        </motion.div>
            
        </div>
    </div>
  )
}

export default Productosempleado