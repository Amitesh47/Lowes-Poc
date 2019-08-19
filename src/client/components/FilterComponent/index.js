import React, {useEffect} from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'
import { useSelector, useDispatch } from 'react-redux'


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
  const data1 = useSelector(state => state.wholeData)
  const category = data1[1]
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'GET_DATA' })
}, [])

  const renderedCategory= category?category.map((cat)=>{
    return <div>{cat}</div>
  }):null
  return (
    <FilterConatiner>
      <Accordion style={{ width: "215px" }} data-test="FilterListCard">
        <Card style={{ width: "215px" }}>
          <FilterHeader data-test="FilterListHeader">Filters</FilterHeader>
          <FilterSection data-test="FilterListItem">
            Category
            <AddFilterButton data-test="AddFilterButton">
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="0"
                style={{ padding: "0" }}
              >
                <AddFilterButtonImage
                  src="../../../../utils/assets/addIcon_Filter.png"
                  alt="Add"
                />
                {/* <AddFilterButtonImage src={require("../../../../utils/assets/addIcon_Filter.png")} alt="Add" /> */}
              </Accordion.Toggle>
            </AddFilterButton>
          </FilterSection>
          <Accordion.Collapse eventKey="0">
            <Card.Body data-test="FilterDropDownBody">
              {renderedCategory}
            </Card.Body>
          </Accordion.Collapse>
          <FilterSection data-test="FilterListItem">
            Price
            <AddFilterButton data-test="AddFilterButton">
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="1"
                style={{ padding: "0" }}
              >
                <AddFilterButtonImage
                  src="../../../../utils/assets/addIcon_Filter.png"
                  alt="Add"
                />
                {/* <AddFilterButtonImage src={require("../../../../utils/assets/addIcon_Filter.png")} alt="Add" /> */}
              </Accordion.Toggle>
            </AddFilterButton>
          </FilterSection>
          <Accordion.Collapse eventKey="1">
            <Card.Body data-test="FilterDropDownBody">
            <Form><div key={`custom-checkbox`} className="mb-3">
                <Form.Check
                  custom
                  label="1-100"
                  type="checkbox"
                  id={`custom-checkbox-lowPrice`}
                />
                <Form.Check
                  custom
                  label="101-200"
                  type="checkbox"
                  id={`custom-checkbox-medPrice`}
                />
                <Form.Check
                  custom
                  label="201-300"
                  type="checkbox"
                  id={`custom-checkbox-highPrice`}
                />
                
                {/* Reference for disabled checkbox */}
                <Form.Check
                  custom
                  disabled
                  label="Reference(disabled)"
                  type="checkbox"
                  id={`custom-checkbox-disabled`}
                />
              </div></Form>
            </Card.Body>
          </Accordion.Collapse>
          <FilterSection data-test="FilterListItem">
            Rating
            <AddFilterButton data-test="AddFilterButton">
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="2"
                style={{ padding: "0" }}
              >
                {/* <AddFilterButtonImage src={require("../../../../utils/assets/addIcon_Filter.png")} alt="Add" /> */}
                <AddFilterButtonImage
                  src="../../../../utils/assets/addIcon_Filter.png"
                  alt="Add"
                />
              </Accordion.Toggle>
            </AddFilterButton>
          </FilterSection>
          <Accordion.Collapse eventKey="2">
            <Card.Body data-test="FilterDropDownBody">
            <Form><div key={`custom-checkbox`} className="mb-3">
                <Form.Check
                  custom
                  label="5"
                  type="checkbox"
                  id={`custom-checkbox-5`}
                />
                <Form.Check
                  custom
                  label="4"
                  type="checkbox"
                  id={`custom-checkbox-4`}
                />
                <Form.Check
                  custom
                  label="3"
                  type="checkbox"
                  id={`custom-checkbox-3`}
                />
                <Form.Check
                  custom
                  label="2"
                  type="checkbox"
                  id={`custom-checkbox-2`}
                />
                <Form.Check
                  custom
                  label="1"
                  type="checkbox"
                  id={`custom-checkbox-1`}
                />
                {/* Reference for disabled checkbox */}
                <Form.Check
                  custom
                  disabled
                  label="Reference(disabled)"
                  type="checkbox"
                  id={`custom-checkbox-disabled`}
                />
              </div></Form>
            </Card.Body>
          </Accordion.Collapse>
          <FilterSectionBottom data-test="FilterListItem">
            Discounts / Offers
            <AddFilterButton data-test="AddFilterButton">
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="3"
                style={{ padding: "0" }}
              >
                {/* <AddFilterButtonImage src={require("../../../../utils/assets/addIcon_Filter.png")} alt="Add" /> */}
                <AddFilterButtonImage
                  src="../../../../utils/assets/addIcon_Filter.png"
                  alt="Add"
                />
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
