import styled from 'styled-components'

let FilterHeader = styled.div`
    width: 215px;
    height: 42px;
    padding: 0px 15px;
    border: 1px solid #428bca;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: #428bca;
    font-family: Arial;
    font-size: 14px;
    color: #ffffff;
    font-weight: 400;
    text-decoration: none solid rgb(255, 255, 255);
`;

let FilterSection = styled.div`
    width: 215px;
    height: 42px;
    padding: 0px 15px;
    border: 1px solid #dddddd;
    background-color: #ffffff;
    font-family: Arial;
    font-size: 14px;
    color: #555555;
    font-weight: 400;
    text-decoration: none solid rgb(85, 85, 85);

`;

let FilterSectionBottom = styled(FilterSection)`
    width: 215px;
    height: 42px;
    padding: 0px 15px;
    border: 1px solid #dddddd;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    background-color: #ffffff;
    font-family: Arial;
    font-size: 14px;
    color: #555555;
    font-weight: 400;
    text-decoration: none solid rgb(85, 85, 85);
`;


let AddFilterButton = styled.button`
    position: absolute;
    right: 0px;
    width: 32px;
    height: 32px;
    background: #ffffff;
    border:0px;
`;

export {AddFilterButton,FilterHeader,FilterSection,FilterSectionBottom}