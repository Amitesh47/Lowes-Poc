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
    padding: 0px 11px;
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


let AddFilterButton = styled.span`
    position: absolute;
    right: 12px;
    width: 32px;
    height: 32px;
    background: #ffffff;
    border:0px;
`;

let AddFilterButtonImage = styled.img`
    width: 32px;
    height: 32px;
    fill: #000000;
`;

let FilterCount = styled.div`
    position: absolute;
    top: 9px;
    right: 16px;
    width: 20px;
    height: 25px;
    color: #ffffff;
    font-weight: 700;
    text-decoration: none solid rgb(255, 255, 255);
    line-height: 23px;
    text-align: center;
    font-family: Arial;
    font-size: 11px;
    border-radius: 10px;
    background-color: #777777;
    background-repeat: no-repeat;
`;

let FilterConatiner = styled.div`
 margin-top: 89px;`;

 let FilterDetailsConatiner = styled.div`
 margin-top: 30px;`;

export {AddFilterButton,AddFilterButtonImage,FilterHeader,FilterSection,FilterSectionBottom,FilterConatiner,FilterCount,FilterDetailsConatiner}