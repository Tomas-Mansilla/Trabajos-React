import React from 'react'
import ItemListContainerComponent from '../components/ItemListContainerComponent';
const home = () => {}
import { useCollecionItems } from '../hooks/useCollecionItems';
const Home = () => {
const { items, loading } = useCollecionItems("products");





  return loading ? (
    <LoaderComponent />
  ) : (
    
      <ItemListContainerComponent products={items} />
  );
  
};

export default home
