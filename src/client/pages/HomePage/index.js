import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Helmet } from "react-helmet";

import ProductConatiner from "../../components/ProductContainer";
import Filter from "../../components/FilterComponent";
import { HomePageConatiner } from "./styles";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>POC-Lowes</title>
        <meta name="description" content="Shop for your favorite products at Lowes!" />
       
      </Helmet>
      <HomePageConatiner>
        <Row>
          <Col sm={3}>
            <Filter />
          </Col>
          <Col sm={9}>
            <div>
              <ProductConatiner />
            </div>
          </Col>
        </Row>
      </HomePageConatiner>
    </div>
  );
};

export default {
  component: Home
};
