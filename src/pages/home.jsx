import React from 'react'
import ItemListContainerComponent from '../components/ItemListContainerComponent';
const home = () => {

const {products} = useProducts();




  return (
    <>
      <ItemListContainerComponent products={products} />
    </>
  )
}

export default home
