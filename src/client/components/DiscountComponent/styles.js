import styled from 'styled-components'


let DiscountSpan = styled.span`
    position :absolute;
    background:url('./utils/assets/discountIcon.png');
    background-repeat: no-repeat;
    @media (max-width: 450px) {
        right:11px;
    }
    right:12px;
    top: 12px;
    color: yellow;
    font-weight: bold;
    font-size: 0.7rem;
    width:65px;
    height:65px;
    text-align: center;
`;

let DiscountDiv = styled.div`
    position: relative;
    top: 20
`;



export {DiscountSpan, DiscountDiv}

