import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";

const AllProducts = () => {
  // state for storing all the products
  const [allProducts, setAllProducts] = useState([]);

  // Loading all the products from database using API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        console.log(data);
      });

    console.log(allProducts);
  }, []);

  return (
    <div>
      <h3 className="text-center my-4">
   
        Total Products {allProducts?.length}
      </h3>

      <div className="container">
        <div className="row">
          {allProducts?.map((singleProduct) => (
            <div className="col-12 p-3 col-md-6 col-lg-4" key={singleProduct?.id}>
              <ProductCard  singleProduct={singleProduct} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
