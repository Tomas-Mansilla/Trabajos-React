import React from 'react'
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = (product) => {
  const { addToCart, removeFromCart } = React.useContext(CartContext);
  const [quality, setQuantity] = React.useState(0);

const handleAdd = () => {
setQuantity(quantity + 1);
addToCart(product, 1)
}

const handleRemove = () => {
setQuantity(quantity - 1);
removeFromCart(product, 1)
}




  return (
    <div>
      ItemDetailContainer
    </div>
  )
}

export default ItemDetailContainer
