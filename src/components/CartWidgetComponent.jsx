import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import useProducts from "../hooks/useCollecionItems";
import CartContext from "../context/CartContext";

const CartWidgetComponent = () => {

const {cart} = React.useContext(CartContext);

const totalItems = cart.reduce((total, item) => total + item.quantity, 0)



console.log(cart)

  const customStyles = {
    color: "white",
    fontSize: "1.3rem",
    marginRight: "0.5rem",
  };

  const {products} = useProducts();


  return (
    <div>
      <FontAwesomeIcon icon={faCartPlus} style={customStyles} />
      <span style={customStyles}>{totalItems}</span>
    </div>
  );
};

export default CartWidgetComponent;