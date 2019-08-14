import React, { Fragment, useEffect, useCallback } from "react";
import ProductCard from '../ProductCardComponent'

const ProductList = (props) => {
    let {prodListWithCategory}= props
    let prodList=prodListWithCategory.slice(1)
    let category= prodListWithCategory[0].category
    console.log(prodList)

    const renderData = prodList.map(product=>{
        return <ProductCard 
                    productDetails={product}
                />
    })

    return(
        <Fragment>
            <div>{category}</div>
            {renderData}
        </Fragment>
    )
}

export default ProductList;