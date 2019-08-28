import React from "react";

import { DiscountSpan, DiscountDiv } from "./styles";

const Discount = ({ discount }) => {
  if (!discount) {
    //loading not started yet
    // return <span className="stats">Loading</span>
    return null;
  }
  return (
    <div>
      <DiscountSpan>
        {/* {stats.error && 'Error!'}
            {stats.isLoading && 'Loading'}
            {stats.downloads !== null && `${stats.downloads}`} */}
        <DiscountDiv data-test="getDiscount" >
            {discount}
        </DiscountDiv>
      </DiscountSpan>
    </div>
  );
};

export default Discount;
