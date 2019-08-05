import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'

import {ProductTitle} from "./styles"

const ProductCard = () => {
    let data={
        prodName:"Product Name",
        prodDesc:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        prodRating:"10",
        cost:"$8989.67"
    }
  return (
    <Fragment>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://tinyurl.com/y5nmss4b" />
        <Card.Body>
          <ProductTitle>{data.prodName}</ProductTitle>
          <Card.Text>
            {data.prodDesc}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default ProductCard;
