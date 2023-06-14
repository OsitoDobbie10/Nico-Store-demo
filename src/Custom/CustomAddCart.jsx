
import { useContext } from 'react'
import {CreateContext2} from '../Contexts/Context2';

const CustomAddCart = () => {
  const cart = useContext(CreateContext2);

  if (cart === undefined){
    throw new Error('Use Cart not be used within Provider');
  }
  return cart
}

export default CustomAddCart