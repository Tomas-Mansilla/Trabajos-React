import React from 'react'
import { getAllProducts } from "../services/products"
import { collection, getDocs, getFirestore } from 'firebase/firestore'
const useProducts = () => {}
    export const useCollecionItems = (collectionName) => {
    const [items, setItems] = React.useState([]);
    const [loading, setLoading] = React.useState(true);


    React.useEffect(() => {
        const db = getFirestore();

        const itemsCollection = collection(db, "products");

        getDocs(itemsCollection)
        .then((snapshot) => {
            setProducts(
                snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        );
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))





    }, []);

    return { products };

};


export default useProducts