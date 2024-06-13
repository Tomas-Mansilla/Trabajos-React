import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import home from "../pages/home";
import item from "../pages/item";
import ategory from "../pages/category";
import NavBarComponent from '../components/NavBarComponents';


const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/category" element={<Category />} />

      </Routes>


    </BrowserRouter>


  );
};

export default MainRouter
