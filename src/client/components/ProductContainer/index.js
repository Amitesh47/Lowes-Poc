import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

import ProductList from '../ProductListComponent'
import {ProductConatinerTag} from './styles'

const ProductConatiner = () => {

    const data1 = useSelector(state => state.wholeData)
    const categoryFilter = useSelector(state => state.categoryFilter)
    let category=[]
    // console.log(categoryFilter)
    categoryFilter.length==1?category = data1[1]:category=categoryFilter
    const wholeData = data1[0]
    const dispatch = useDispatch()
    // category ? console.log(category[0]) : null

    useEffect(() => {
        dispatch({ type: 'GET_DATA' })
    }, [])

    const renderData = category ? category.map((cat) => {
        let prodListWithCategory = [{"category":cat}]
        wholeData ? wholeData.map((data) => {
            if (data.category === cat)
                prodListWithCategory = [...prodListWithCategory,data]   
        }) : null        
        return <ProductList
                    prodListWithCategory={prodListWithCategory}
                    key={cat} 
                />
    }) : null
    // console.log({renderData})
    
    // let a=renderData.map( value =>{
    //     if (value.key ==null){
    //         return false
    //     }
    //     else
    //         return true
    // })
    // let check=null
    // if (renderData){
    //     for(let i=0;i<a.length;i++){
    //         if (a[i]==true)
    //             check=true 
    //     }
    // }
    
    return (
        <ProductConatinerTag>
            {(renderData)?renderData:<h3>Populating List!</h3>}
        </ProductConatinerTag>
    )
}

export default ProductConatiner;