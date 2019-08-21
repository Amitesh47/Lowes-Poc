import styled from 'styled-components'

let DiscountSpan = styled.span`
    position :absolute;
    @media (max-width: 450px) {
        right:11px;
    }
    right:10px;
    top: 10px;
    color: white;
    font-weight: bold;
    padding: 5px 18px;
    background: rgba(0,0,0,0.2);
    border-radius: 2px;
    font-size: 0.9rem;
`;

export {DiscountSpan}
