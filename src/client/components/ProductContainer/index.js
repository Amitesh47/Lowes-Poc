import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

import ProductList from '../ProductListComponent'
import {ProductConatinerTag} from './styles'

const ProductConatiner = () => {

    const data1 = useSelector(state => state.wholeData)
    const categoryFilter = useSelector(state => state.categoryFilter)
    let category=[]
    categoryFilter.length==1?category = data1[1]:category=categoryFilter
    const wholeData = data1[0]
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch({ type: 'GET_DATA' })
    }, [])

    const renderData = category ? category.map((cat) => {
        let prodListWithCategory = [{"category":cat}]
        wholeData ? wholeData.map((data) => {
            if (data.category === cat && data.outOfStock===false)
                prodListWithCategory = [...prodListWithCategory,data]   
        }) : null        
        return <ProductList
                    prodListWithCategory={prodListWithCategory}
                    key={cat} 
                />
    }) : null
   
    
    return (
        <ProductConatinerTag>
            {(renderData)?renderData:<h3>Populating List!</h3>}
        </ProductConatinerTag>
    )
}

export default ProductConatiner;