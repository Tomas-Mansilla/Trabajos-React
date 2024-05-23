import React from "react";

import NavBarComponent from "./components/NavBarComponents";
import ItemListContainerComponent from "./components/ItemListContainerComponent/ItemListContainerComponent";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBarComponent />
      <ItemListContainerComponent greeting="Bienvenidos a NinfaPetshop"/>
    </>
  );
}

export default App;