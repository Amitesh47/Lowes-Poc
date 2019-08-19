import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

import ProductList from '../ProductListComponent'
import {ProductConatinerTag} from './styles'

const ProductConatiner = () => {

    const data1 = useSelector(state => state.wholeData)
    // console.log(data1)
    const category = data1[1]
    const wholeData = data1[0]
    const dispatch = useDispatch()
    // category ? console.log(category[0]) : null

    useEffect(() => {
        dispatch({ type: 'GET_DATA' })
    }, [])

    const renderData = category ? category.map((cat) => {
        let prodListWithCategory = [{"category":cat}]
        for (let i = 0; i < wholeData.length; i++) {
            if (wholeData[i].category === cat)
                prodListWithCategory = [...prodListWithCategory,wholeData[i]]               
        }
        return <ProductList
                    prodListWithCategory={prodListWithCategory}
                />
    }) : null

    return (
        <ProductConatinerTag>
            {renderData}
        </ProductConatinerTag>
    )
}

export default ProductConatiner;