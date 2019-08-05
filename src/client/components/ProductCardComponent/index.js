import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";

import {ProductTitle,ProductDesc,ProductPrice,AddToCartButon,CartCount,CartCountButton, ProductRatings} from "./styles"

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
          <ProductDesc>
            {data.prodDesc}
          </ProductDesc>
          <ProductRatings>({data.prodRating})</ProductRatings>
          <ProductPrice>{data.cost}</ProductPrice>
          <div>
            <AddToCartButon>Add to Cart</AddToCartButon>
            <CartCountButton>-</CartCountButton>
            <CartCount>1</CartCount>
            <CartCountButton>+</CartCountButton>            
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default ProductCard;
