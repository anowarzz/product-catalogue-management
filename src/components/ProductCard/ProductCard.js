import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const ProductCard = ({ singleProduct }) => {
  console.log(singleProduct);

  const { category, description, id, image, price, rating, title } =
    singleProduct;

  return (

<Container>

    <Row>

<Col>
<Card >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
    {description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
</Container>

  );
};

export default ProductCard;
