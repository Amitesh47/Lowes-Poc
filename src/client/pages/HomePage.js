import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import ProductCard from '../components/ProductCardComponent'
import {ProductTitle} from '../components/ProductCardComponent/styles'

const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={3}><ProductTitle>Hello</ProductTitle></Col>
                    <Col sm={9}><ProductCard /></Col>
                </Row>
            </Container>
        </div>
        
    )
}

export default {
    component: Home
};