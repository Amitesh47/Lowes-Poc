import styled from 'styled-components'

let Nav = styled.div`
height: 100px;
border: 1px solid #666666;
background-color: #fff;
background-size: cover;
box-shadow: 0px 1px 2px rgba(0,0,0,0.5);
@media (max-width: 450px) {
    overflow: hidden;
    z-index:1;
    position: fixed;
    height: 70px;
  }
overflow: hidden;
z-index:1;
position: fixed;
top: 0;
width: 100%;
`;

let Logo = styled.div`
margin-top: 15px;
@media (max-width: 450px) {
    width: 200px;
    font-size: 30px;
  }
font-size: 44px;
height: 50px
font-family: Arial;
color: #6f6f6f;
font-weight: 400;
text-decoration: none solid rgb(111, 111, 111);


`;

let Search = styled.input`
margin-top: 1px;
@media (max-width: 450px) {
    width: 100px;
    height:35px;
  }
height: 36px;

background-color: #ffffff;
background-size: cover;
font-family: Arial;
border-width: 0px;
font-size: 14px;
color: #474747;
font-weight: 400;
text-decoration: none solid rgb(71, 71, 71);


`;

let FullSearchInput = styled.div`
border: 1px solid #c8c8c8;
width: 172px;
height: 63px;
margin-top: 18px;
`;

let Cart = styled.img`
margin-top:30px;
@media (max-width: 450px) {
    width: 25px;
    margin-left: -24px;
    height: 25px;
  }
width: 32px;
height: 32px;
`;


export { Nav, Logo, Search, Cart,FullSearchInput }