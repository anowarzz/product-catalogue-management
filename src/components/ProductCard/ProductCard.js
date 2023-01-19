import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const ProductCard = ({ singleProduct }) => {


  // Destructuring all the property of a single product
  const { description, id, image, price, title } =
    singleProduct;

  // State to toggle full product description


const [showFullDescription, setShowFullDescription] = useState(false)



  return (
    <Card className="p-2 h-100 position-relative shadow-sm">
      <Card.Img
        variant="top"
        className="img-fluid"
        src={image}
        style={{ height: "350px" }}
      />
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>

        {/* If description is more than 150 words , than sliced it to 150 and if less than 150 full description shown  */}
        <Card.Text className="py-2">
          {showFullDescription
            ? description
            : description.length > 150
            ? description.slice(0, 150) + "....."
            : description}
        </Card.Text>
        <p className="position-absolute bottom-0 start-10 fw-bold fs-6">
          Price : ${price}
        </p>

        {/* Toggling buttons to show full or less product description */}
        <div className="position-absolute bottom-0 start-50 py-2">
          {showFullDescription ? (
            <Button
              variant="danger"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              Show Less
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              Read More
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
