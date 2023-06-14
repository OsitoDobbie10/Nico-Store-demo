import React from 'react';
import { useId } from 'react';
import "./Formularios.css";
import Imagen from "../Files/Add-Cart.png";
import Customfilters from "../Custom/Customfilters"
const Formularios = () => {
  const {variables,setVariables} = Customfilters();
  const categoryTallaFilterId = useId();
  const categoryColorFilterId = useId();
  const minPriceFilterId = useId();

  const changeTalla = (e)=>{
    setVariables(prevState=>({
      ...prevState,
      Talla: e.target.value
    }))
  }

  const changecolor = (e)=>{
    setVariables(prevState=>({
      ...prevState,
      color: e.target.value
    }))
  }

  const changeprecio = (e)=>{
    setVariables(prevState=>({
      ...prevState,
      precio: e.target.value
    }))
  };
  return (
    <div className='Formulario'>
      <div className='Titulo'>
        <h2>Filtros</h2>
        <img src={Imagen} alt="Agregar" />
      </div>
      <div className="Cuerpo">
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Precio
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input onChange={changeprecio}
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          value={variables.precio}
        />
        <span>{`${variables.precio}$`}</span>
   </div>
    </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Talla
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div>
        <label htmlFor={categoryTallaFilterId}>Filtro talla</label>
        <select id={categoryTallaFilterId} onChange={changeTalla}>
          <option value='all'>Todas</option>
          <option value='M'>Talla M</option>
          <option value='L'>Talla L</option>
          <option value='S'>Talla S</option>
        </select>
      </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Color
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div>
        <label htmlFor={categoryColorFilterId}>Filtro color</label>
        <select id={categoryColorFilterId} onChange={changecolor}>
        <option value='all'>Todas</option>
          <option value='Rosada'>Rosada</option>
          <option value='Negro'>Negro</option>
          <option value='Amarillo'>Amarillo</option>
          <option value='Naraja'>Naraja</option>
          <option value='Blanco'>Blanco</option>
          <option value='Azul'>Azul</option>
        </select>
      </div>
      </div>
    </div>
  </div>
</div>
      </div>

    </div>
  )
}

export default Formularios