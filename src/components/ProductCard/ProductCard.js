import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const ProductCard = ({ singleProduct }) => {
  console.log(singleProduct);

// Destructuring all the property of a single product
  const { category, description, id, image, price, rating, title } =
    singleProduct;

  return (


<Card className="p-2">
      <Card.Img variant="top" src={image} style={ {height: '320px'}}/>
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text>
    {description}
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>


  );
};

export default ProductCard;
