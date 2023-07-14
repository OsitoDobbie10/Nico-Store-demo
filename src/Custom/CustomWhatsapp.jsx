import CustomAddCart from './CustomAddCart'
import { useState } from 'react';

const CustomWhatsapp = () => {
    
    const {cart} = CustomAddCart();
    const [nombre,setNombre] = useState("")
    const [direccion,setDireccion] = useState("");
    const sendMessage = (carrito)=>{
        const objeto = cart.find((value)=> value.id === carrito.id)
        const Descripcionproducto = objeto.descp;
        const producto = Descripcionproducto.split(' ')[0];
        const Tallaproducto = objeto.Talla;
        const Colorproducto = objeto.color;
        const IDproducto = objeto.id;
        const telefono = 96613735;
        const date = Date.now();
        const formatearfecha = (fecha)=>{
          const nuevafecha = new Date(fecha);
          const opciones = {
              year:'numeric',
              month:'long',
              day: '2-digit'
          }
          const final = nuevafecha.toLocaleDateString('es-ES',opciones);
          return final
      }
      const fecha = formatearfecha(date);


      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
        let latitud = position.coords.latitude;
        let longitud = position.coords.longitude;
        //URL de API de Whatsapp
        
        const url = `https://api.whatsapp.com/send?phone=504${telefono}&text=
        *Asunto producto en venta*%0A
        *NC Store*%0A%0A
        *Nombre de la persona que solicito producto llevara ${producto}*%0A
        ${nombre}%0A
        *Producto que se llevara*%0A
        ${Descripcionproducto}%0A
        *Direccion del cliente*%0A
        ${direccion}%0A
        *Coordenadas de ubicacion del pedido*%0A
        Latitud: ${latitud} , longitud: ${longitud}*%0A
        *ID del producto de ${producto}*%0A
        ${IDproducto}%0A
        *Talla del producto que se compra*%0A
        ${Tallaproducto}%0A
        *Color del producto escogido*%0A
        ${Colorproducto}%0A 
        *Fecha en la que se pidió  el producto escogido*%0A
        ${fecha}%0A`;
        window.open(url);
      })
      }
      else{
        alert('No esta disponible la localizacion');
      }

    }
   
    
  return{sendMessage,setNombre,setDireccion}
}

export default CustomWhatsapp