import React from 'react'
import {getAllProducts} from "../services/products"
const useProducts = () => {
    const [products, setProducts] = React.useState([]);


    React.useEffect(() => {
        getAllProducts()
            .then((res) => {
                setProducts(response.data.products);

            })
            .catch((error) => {
                console.error(error);
            });


    }, []);

    return { products };

};


export default useProducts
