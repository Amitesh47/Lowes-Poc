import React from 'react'

import {
    DiscountSpan
  } from "./styles";

const Discount = ({ discount }) => {
    if (!discount) {
        //loading not started yet
        // return <span className="stats">Loading</span>
        return null
    }
    return (
        <DiscountSpan>
            {/* {stats.error && 'Error!'}
            {stats.isLoading && 'Loading'}
            {stats.downloads !== null && `${stats.downloads}`} */}
            {discount}
        </DiscountSpan>
    )
}

export default Discount;