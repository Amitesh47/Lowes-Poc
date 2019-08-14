import React, { Fragment, useEffect, useCallback } from "react";
import ProductCard from '../ProductCardComponent'

const ProductList = (props) => {

    return(
        <div>
            <ProductCard 
             key={props.key}
             thumbnail={props.thumbnail}
             name = {props.name}
             description={props.description}
             rating = {props.rating}
             price = {props.price} /> 
        </div>
    )
}

export default ProductList;