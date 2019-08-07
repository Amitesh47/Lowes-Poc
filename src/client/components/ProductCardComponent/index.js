import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";

import {
  ProductTitle,
  ProductDesc,
  ProductPrice,
  AddToCartButon,
  CartCount,
  CartCountButton,
  ProductRatings,
  ProductImage,
  ProductConatiner,
  CountContainer,
  CartButtonImage
} from "./styles";

const ProductCard = () => {
  let data = {
    prodName: "Product Name",
    prodDesc:
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    prodRating: "10",
    cost: "$8989.67"
  };
  return (
    <Fragment>
      <ProductConatiner>
        <Card style={{ width: "16.5rem" }}>
          {/* <Card.Img variant="top" src="https://tinyurl.com/y5nmss4b" /> */}

          <Card.Body>
            <ProductImage src="https://tinyurl.com/y5nmss4b" />
            <ProductTitle>{data.prodName}</ProductTitle>
            <ProductDesc>{data.prodDesc}</ProductDesc>
            <ProductRatings>({data.prodRating})</ProductRatings>
            <ProductPrice>{data.cost}</ProductPrice>
            <div>
              <AddToCartButon>Add to Cart</AddToCartButon>
              <CountContainer>
                <CartCountButton>                
                  <CartButtonImage src={require("../../../../utils/assets/subIcon.png")} alt="Add To Cart" />                            
                </CartCountButton>
                <CartCount>1</CartCount>
                <CartCountButton>
                  <CartButtonImage src={require("../../../../utils/assets/addIcon.png")} alt="Add To Cart" />                  
                </CartCountButton>
              </CountContainer>
            </div>
          </Card.Body>
        </Card>
      </ProductConatiner>
    </Fragment>
  );
};

export default ProductCard;
