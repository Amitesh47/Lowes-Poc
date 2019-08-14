import React, { Fragment, useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'

import ProductList from '../ProductCardComponent'

const ProductConatiner = () => {
    
    const data1 = useSelector(state => state)
    const category=data1[1]
    const dispatch = useDispatch()
    category?console.log(category[0]):null
  
    useEffect(() => {
      dispatch({ type: 'GET_DATA' })
    },[])
  
    return(
        <Fragment>
            <ProductList /> 
            <ProductList /> 
            <ProductList /> 
        </Fragment>
    )
}

export default ProductConatiner;