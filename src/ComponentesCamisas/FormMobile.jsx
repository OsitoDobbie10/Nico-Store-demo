import React, { useId } from 'react';
import "./FormMobile.css";
import Customfilters from "../Custom/Customfilters"
const FormMobile = () => {
  const {variables,setVariables} = Customfilters();
  const categoryTallaFiltermobile = useId();
  const categoryColorFiltermobile = useId();
  const minPriceFiltermonile = useId();

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
<div className='Mobile'>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Filtro.
</button>
<div class="modal fade modal-sm" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Filro de Ropa</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
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
        <label htmlFor={minPriceFiltermonile}>Precio a partir de:</label>
        <input onChange={changeprecio}
          type='range'
          id={minPriceFiltermonile}
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
        <label htmlFor={categoryTallaFiltermobile}>Filtro talla</label>
        <select id={categoryTallaFiltermobile} onChange={changeTalla}>
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
        <label htmlFor={categoryColorFiltermobile}>Filtro color</label>
        <select id={categoryColorFiltermobile} onChange={changecolor}>
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
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default FormMobile