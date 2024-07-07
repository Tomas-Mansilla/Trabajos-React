import React from 'react'

export const CartContext = React.createContext();


const CartProvider = ({children}) => {

const [cart, setCart] = React.useState([]);


  return (<CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>

);



};

export default CartContext
