import React from 'react'
import { Nav,Logo, Search, Cart, Items } from './styles';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Header = () => {
    // console.log('My auth status is ', auth);
    // const authButton = auth ? (
    //     <a href="/api/logout">Logout</a>
    // ) : (
    //         <a href="/api/auth/google">Login</a>
    //     );


    return (
       <Nav>
           <Container>
                <Row>
                    <Col xs={6}><Logo>Poc-Shop</Logo></Col>
                    <Col><Search/></Col>
                    <Col><Cart src='../../../../utils/assets/MaterialIcon.svg' alt="Cart" /></Col>
                    <Col><Items>(11)</Items></Col>
                </Row>
            </Container>
       </Nav>
    )
};

// function mapStateToProps({ auth }) {
//     return { auth };
// }

export default Header