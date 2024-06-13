import React from 'react'
import { useProductByld } from '../hooks/useProductByld';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

const item = () => {
const {product} = useProductByld();
return(
  <ItemDetailContainer product={product} />
)
 
}

export default item
