import React, { useEffect } from "react";
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
  const data1 = useSelector(state => state.wholeData)
  const completeData = data1[0];
  const category = data1[1]
  const categoryFilter = useSelector(state => state.categoryFilter)
  const ratingFilter = useSelector(state => state.ratingFilter)
  const priceFilter = useSelector(state => state.priceFilter)
  let priceFilterProducts = []
  // console.log("Price Filter :", priceFilter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'GET_DATA' })
  }, [])

  let getCategoryCheck = (e, cat) => {
    let check = document.getElementById(e.target.id)
    if (check.checked == true) {
      dispatch({ type: 'CATEGORY_FILTER_ON', payload: cat })
    } else {
      dispatch({ type: 'CATEGORY_FILTER_OFF', payload: cat })
    }
  }

  let getRatingCheck = (e) => {
    // console.log(e.target.id)
    // console.log(typeof(e.target.id))
    let check = document.getElementById(e.target.id)
    if (check.checked == true) {
      dispatch({
        type: 'RATING_FILTER_ON',
        payload: e.target.id
      })
    } else {
      dispatch({
        type: 'RATING_FILTER_OFF',
        payload: e.target.id
      })
    }
  }

  let getDiscountCheck = (e) => {
    // console.log(e.target.id)
    // console.log(typeof(e.target.id))
    let check = document.getElementById(e.target.id)
    if (check.checked == true) {
      dispatch({ type: 'CATEGORY_DISCOUNT_ON' })
    } else {
      dispatch({ type: 'CATEGORY_DISCOUNT_OFF' })
    }
  }

  let getPriceCheck = (e) => {
    // console.log(e.target.name)
   

     completeData ? completeData.map((data) => {
      // console.log("Data: " , data)
      if (data.price <= e.target.id) {
        priceFilterProducts.push(data)
      }
    }) : null

    
    let check = document.getElementById(e.target.id)
    

    if (check.checked == true) {
      console.log("Price products: ", priceFilterProducts)
      dispatch({
        type: 'PRICE_FILTER_ON',
        payload: e.target.name
      })
    } else {
      priceFilterProducts.filter(data => (data >= e.target.id))
      console.log("Price products: ", priceFilterProducts)
      dispatch({
        type: 'PRICE_FILTER_OFF',
        payload: e.target.name
      })
    }
  }

  const renderedCategory = category ? category.map((cat) => {
    if (cat === null)
      return null
    return <div>
      <Form.Check custom type="checkbox" label={cat} id={`custom-checkbox-${cat}`}
        // onClick={()=>dispatch({ type: 'CATEGORY_FILTER_ON', payload:cat })}
        onClick={() => { return getCategoryCheck(window.event, cat) }}
      />
    </div>
  }) : null

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
                  name="1-100"
                  type="checkbox"
                  id="100"
                  onClick={() => { return getPriceCheck(window.event) }}
                />
                <Form.Check
                  custom
                  label="101-200"
                  name="101-200"
                  type="checkbox"
                  id="200"
                  onClick={() => { return getPriceCheck(window.event) }}
                />
                <Form.Check
                  custom
                  label="201-300"
                  name="201-300"
                  type="checkbox"
                  id="300"
                  onClick={() => { return getPriceCheck(window.event) }}
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
                  label="4"
                  type="checkbox"
                  id={'4'}
                  onClick={() => { return getRatingCheck(window.event) }}
                />
                <Form.Check
                  custom
                  label="3"
                  type="checkbox"
                  id={`3`}
                  onClick={() => { return getRatingCheck(window.event) }}
                />
                <Form.Check
                  custom
                  label="2"
                  type="checkbox"
                  id={`2`}
                  onClick={() => { return getRatingCheck(window.event) }}
                />
                <Form.Check
                  custom
                  label="1"
                  type="checkbox"
                  id={`1`}
                  onClick={() => { return getRatingCheck(window.event) }}
                />
                <Form.Check
                  custom
                  label="0"
                  type="checkbox"
                  id={`0`}
                  onClick={() => { return getRatingCheck(window.event) }}
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
              <Form><div key={`custom-checkbox`} className="mb-3">
                <Form.Check
                  custom
                  label="Discounts"
                  type="checkbox"
                  id={'discount'}
                  onClick={() => { return getDiscountCheck(window.event) }}
                />
              </div></Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <FilterDetailsConatiner data-test="FilterDetailsCard">
        {categoryFilter.length != 0 ? categoryFilter.map(cat => {
          return (<Card style={{ width: "215px" }}>
            <FilterSection>
              {cat}
              <FilterCount>14</FilterCount>
            </FilterSection>
          </Card>);
        }) : null}

        {ratingFilter.length != 0 ? ratingFilter.map(rating => {
          return (<Card style={{ width: "215px" }}>
            <FilterSection>
              {rating}
              <FilterCount>14</FilterCount>
            </FilterSection>
          </Card>);
        }) : null}

        {priceFilter.length != 0 ? priceFilter.map(price => {
          return (<Card style={{ width: "215px" }}>
            <FilterSection>
              {price}
              <FilterCount>14</FilterCount>
            </FilterSection>
          </Card>);
        }) : null}



      </FilterDetailsConatiner>
    </FilterConatiner>
  );

};

export default Filter;
