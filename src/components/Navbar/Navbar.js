import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ProductContext } from "../HomePage/HomePage";
import './Navbar.css'



function NavbarArea({ loading, setLoading }) {
  // all products from product context
  const [allProducts, setAllProducts, categories] = useContext(ProductContext);

  // state for search keywords
  // const [searchQuery, setSearchQuery] = useState("")

  // Filtering products according according category name selected
  const filteredProduct = (e) => {
    const categoryName = e.target.value;

    setLoading(true);
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllProducts(data);
        setLoading(false);
      });
  };

  // Displaying products according to search result

  // const searchProduct = (e) => {

  //   const searchQuery = e.target.value;
  //   setSearchQuery(searchQuery)

  //   const searchProduct = allProducts.filter(product => product?.title?.includes(searchQuery))
  //   setAllProducts(searchProduct)

  // }

  return (
    <Navbar className="bg-light py-4 font-poppins" expand="md">
      <Container fluid>
        <Navbar.Brand className="text-dark fw-bold fs-4 ps-4 ">
          <NavLink className="fs-3">
            <span>C</span>
            <span>a</span>
            <span>t</span>
            <span>a</span>
            <span>l</span>
            <span>o</span>
            <span>g</span>
            <span>u</span>
            <span>e</span>  <span>M</span>
            <span>a</span>
            <span>n</span>
            <span>a</span>
            <span>g</span>
            <span>e</span>
            <span>r</span>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0"></Nav>

          {/* Filtering Product according category */}
          <div className="text-center text-md-end w-100">
            <select
              className="px-4 outline-primary py-1 mx-3"
              name="category"
              id=""
              onChange={filteredProduct}
            >
              <option>All Category</option>

              {categories?.map((category, i) => (
                <option key={i} value={category}>
                  {category}{" "}
                </option>
              ))}
            </select>
          </div>

          {/* Searching product using product name keywords */}
          <Form className="d-flex flex-column flex-md-row mt-3 mt-md-0 gap-2 md-gap-0">
            <Form.Control
              type="search"
              placeholder="Search Here"
              className="fs-7"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarArea;
