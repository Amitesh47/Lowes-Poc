import React from "react";
import Card from "react-bootstrap/Card";

import {FilterHeader,FilterSection,AddFilterButton,FilterSectionBottom} from './styles'

const Filter = () => {
  let data = {
    prodName: "Product Name",
    prodDesc:
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    prodRating: "10",
    cost: "$8989.67"
  };
  return (
    <div>
      <Card style={{ width: "215px" }}>
        <FilterHeader>
            Filters
        </FilterHeader>
        <FilterSection>
            Category
            <AddFilterButton>
                +
            </AddFilterButton>
        </FilterSection>
        <FilterSection>
            Price
            <AddFilterButton>
                +
            </AddFilterButton>
        </FilterSection>
        <FilterSection>
            Rating
            <AddFilterButton>
                +
            </AddFilterButton>
        </FilterSection>
        <FilterSectionBottom>
            Discounts / Offers
            <AddFilterButton>
                +
            </AddFilterButton>
        </FilterSectionBottom>
      </Card>
    </div>
  );
};

export default Filter;
