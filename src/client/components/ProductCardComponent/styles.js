import styled from 'styled-components'

let ProductTitle = styled.h3`
    width: 228px;
    height: 31px;
    font-family: Arial;
    font-size: 27px;
    color: #222222;
    font-weight: 400;
    text-decoration: none solid rgb(34, 34, 34);
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

let ProductPrice = styled.div`
    width: 125px;
    height: 27px;
    font-family: Arial;
    font-size: 23px;
    color: #222222;
    font-weight: 400;
    text-decoration: none solid rgb(34, 34, 34);
`;

export {ProductTitle,ProductDesc,ProductPrice};