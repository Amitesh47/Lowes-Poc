import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Discount from "../DiscountComponent";

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
  CardTag,
  ProdCard
} from "./styles";

const ProductCard = props => {
  let productDetails = props.productDetails;
  // console.log(productDetails)
  let id = productDetails._id;
  let [count, setCount] = useState(1);
  const quantityById = useSelector(state => state.count.quantityById);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <CardTag>
        <ProdCard inline='true'>
          <ProdCard.Body data-test="ProductCard">
            <div>
              <ProductImage
                src={productDetails.thumbnail}
                data-test="ProductImage1"
                alt={productDetails.name}
              />
              <Discount discount={productDetails.offerMessage} />
            </div>
            <ProductTitle data-test="ProductTitle">
              {productDetails.name}
            </ProductTitle>
            <ProductDesc data-test="ProductDesc" tabindex="0">
              {productDetails.description}
            </ProductDesc>

            <p>
              <Star src="../../../../utils/assets/star.png" alt="star"/>
              <Star src="../../../../utils/assets/star.png"  alt="star"/>
              <Star src="../../../../utils/assets/star.png" alt="star"/>
              <Star src="../../../../utils/assets/star.png" alt="star"/>
              <Star src="../../../../utils/assets/star.png" alt="star"/>
              <ProductRatings data-test="ProductRatings">
                ( {productDetails.ratingInfo.userCount} )
              </ProductRatings>
            </p>

            <ProductPrice data-test="ProductCost">
              ${productDetails.price}
            </ProductPrice>
            <div>
              <AddToCartButon
                data-test="AddToCartButton"
                onClick={() => {
                  const productIdInCart = quantityById.includes(id);
                  let dispatchObj = {
                    type: "ADD_TO_CART",
                    payload: { productId: id, count }
                  };

                  if (productIdInCart) {
                    // const CartWithoutProd=quantityById.filter((episodeID)=>episodeID!=id)
                    dispatchObj = {
                      type: "REMOVE_FROM_CART",
                      payload: { productId: id, count }
                    };
                  }

                  dispatch(dispatchObj);
                }}
              >
                {quantityById.find(ID => ID == id)
                  ? `Remove from Cart`
                  : `Add to Cart`}
              </AddToCartButon>
              <CountContainer>
                <CartCountButton>
                  {quantityById.find(ID => ID == id) ? null : (
                    <CartButtonImage
                      data-test="DecrementCountButton"
                      src="../../../../utils/assets/subIcon.png"
                      alt="Remove From Cart"
                      onClick={() => setCount(count - 1)}
                    />
                  )}
                  {/* onClick = {() => console.log("Clicked")}/> */}
                  {/* <CartButtonImage src={require("../../../../utils/assets/subIcon.png")} alt="Remove From Cart" />                             */}
                </CartCountButton>
                <CartCount>{count}</CartCount>
                <CartCountButton>
                  {/* <CartButtonImage src={require("../../../../utils/assets/addIcon.png")} alt="Add To Cart" />                  */}
                  {quantityById.find(ID => ID == id) ? null : (
                    <CartButtonImage
                      data-test="IncrementCountButton"
                      src="../../../../utils/assets/addIcon.png"
                      alt="Add To Cart"
                      onClick={() => setCount(count + 1)}
                    />
                  )}
                </CartCountButton>
              </CountContainer>
            </div>
          </ProdCard.Body>
        </ProdCard>
      </CardTag>
    </Fragment>
  );
};

export default ProductCard;
