import { useContext } from 'react'
import {CreateContext1} from "../Contexts/Context1";
const Customfilters = () => {
    const {variables,
           setVariables,
           variables2,
           setVariables2,
           variables3,
           setVariables3,
           variables4,
           setVariables4,
           variables5,
           setVariables5} = useContext(CreateContext1);

    const functionfilter = (array)=>{
        return array.filter((value)=>{
            return (
                variables.precio <= value.precio &&
            (
                variables.Talla === 'all' || 
                value.Talla === variables.Talla 
            ) && 
            (
                variables.color === 'all' || 
                value.color === variables.color
            )
         
            )
        })
    }

    //funcion de filtro para el arreglo de zapatos
    const funcionfilter2 = (array)=>{
        return array.filter((value)=>{
            return (
                variables2.precio <= value.precio && 
                (
                    variables2.Talla === 'all' || 
                    value.Talla === variables2.Talla
                ) && 
                (
                    variables2.color === 'all' ||
                    value.color === variables2.color
                )
            )
        })
    }

    //funcion de filtro para el arreglo de vestidos
    const funcionfilter3 = (array)=>{
        return array.filter((value)=>{
            return (
                variables3.precio <= value.precio && 
                (
                    variables3.Talla === 'all' || 
                    value.Talla === variables3.Talla
                ) && 
                (
                    variables3.color === 'all' ||
                    value.color === variables3.color
                )
            )
        })
    }

    //funcion de filtro para el arreglo de Pantalones
    const funcionfilter4 = (array)=>{
        return array.filter((value)=>{
            return (
                variables4.precio <= value.precio && 
                (
                    variables4.Talla === 'all' || 
                    value.Talla === variables4.Talla
                ) && 
                (
                    variables4.color === 'all' ||
                    value.color === variables4.color
                )
            )
        })
    }

    //funcion de filtro para el arreglo de Faldas
    const funcionfilter5 = (array)=>{
        return array.filter((value)=>{
            return (
                variables5.precio <= value.precio && 
                (
                    variables5.Talla === 'all' || 
                    value.Talla === variables5.Talla
                ) && 
                (
                    variables5.color === 'all' ||
                    value.color === variables5.color
                )
            )
        })
    }


  return {variables,
          setVariables,
          functionfilter,
          variables2,
          setVariables2,
          funcionfilter2,
          variables3,
          setVariables3,
          funcionfilter3,
          variables4,
          setVariables4,
          funcionfilter4,
          variables5,
          setVariables5,
          funcionfilter5}
}

export default Customfilters