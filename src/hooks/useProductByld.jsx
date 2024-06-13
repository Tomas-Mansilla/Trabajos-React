import React from 'react'
import { getProductById } from '../services/products'

export const useProductByld = (id) => {
    const [products, setProducts] = React.useState([]);

    React.useEffect (() => {
    getProductById(id)
        .then((res) => {
            setProducts(res.data);
        })
        .catch((error) => {
            console.error(error);
        });
}, [id]);

return { products }
};
