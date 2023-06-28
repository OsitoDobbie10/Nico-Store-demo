import camisas from '../DB/Camisas';
import zapatos from '../DB/Zapatos';
import vestidos from '../DB/Vestidos';
import pantalones from '../DB/Pantalones';
import faldas from '../DB/Faldas';
import ran from '../Files/Add-Cart.png'
const Custombusqueda = () => {
   const types = {
    Camisas:'Camisas',
    Zapatos:'Zapatos',
    Vestidos:'Vestidos',
    Faldas:'Faldas',
    Pantalones:'Pantalones'};

    const InicialValue = {
        camisas: camisas,
        zapatos: zapatos,
        vestidos:vestidos,
        pantalones:pantalones,
        faldas:faldas,
        producto:{id:1,
                  Talla:'S',
                  Color:'Negro',
                  precio:2500,
                  descp:'Camisa Negra Javascript',
                  imagen:ran}}

    const reducer = (state,action) =>{
        const {type:actiontype,payload:actionpayload} = action;
        switch (actiontype) {
            case types.Camisas:{
                //const {id} = actionpayload
                const camisa = state.camisas.find((camisa)=>camisa.id === actionpayload)
                return {...state,producto:camisa}
            }
            case types.Zapatos:{
                ////const {id} = actionpayload;
                const zapatos = state.zapatos.find((zapato)=>zapato.id === actionpayload)
                return {...state,producto:zapatos}
            }
            case types.Vestidos:{
                //const {id} = actionpayload;
                const vestidos = state.vestidos.find((vestido)=>vestido.id === actionpayload)
                return {...state,producto:vestidos}
            }
            case types.Pantalones:{
                //const {id} = actionpayload;
                const pantalones = state.pantalones.find((pantalon)=>pantalon.id === actionpayload)
                return {...state,producto:pantalones}
            }
            case types.Faldas:{
                //const {id} = actionpayload;
                const faldas = state.faldas.find((pantalon)=>pantalon.id === actionpayload)
                return {...state,producto:faldas}
            }
            default:
                return state
        }
    }

    return {types,InicialValue,reducer}
    
}

export default Custombusqueda;
