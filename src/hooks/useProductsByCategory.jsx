import React from 'react'
import { getProductByCategory } from '../services/products';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';




 export const useProductsByCategory = (category) => {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    
    React.useEffect(() => {

const db = getFirestore();
const productCollection = collection (db, "products");
const productsQuery = query(
productsCollection , where("category", '==', category)
);


getDocs(productsQuery)
.then((snapshot) => {
setProducts(
    snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }))
);
    })
.catch((error) => console.log(error));

},[category]);
return {products};
  
};


