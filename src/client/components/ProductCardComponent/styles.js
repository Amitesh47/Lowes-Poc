import styled from 'styled-components'

let CardTag= styled.span`
    margin-bottom: 30px;
`;

let ProductTitle = styled.h3`
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
    position :relative;
    right:10px;
    top: -10px;
    width: 241px;
    height: 200px;
`;

let ProductDesc = styled.div`
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
    color: #222222;
    font-weight: 400;
    text-decoration: none solid rgb(34, 34, 34);
`;

let ProductPrice = styled.div`
    width: 125px;
    height: 27px;
    font-family: Arial;
    font-size: 23px;
    color: #222222;
    font-weight: 400;
    text-decoration: none solid rgb(34, 34, 34);
`;

let AddToCartButon = styled.button`
    width: 130px;
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
height: 20px;
fill: #000000;
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
    CardTag
};