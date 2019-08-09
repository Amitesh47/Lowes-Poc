import styled from 'styled-components'

let Nav = styled.div`
height: 100px;
border: 1px solid #666666;
background-color: #fff;
background-size: cover;
box-shadow: 0px 1px 2px rgba(0,0,0,0.5);
`;

let Logo = styled.div`
margin-top: 15px;
width: 488px;
height: 50px
font-family: Arial;
font-size: 44px;
color: #6f6f6f;
font-weight: 400;
text-decoration: none solid rgb(111, 111, 111);


`;

let Search = styled.input`
margin-top: 20px;
// width: 354px;
height: 56px;
padding: 0px 10px;
border: 1px solid #c8c8c8;
background-color: #ffffff;
background-size: cover;
font-family: Arial;
font-size: 14px;
color: #474747;
font-weight: 400;
text-decoration: none solid rgb(71, 71, 71);


`;

let Cart = styled.img`
margin-top:30px;
width: 32px;
height: 32px;
fill: #000000;
`;

export { Nav, Logo, Search, Cart }