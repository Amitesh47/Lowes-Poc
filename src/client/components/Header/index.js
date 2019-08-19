import React from 'react'
import { Nav,Logo, Search, Cart } from './styles';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch, useSelector } from 'react-redux'



const Header = (props) => {
    const cartCount = useSelector((state) => state.count.totalCount)
    console.log(cartCount)
    return (
       <Nav data-test="getHeader">
           <Container>
                <Row>
                    <Col xs={5} sm={5} lg={6} ><Logo data-test="getLogo">Poc-Shop</Logo></Col>
                    <Col xs={3}  sm={3} lg={{span: 2, offset: 2 }}><Search data-test="getSearch"/></Col>
                    <Col xs={{span:2,offset:2}}  sm={{span:2, offset:2}} lg={{span:1, offset: 1}}><Cart data-test="getCart"  src='./utils/assets/cart.png' alt="Cart" />{cartCount}</Col>
                </Row>
            </Container>
       </Nav>
    )
};

export default Header