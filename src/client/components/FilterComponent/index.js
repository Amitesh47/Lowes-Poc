import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

import {
  FilterHeader,
  FilterSection,
  AddFilterButton,
  FilterSectionBottom,
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
    <div>
      <Accordion style={{ width: "215px" }}>
        <Card>
          <FilterHeader>Filters</FilterHeader>
          <FilterSection>
            Category
            <AddFilterButton>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                +
              </Accordion.Toggle>
            </AddFilterButton>
          </FilterSection>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </Card.Body>
          </Accordion.Collapse>
          <FilterSection>
            Price
            <AddFilterButton>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                +
              </Accordion.Toggle>
            </AddFilterButton>
          </FilterSection>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </Card.Body>
          </Accordion.Collapse>
          <FilterSection>
            Rating
            <AddFilterButton>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                +
              </Accordion.Toggle>
            </AddFilterButton>
          </FilterSection>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </Card.Body>
          </Accordion.Collapse>
          <FilterSectionBottom>
            Discounts / Offers
            <AddFilterButton>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                +
              </Accordion.Toggle>
            </AddFilterButton>
          </FilterSectionBottom>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default Filter;
