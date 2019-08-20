import React, { Fragment } from "react";
import ProductCard from '../ProductCardComponent'
import {CategoryTitleTag,Card} from './styles'
import { useSelector, useDispatch } from 'react-redux'


const ProductList = ({prodListWithCategory}) => {
    // let {prodListWithCategory}= props
    let prodList=prodListWithCategory.slice(1)
    let category= prodListWithCategory[0].category
    console.log(prodList)

    const ratingFilter = useSelector(state => state.ratingFilter)
    const ratingFilterDefault = [1,2,3,4,5]
    let rating =[]
    ratingFilter.length==0?rating = ratingFilterDefault:rating=ratingFilter


    const renderData = prodList.map(product=>{
        // console.log(typeof(product._id))
        return rating.map(rating=>{
            if (rating == product.ratingInfo.rating){
                return <ProductCard 
                            key={product._id}
                            productDetails={product}
                        />
            }
        })            
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