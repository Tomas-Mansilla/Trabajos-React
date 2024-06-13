import React from "react";

import NavBarComponent from "./components/NavBarComponents";
import ItemListContainerComponent from "./components/ItemListContainerComponent";

import "bootstrap/dist/css/bootstrap.min.css";
import MainRouter from "./routes/MainRouter";


function App() {
  return (
    <>
     <MainRouter/>
    </>
  );
}

export default App;