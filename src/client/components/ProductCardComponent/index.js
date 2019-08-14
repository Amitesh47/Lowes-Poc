import React, { Fragment, useEffect, useCallback } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from 'react-redux'

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
  const data1 = useSelector(state => state)
  const dispatch = useDispatch()
  // console.log(data1)

  useEffect(() => {
    dispatch({ type: 'GET_DATA' })
  },[])



  return (
    <Fragment>
      <ProductConatiner>
        <h3 data-test="H3Category">Category 1</h3>
        <Card style={{ width: "16.5rem" }}>
          {/* <Card.Img variant="top" src="https://tinyurl.com/y5nmss4b" /> */}
          <Card.Body data-test="ProductCard">
            <ProductImage src="https://tinyurl.com/y5nmss4b" data-test="ProductImage" />
            <ProductTitle data-test="ProductTitle">{data.prodName}</ProductTitle>
            <ProductDesc data-test="ProductDesc">{data.prodDesc}</ProductDesc>
            <ProductRatings data-test="ProductRatings">({data.prodRating})</ProductRatings>
            <ProductPrice data-test="ProductCost">{data.cost}</ProductPrice>
            <div>
              <AddToCartButon data-test="AddToCartButton">Add to Cart</AddToCartButon>
              <CountContainer>
                <CartCountButton>
                  <CartButtonImage data-test="DecrementCountButton" src="../../../../utils/assets/subIcon.png" alt="Remove From Cart" />
                  {/* <CartButtonImage src={require("../../../../utils/assets/subIcon.png")} alt="Remove From Cart" />                             */}
                </CartCountButton>
                <CartCount>1</CartCount>
                <CartCountButton>
                  {/* <CartButtonImage src={require("../../../../utils/assets/addIcon.png")} alt="Add To Cart" />                  */}
                  <CartButtonImage data-test="IncrementCountButton" src="../../../../utils/assets/addIcon.png" alt="Add To Cart" />
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
