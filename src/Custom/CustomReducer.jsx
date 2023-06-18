import { useReducer } from "react";
export const Inicialvalue = [];
export const reducer = (state,action)=>{
    const {type: actiontype,payload:actionpayload} = action
    switch(actiontype){
        case 'ADD_TO_CART':
            const {id} = actionpayload;
            const productValid = state.findIndex(item=>item.id === id);
            if (productValid > 0){
                //copia de nuestro arreglo
                const newstate = structuredClone(state);
                newstate[productValid].quantify += 1;
                return newstate
            }

            return [
                ...state,
                {
                    actionpayload,
                    quantify:1
                }
            ]
        case 'REMOVE_CART':{
            const {id} = actionpayload;
            return state.filter(item=> item.id !== id);
        }

        case 'CLEAN_CART':{
            return Inicialvalue
        }
           
    }
    return state
}

const [state,dispatch] = useReducer(reducer,Inicialvalue)
  const addCart = (product)=>dispatch({
    type:'ADD_TO_CART',
    payload: product
  });

  const removeCart = (product)=>dispatch({
    type:'REMOVE_CART',
    payload: product
  })

  const ClearCard = ()=>dispatch({type:'CLEAN_CART'})