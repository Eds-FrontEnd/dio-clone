import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 840px){
        flex-direction: column;
        justify-content: center;
    }
`;

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;

    @media screen and (max-width: 840px){
        font-size: 18px;
        gap: 5px;
        width: 100vw;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        margin: auto;
        margin-bottom: 25px;
        margin-top: -75px;
        justify-content: center;
    }
`;

export const TitleHighlight = styled.span`
    color: #E4105D;
`;

export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    width: 420px;

    margin-bottom: 20px;

    color: #FFFFFF;

    @media screen and (max-width: 840px){
        font-size: 14px;
        width: 100%;
        text-align: center;
    }
`;
