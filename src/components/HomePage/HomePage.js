import React, { createContext, useEffect, useState } from 'react';
import AllProducts from '../AllProducts/AllProducts';
import AnalyseModal from '../AnalyseModal/AnalyseModal';
import NavbarArea from '../Navbar/Navbar';


// Context to store and share all products across the webpage
export const ProductContext = createContext([])


const HomePage = () => {


  // state for storing all the products
  const [allProducts, setAllProducts] = useState([]);

  // loading state for animation while calling api
  const [loading, setLoading] = useState(false)

  // Loading all the products from database using API
  useEffect(() => {
    setLoading(true)
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setLoading(false)

      });
  }, []);

const products = [allProducts, setAllProducts, loading, setLoading]


    return (
        <ProductContext.Provider value={products} >
            <NavbarArea loading={loading} setLoading={setLoading}/>
            <AllProducts loading={loading} setLoading={setLoading} />
            <AnalyseModal />

        </ProductContext.Provider>
    );
};

export default HomePage;