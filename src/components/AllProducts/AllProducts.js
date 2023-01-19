import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ProductContext } from "../HomePage/HomePage";
import ProductCard from "../ProductCard/ProductCard";

const AllProducts = () => {

const [allProducts] = useContext(ProductContext)


  return (
    <div>
      <h3 className="text-center my-4 fw-bold">
   
        Total {allProducts?.length} Products Found
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
