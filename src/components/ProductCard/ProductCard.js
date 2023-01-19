import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const ProductCard = ({ singleProduct }) => {
  console.log(singleProduct);

  // Destructuring all the property of a single product
  const { category, description, id, image, price, rating, title } =
    singleProduct;

  // State to toggle full product description

  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <Card className="p-2">
      <Card.Img variant="top" src={image} style={{ height: "320px" }} />
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text>
          {showFullDescription
            ? description
            : description?.slice(0, 150) + "..."}
        </Card.Text>

        {showFullDescription ? (
          <Button
            variant="primary"
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            Hide Description
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            Read More
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
