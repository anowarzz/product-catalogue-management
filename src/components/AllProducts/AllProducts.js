import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const AllProducts = () => {

 // state for storing all the products  
const [allProducts, setAllProducts] = useState([]);



// Loading all the products from database using API
useEffect( () => {

    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data =>{
        setAllProducts(data)
        console.log(data);
        
    })

    console.log(allProducts);
    

}, [])

    return (
        <div>
            <h3 className='text-center my-4'> Total Products {allProducts?.length}</h3>

        {
            allProducts && allProducts?.map(singleProduct => <ProductCard key={singleProduct.id} product = {singleProduct} /> )
        }


        </div>
    );
};

export default AllProducts;