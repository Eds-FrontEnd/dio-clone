import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 840px){
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
    }
`;

export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    margin-bottom: 24px;

    @media screen and (max-width: 840px){
        font-size: 16px;
        text-align: center;
    }
`;

export const TitleHighlight = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF70;
    margin-bottom: 24px;

    @media screen and (max-width: 840px){
        font-size: 16px;
        text-align: center;
    }
`;

export const Column = styled.div`
    flex: ${({ flex }) => flex};
    padding-right: 24px;

    @media screen and (max-width: 840px){
        padding-right: 0;
        padding-bottom: 16px;
        flex: 1;
    }
`;
