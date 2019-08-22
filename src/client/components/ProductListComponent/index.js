import React, { Fragment } from "react";
import ProductCard from '../ProductCardComponent'
import {CategoryTitleTag,Card} from './styles'
import { useSelector, useDispatch } from 'react-redux'


const ProductList = ({prodListWithCategory}) => {
    // let {prodListWithCategory}= props
    let prodList=prodListWithCategory.slice(1)
    let category= prodListWithCategory[0].category
    // console.log(prodList)

    const ratingFilter = useSelector(state => state.ratingFilter)
    const ratingFilterDefault = [0,1,2,3,4]
    let rating =[]
    ratingFilter.length==0?rating = ratingFilterDefault:rating=ratingFilter

    const priceFilter = useSelector(state => state.priceFilter)
    const priceFilterDefault = [...Array(300).keys()]
    let price =[]
    priceFilter.length==0?price = priceFilterDefault:price=priceFilter

    const discountFilter = useSelector(state => state.discountFilter)
    // const discountFilterDefault = ['discount',null]
    // let discount =[]
    // discountFilter.length==0?discount = discountFilterDefault:discount=discountFilter

    let renderData=null
    renderData = prodList.map(product=>{
        // console.log(product)
        return rating.map(rating=>{
            if (rating == product.ratingInfo.rating){
                return price.map(price=>{
                    if (price == product.price){
                        if(discountFilter.length==0) 
                            return (
                                    <ProductCard 
                                        key={product._id}
                                        productDetails={product}
                                    />
                                    )
                        else
                            if(product.offerMessage!=null)
                            return (
                                    <ProductCard 
                                    key={product._id}
                                    productDetails={product}
                                    />
                                )
                            else return null
                    }
                    else return null
                })
                
            }
            else return null
        })            
    })

    // console.log(` hello1 ${category}`)
    // console.log(renderData)

    let a=renderData.map(array=>array.some(function (el) {return el != null}))
    let check=null
    for(let i=0;i<a.length;i++){
        if (a[i]==true)
            check=true 
    }

    // console.log(check)


    return(
        
        <Fragment>
            
            {check ?<CategoryTitleTag>{category?category:`No Category`}</CategoryTitleTag>:null}
            {/* {renderData.some(function (el) {return el !== null}) ?<CategoryTitleTag>{category?category:`No Category`}</CategoryTitleTag>:null} */}
                {check?<Card >
                    {renderData}
                </Card>:null}
        </Fragment>
    )
}

export default ProductList;