import React, { createContext, useEffect, useState } from 'react';
import AllProducts from '../AllProducts/AllProducts';
import NavbarArea from '../Navbar/Navbar';


// Context to store and share all products across the webpage
export const ProductContext = createContext([])


const HomePage = () => {


  // state for storing all the products
  const [allProducts, setAllProducts] = useState([]);

  // Loading all the products from database using API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);

      });
  }, []);

const products = [allProducts, setAllProducts]


    return (
        <ProductContext.Provider value={products} >
            <NavbarArea />
            <AllProducts />

        </ProductContext.Provider>
    );
};

export default HomePage;