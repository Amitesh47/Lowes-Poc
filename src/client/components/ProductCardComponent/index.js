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
  CartButtonImage,
  Star
} from "./styles";

const ProductCard = (props) => {
  return (
    <Fragment>
      <ProductConatiner>
        {/* <h3 data-test="H3Category"></h3> */}
        <Card style={{ width: "16.5rem" }}>
          <Card.Body data-test="ProductCard">
            <ProductImage src={props.thumbnail} data-test="ProductImage" />
            <ProductTitle data-test="ProductTitle">{props.name}</ProductTitle>
            <ProductDesc data-test="ProductDesc">{props.description}</ProductDesc>

            <p><Star src="../../../../utils/assets/star.png"/>
              <Star src="../../../../utils/assets/star.png"/>
                <Star src="../../../../utils/assets/star.png"/>
                <Star src="../../../../utils/assets/star.png"/>
                <Star src="../../../../utils/assets/star.png"/>
                      <ProductRatings data-test="ProductRatings">({props.rating})</ProductRatings></p>

                    <ProductPrice data-test="ProductCost">{props.price}</ProductPrice>
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
