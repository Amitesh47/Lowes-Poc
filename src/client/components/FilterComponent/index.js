import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

import {
  FilterConatiner,
  FilterDetailsConatiner,
  FilterHeader,
  FilterSection,
  AddFilterButtonImage,
  AddFilterButton,
  FilterSectionBottom,
  FilterCount
} from "./styles";

const Filter = () => {
  let data = {
    prodName: "Product Name",
    prodDesc:
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    prodRating: "10",
    cost: "$8989.67"
  };
  return (
    <FilterConatiner>
      <Accordion style={{ width: "215px" }} data-test="FilterListCard">
        <Card style={{ width: "215px" }}>
          <FilterHeader data-test="FilterListHeader">Filters</FilterHeader>
          <FilterSection data-test="FilterListItem">
            Category
            <AddFilterButton data-test="AddFilterButton">
              <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ padding: "0" }}>
                <AddFilterButtonImage src="../../../../utils/assets/addIcon_Filter.png" alt="Add" />
                {/* <AddFilterButtonImage src={require("../../../../utils/assets/addIcon_Filter.png")} alt="Add" /> */}
              </Accordion.Toggle>
            </AddFilterButton>
          </FilterSection>
          <Accordion.Collapse eventKey="0">
            <Card.Body data-test="FilterDropDownBody">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </Card.Body>
          </Accordion.Collapse>
          <FilterSection data-test="FilterListItem">
            Price
            <AddFilterButton data-test="AddFilterButton">
              <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{ padding: "0" }}>
                <AddFilterButtonImage src="../../../../utils/assets/addIcon_Filter.png" alt="Add" />
                {/* <AddFilterButtonImage src={require("../../../../utils/assets/addIcon_Filter.png")} alt="Add" /> */}
              </Accordion.Toggle>
            </AddFilterButton>
          </FilterSection>
          <Accordion.Collapse eventKey="1">
            <Card.Body data-test="FilterDropDownBody">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </Card.Body>
          </Accordion.Collapse>
          <FilterSection data-test="FilterListItem">
            Rating
            <AddFilterButton data-test="AddFilterButton">
              <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{ padding: "0" }}>
                {/* <AddFilterButtonImage src={require("../../../../utils/assets/addIcon_Filter.png")} alt="Add" /> */}
                <AddFilterButtonImage src="../../../../utils/assets/addIcon_Filter.png" alt="Add" />
              </Accordion.Toggle>
            </AddFilterButton>
          </FilterSection>
          <Accordion.Collapse eventKey="2">
            <Card.Body data-test="FilterDropDownBody">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </Card.Body>
          </Accordion.Collapse>
          <FilterSectionBottom data-test="FilterListItem">
            Discounts / Offers
            <AddFilterButton data-test="AddFilterButton">
              <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{ padding: "0" }}>
                {/* <AddFilterButtonImage src={require("../../../../utils/assets/addIcon_Filter.png")} alt="Add" /> */}
                <AddFilterButtonImage src="../../../../utils/assets/addIcon_Filter.png" alt="Add" />
              </Accordion.Toggle>
            </AddFilterButton>
          </FilterSectionBottom>
          <Accordion.Collapse eventKey="3">
            <Card.Body data-test="FilterDropDownBody">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <FilterDetailsConatiner data-test="FilterDetailsCard">
        <Card style={{ width: "215px" }}>
          <FilterSection>
            Cras justo odio
            <FilterCount>14</FilterCount>
          </FilterSection>
        </Card>
      </FilterDetailsConatiner>
    </FilterConatiner>
  );

};

export default Filter;
