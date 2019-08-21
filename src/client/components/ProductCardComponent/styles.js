import styled from 'styled-components'
import Card from "react-bootstrap/Card";

let CardTag= styled.span`
    margin-bottom: 30px;
`;

let ProductTitle = styled.h3`
@media (max-width: 450px) {
    width: 145px;
    height: 33px;
    font-size: 19px;
  }
    width: 228px;
    height: 64px;
    font-family: Arial;
    font-size: 27px;
    color: #222222;
    font-weight: 400;
    text-decoration: none solid rgb(34, 34, 34);
    margin-top: 8px;
    margin-bottom: 8px;
`;

let ProductImage = styled.img`
@media (max-width: 450px) {
    width: 274px;
    height: 130px;
  }
    position :relative;
    right:10px;
    top: -10px;
    width: 241px;
    height: 200px;
`;

let ProductDesc = styled.div`
@media (max-width: 450px) {
    width: 149px;
    height: 0px;
    font-size: 12px;
  }
    width: 224px;
    height: 105px;
    font-family: Arial;
    font-size: 14px;
    color: #000000;
    font-weight: 400;
    text-decoration: none solid rgb(0, 0, 0);
    line-height: 21px;
    overflow: auto
`;

let ProductRatings = styled.span`
    width: 47px;
    height: 27px;
    font-family: Arial;
    font-size: 23px;
    @media (max-width: 450px) {
        font-size: 14px;
    }
    color: #222222;
    font-weight: 400;
    text-decoration: none solid rgb(34, 34, 34);
`;

let ProductPrice = styled.div`
    width: 125px;
    height: 27px;
    font-family: Arial;
    font-size: 23px;
    @media (max-width: 450px) {
        font-size: 16px;
    }
    color: #222222;
    font-weight: 400;
    text-decoration: none solid rgb(34, 34, 34);
`;

let AddToCartButon = styled.button`
    width: 130px;
    @media (max-width: 450px) {
        width: 85px;
    }
    height: 34px;
    border: 1px solid #357ebd;
    border-radius: 4px;
    background-color: #428bca;
    background-repeat: no-repeat;
    font-family: Arial;
    font-size: 14px;
    color: #ffffff;
    font-weight: 400;
    text-decoration: none solid rgb(255, 255, 255);
    text-align: center;
`;

let CartCount = styled.span`
    position: relative;
    top: 3px;
    width: 32px;
    height: 30px;
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

let CountContainer = styled.span`
    position: absolute;
    right: 12px;
`;

let CartCountButton = styled.button`
    padding:0;
    width: 24px;
    height: 24px;
    background: #ffffff;
    border:0px;
`;

let CartButtonImage = styled.img`
    width: 17px;
    height: 17px;
    fill: #000000;
`;

let Star = styled.img`
width: 20px;
@media (max-width: 450px) {
    width: 22px;
    height:22px;
}
height: 20px;
fill: #000000;
`;

let ProdCard =  styled(Card)`
width: 16.5rem;
height: 540px;
@media (max-width: 450px) {
    width: 18.5rem;
    height: 306px
}
`;

export {
    ProductTitle,
    ProductDesc,
    ProductPrice,
    AddToCartButon, 
    CartCount, 
    CartCountButton, 
    ProductRatings,
    ProductImage,
    CountContainer,
    CartButtonImage,
    Star,
    CardTag,
    ProdCard
};