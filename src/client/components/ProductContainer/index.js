import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

import ProductList from '../ProductListComponent'

const ProductConatiner = () => {

    const data1 = useSelector(state => state)
    const category = data1[1]
    const wholeData = data1[0]
    const dispatch = useDispatch()
    category ? console.log(category[0]) : null

    useEffect(() => {
        dispatch({ type: 'GET_DATA' })
    }, [])

    const renderData = category ? category.map((cat) => {
        for (let i = 0; i < wholeData.length; i++) {
            if (wholeData[i].category === cat)
                return <ProductList
                    key={wholeData[i].id}
                    thumbnail={wholeData[i].thumbnail}
                    name={wholeData[i].name}
                    description={wholeData[i].description}
                    rating={wholeData[i].ratingInfo.rating}
                    price={wholeData[i].price}
                />
        }



    }) : null

    return (
        <Fragment>
            {renderData}
        </Fragment>
    )
}

export default ProductConatiner;