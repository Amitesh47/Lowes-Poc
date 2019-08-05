import React from 'react'
import styled from 'styled-components'

let Nav = styled.div`
width: 1440px;
height: 100px;
border: 1px solid #666666;
background-color: #fff;
background-size: cover;
box-shadow: 0px 1px 2px rgba(0,0,0,0.5);
`;

const Header = () => {
    // console.log('My auth status is ', auth);
    // const authButton = auth ? (
    //     <a href="/api/logout">Logout</a>
    // ) : (
    //         <a href="/api/auth/google">Login</a>
    //     );


    return (
       <Nav>Hwllo</Nav>
    )
};

// function mapStateToProps({ auth }) {
//     return { auth };
// }

export default Header