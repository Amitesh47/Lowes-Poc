import React from "react";

import { DiscountSpan, DiscountDiv } from "./styles";

const Discount = ({ discount }) => {
  if (!discount) {
    return null;
  }
  return (
    <div>
      <DiscountSpan>
        <DiscountDiv data-test="getDiscount" >
            {discount}
        </DiscountDiv>
      </DiscountSpan>
    </div>
  );
};

export default Discount;
