import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import ProductCard from '../components/ProductCardComponent'
import Filter from '../components/FilterComponent'

const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={3}><Filter /></Col>
                    <Col sm={9}><ProductCard /></Col>
                </Row>
            </Container>
        </div>
        
    )
}

export default {
    component: Home
};