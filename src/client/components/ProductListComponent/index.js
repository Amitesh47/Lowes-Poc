import React, { Fragment } from "react";
import ProductCard from '../ProductCardComponent'
import {CategoryTitleTag,Card} from './styles'

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
            <Card >
                {renderData}
            </Card>
        </Fragment>
    )
}

export default ProductList;