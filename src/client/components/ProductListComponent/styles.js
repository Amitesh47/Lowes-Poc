import styled from 'styled-components'
import CardDeck from 'react-bootstrap/CardDeck'

let CategoryTitleTag = styled.h2`
    width: 316px;
    @media (max-width: 450px) {
        font-size: 24px;
    }
    height: 42px;
    margin-bottom: 14px;
    font-family: Arial;
    font-size: 37px;
    color: #222222;
    font-weight: 400;
    text-decoration: none solid rgb(34, 34, 34);
`;

let CardList = styled(CardDeck)`
"margin-bottom":"40px"
`;

export {CategoryTitleTag,CardList}