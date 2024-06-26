import React from 'react';
import itemListConteinerComponent from "../components/ItemListContainerComponent";
import { useParams } from 'react-router-dom';
import {useProductsByCategory} from "../hooks/useProductsByCategory";

const category = () => {
  const {id} = useParams();

  const { products } = useProductsByCategory(id)
return <itemListConteinerComponent products={products}/>;

  
};

export default category
