import styled from 'styled-components'

// background: rgba(0,0,0,0.2);
//     border-radius: 2px;
// padding: 5px 18px;
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

// @media (max-width: 450px) {
//     width: 25px;
//     margin-left: -24px;
//     height: 25px;
//   }