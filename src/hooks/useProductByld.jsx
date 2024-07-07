import { getFirestore, doc, getDoc } from 'firebase/firestore';
import React from 'react'

export const useProductByld = (id) => {
const [product, setProducts] = React.useState({});
const [loading, setLoading] = React.useState(true);
const [error, setError] = React.useState(false);

    React.useEffect (() => {
const db = getFirestore();
const productsRef = doc(db, "products", id)

    getDoc(productRef)
    .then((doc) => {
        setProducts({id: doc.id, ...doc.data()});
    })
    .catch(() => setError(true))
    .finally(() => setLoading(false));
   
}, [id]);

return { products }
};
