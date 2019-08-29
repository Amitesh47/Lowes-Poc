import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import ProductCard from "../ProductCardComponent";
import { CategoryTitleTag, CardList } from "./styles";

const ProductList = ({ prodListWithCategory }) => {
  let prodList = prodListWithCategory.slice(1);
  let category = prodListWithCategory[0].category;

  const ratingFilter = useSelector(state => state.ratingFilter);
  const ratingFilterDefault = [0, 1, 2, 3, 4];
  let rating = [];
  ratingFilter.length == 0
    ? (rating = ratingFilterDefault)
    : (rating = ratingFilter);

  const priceFilter = useSelector(state => state.priceFilter);
  const priceFilterDefault = [...Array(300).keys()];
  let price = [];
  priceFilter.length == 0
    ? (price = priceFilterDefault)
    : (price = priceFilter);

  const discountFilter = useSelector(state => state.discountFilter);

  let renderData = [];

 
  prodList.forEach(product => {
    if (
      rating.includes(product.ratingInfo.rating) &&
      price.includes(product.price)
    ) {
      if (discountFilter.length === 0)
        renderData.push(
          <ProductCard key={product._id} productDetails={product} />
        );
      else if (product.offerMessage != null)
        renderData.push(
          <ProductCard key={product._id} productDetails={product} />
        );
    }
  });

  return (  
    <Fragment>
      {renderData.length ? (
        <CategoryTitleTag>
          {category ? category : `Special Offers`}
        </CategoryTitleTag>
      ) : null}
      {<CardList>{renderData}</CardList>}
    </Fragment>
  );
};

export default ProductList;
