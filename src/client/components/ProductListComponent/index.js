import React, { Fragment, useEffect, useCallback } from "react";
import CardDeck from 'react-bootstrap/CardDeck'

import ProductCard from '../ProductCardComponent'
import {CategoryTitleTag} from './styles'

const ProductList = (props) => {
    let {prodListWithCategory}= props
    let prodList=prodListWithCategory.slice(1)
    let category= prodListWithCategory[0].category
    // console.log(prodList)

    const renderData = prodList.map(product=>{
        // console.log(typeof(product._id))
        return <ProductCard 
                    key={product._id}
                    productDetails={product}
                />
    })

    return(
        <Fragment>
            <CategoryTitleTag>{category?category:`No Category`}</CategoryTitleTag>
            <CardDeck style={{"margin-bottom":"40px"}}>
                {renderData}
            </CardDeck>
        </Fragment>
    )
}

export default ProductList;