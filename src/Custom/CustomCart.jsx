import React from 'react'
import { useState,useId,useRef} from 'react'
import carrito from '../Files/Add-Cart.png'
import '../Styles/Cartcustom.css'
import CustomBotom from './CustomBotom.jsx'
//import CustomAddCart from './CustomAddCart'
import CustomWhatsapp from './CustomWhatsapp'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import {CreateContext2} from '../Contexts/Context2'
import {BiMap} from 'react-icons/bi';
import { MapContainer,TileLayer,Marker,Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import Providers from '../Helpers/Providers'
import SpinnerMap from '../Componets/SpinnerMap'


function Valores({imagen,descp,precio,quantity}){
    return <li>
           <img src={imagen} alt="elemento" />
           <div>
        <strong>{descp}</strong> ${precio}
          </div>
        <footer>
        <small>
            Cantidad: {quantity}
        </small>
        <div className="enviar">
        <button type="button" class="btn btn-primary boton">Enviar pedido</button>
        </div>
       </footer>
      </li>
         
}

const CustomCart = () => {
  const zoom = 12;
  const centermap = [ 14.0818, -87.20681]
  const [coordenas,setCoordenadas] = useState([]);
  const [visualizarMapa,setVisualizarMapa] = useState(false);
  const [mensaje,setMensaje] = useState("");
  const [spinnermap,setSpinnermap] = useState(true);
  const [vista,setVista] = useState(true);
  const tiempo = setTimeout(()=>setVista(false),1000);
  //const mapref = useRef();
  const checkboxid = useId();
  const {cart,ClearCard} = useContext(CreateContext2);
    //const {cart,ClearCard} = CustomAddCart();
    const {boton,setBoton} = CustomBotom();
    const {sendMessage,setNombre,setDireccion} = CustomWhatsapp();

    const ubicacionMapa = ()=>{
      setVisualizarMapa(!visualizarMapa);
      setTimeout(()=>{
        setSpinnermap(false);
      },2000)
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
        let latitud = position.coords.latitude;
        let longitud = position.coords.longitude;
        setCoordenadas(prevState=>([
          ...prevState,
          latitud,
          longitud
        ]))
        })
      }
      else{
        setMensaje("La geolocalización no es soportada por este navegador.")
      }

    }
   
 
  return (
    <>
    <label htmlFor={checkboxid} className='cart-button'>
        <img src={carrito} alt="Icono" className='iconoCarrito' onClick={()=>{setBoton(false)}} />
    </label>
    <input type="checkbox" id={checkboxid} hidden/>
    <motion.aside className='cart'
     initial={{ opacity: 0, scale: 0.5 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ duration: 0.5 }}>
      <h3 style={{textAlign:'center'}}>Carrito de compra</h3>
      <button className='btn btn-warning' onClick={ClearCard} style={{
        display:'block', margin:'auto'
      }}>Limpiar carrito</button>
        <ul>
            {
                cart.map((carrito=>{
                    return  <li key={carrito.id}>
                    <img src={carrito.imagen} alt="elemento" style={{width:'130px',
                                                                     height:'100px',
                                                                     display:'block',
                                                                     margin:'auto'}}/>
                    <div>
                 <strong>{carrito.descp}</strong> precio: ${carrito.precio}
                   </div>
                 <footer>
                 <small>
                    Talla: {carrito.Talla}
                 </small>
                 <div className="datos">
                  <span>Escribe tu nombre</span>
                 <input type="text" className='nombre'onChange={(e)=>{setNombre(e.target.value)}}/>
                 <span>Escribe tu direccion</span>
                 <input type="text" className='nombre' onChange={(e)=>{setDireccion(e.target.value)}} />
                 </div>
                 <div className="ubicacion">
                  <span>Presiona aqui para ver tu localizacion</span>
                 <div className="icon-location" onClick={ubicacionMapa}>
                 <BiMap></BiMap>
                 </div>
                 {
                  visualizarMapa ? 
                  <div id='Mapa'
                  style={{
                    width:'350px',
                    height:'150px',
                    border: '1px solid white',
                    marginTop:'10px',
                    marginBottom:'10px'
                  }}>
                    {
                      spinnermap ? 
                     <SpinnerMap/> : 
                     <MapContainer 
                      center={tiempo ? centermap : coordenas}
                      zoom={16}>
                     <TileLayer 
                       url={Providers.maptiler.url}
                       attribution={Providers.maptiler.attribution}/>
                     <Marker position={tiempo ? centermap : coordenas}>
                       <Popup>
                        Tu ubicacion actual <br /> de tu dispositivo.
                      </Popup>
                     </Marker>
                     </MapContainer>
                    }
                 
                  {mensaje && <p>{mensaje}</p>}
                  </div>:
                  <div></div> 
                 }
                 </div>
                 <div className="enviar">
                 <button type="button" class="btn btn-primary boton" onClick={()=>sendMessage(carrito)}>Enviar pedido</button>
                 </div>
                </footer>
               </li>
            }))
                
            }
        </ul>
     
    </motion.aside>
    </>
  )
}

export default CustomCart