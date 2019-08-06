import styled from 'styled-components'

let ProductTitle = styled.h3`
    width: 228px;
    height: 31px;
    font-family: Arial;
    font-size: 27px;
    color: #222222;
    font-weight: 400;
    text-decoration: none solid rgb(34, 34, 34);
    margin-top: 8px;
    margin-bottom: 8px;
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
`;

let ProductRatings = styled.div`
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

let CartCountButton = styled.button`
    width: 24px;
    height: 24px;
    background: #ffffff;
    border:0px;
`;

let Whatever123 = styled.div`
    color: #222222;
`;

export {ProductTitle,ProductDesc,ProductPrice,AddToCartButon, CartCount, CartCountButton,Whatever123, ProductRatings};