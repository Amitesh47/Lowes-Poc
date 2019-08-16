import React, { Fragment, useState, useCallback } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter, decrementCounter} from '../../actions'

import {
  ProductTitle,
  ProductDesc,
  ProductPrice,
  AddToCartButon,
  CartCount,
  CartCountButton,
  ProductRatings,
  ProductImage,
  CountContainer,
  CartButtonImage,
  Star,
  CardTag
} from "./styles";

const ProductCard = (props) => {
  let productDetails= props.productDetails
  let id = props.key
  let [count,setCount] = useState(1)
  console.log(productDetails)
  // const count = useSelector((state) => state.count)
  // const dispatch = useDispatch()
  return (
    <Fragment>
      <CardTag>
        {/* <h3 data-test="H3Category"></h3> */}
        <Card style={{ width: "16.5rem",height: "540px"}} inline>
          <Card.Body data-test="ProductCard">
            <ProductImage src={productDetails.thumbnail} data-test="ProductImage" />
            <ProductTitle data-test="ProductTitle">{productDetails.name}</ProductTitle>
            <ProductDesc data-test="ProductDesc">{productDetails.description}</ProductDesc>

            <p><Star src="../../../../utils/assets/star.png"/>
              <Star src="../../../../utils/assets/star.png"/>
                <Star src="../../../../utils/assets/star.png"/>
                <Star src="../../../../utils/assets/star.png"/>
                <Star src="../../../../utils/assets/star.png"/>
                      <ProductRatings data-test="ProductRatings">( {productDetails.ratingInfo.userCount} )</ProductRatings></p>

                    <ProductPrice data-test="ProductCost">{productDetails.price}</ProductPrice>
                    <div>
                      <AddToCartButon data-test="AddToCartButton">Add to Cart</AddToCartButon>
                      <CountContainer>
                        <CartCountButton>
                          <CartButtonImage data-test="DecrementCountButton" src="../../../../utils/assets/subIcon.png" alt="Remove From Cart" 
                           onClick = {() => setCount (count - 1)} />
                          {/* onClick = {() => console.log("Clicked")}/> */}
                          {/* <CartButtonImage src={require("../../../../utils/assets/subIcon.png")} alt="Remove From Cart" />                             */}
                        </CartCountButton>
                        <CartCount>{count}</CartCount>
                        <CartCountButton>
                          {/* <CartButtonImage src={require("../../../../utils/assets/addIcon.png")} alt="Add To Cart" />                  */}
                          <CartButtonImage data-test="IncrementCountButton" src="../../../../utils/assets/addIcon.png" alt="Add To Cart"
                           onClick = {() => setCount(count + 1)} />
                        </CartCountButton>
                      </CountContainer>
                    </div>
          </Card.Body>
        </Card>
      </CardTag>
    </Fragment>
              );
            };
            
            export default ProductCard;
