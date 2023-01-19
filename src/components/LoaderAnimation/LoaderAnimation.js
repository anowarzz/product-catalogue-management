import React from "react";
import { Button, Spinner } from "react-bootstrap";

const LoaderAnimation = () => {
  return (
<div className="container-fluid text-center mt-10">
<Button variant="primary" disabled>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      Loading...
    </Button>
</div>
  );
};

export default LoaderAnimation;
