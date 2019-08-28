import React from 'react'
import { Nav, Logo, Search, Cart,FullSearchInput } from './styles';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useSelector } from 'react-redux'




const Header = () => {
    const cartCount = useSelector((state) => state.count.totalCount)
    // console.log(cartCount)
    return (
        <Nav data-test="getHeader">
            <Container>
                <Row>
                    <Col xs={5} sm={5} lg={6} ><Logo data-test="getLogo">Poc-Shop</Logo></Col>
                    <Col xs={3} sm={3} lg={{ span: 2, offset: 2 }}><FullSearchInput><label> Search<Search type="text" data-test="getSearch"  /></label></FullSearchInput></Col>
                    <Col xs={{ span: 2, offset: 2 }} sm={{ span: 2, offset: 2 }} lg={{ span: 1, offset: 1 }}><Cart data-test="getCart" src='./utils/assets/cart.png' alt="Cart" />{cartCount}</Col>
                </Row>
            </Container>
        </Nav>
    )
};

export default Header