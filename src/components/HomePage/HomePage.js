import React, { createContext, useEffect, useState } from 'react';
import AllProducts from '../AllProducts/AllProducts';
import ChartModal from '../ChartModal/ChartModal';
import NavbarArea from '../Navbar/Navbar';


// Context to store and share all products across the webpage
export const ProductContext = createContext([])


const HomePage = () => {


  // state for storing category Names
  const [categories, setCategories] = useState([]);


  // Loading the products category Names
  useEffect(() => {
setLoading(true)
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false)
      });
  }, []);



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

const products = [allProducts, setAllProducts, categories]



    return (
        <ProductContext.Provider value={products} >
            <NavbarArea loading={loading} setLoading={setLoading}/>
            <AllProducts loading={loading} setLoading={setLoading} />
            <ChartModal />
        </ProductContext.Provider>
    );
};

export default HomePage;