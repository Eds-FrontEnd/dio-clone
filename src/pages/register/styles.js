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

export const Wrapper = styled.div`
    max-width: 300px;
`;

export const Column = styled.div`
    flex: 1;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;

export const Title = styled.h2`
    max-width: 350px;
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 30px;
    max-width: 70%;
    margin-bottom: 20px;
    line-height: 44px;
    color: #FFFFFF;

    @media screen and (min-width: 1530px){
        font-size: 32px;
        max-width: 60%;
    }

    @media screen and (max-width: 840px){
        font-size: 23px;
        width: 100vw;
        display: flex;
        margin: auto;
        margin-bottom: 25px;
        margin-top: -75px;
    }
`;

export const TitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 8px;

    @media screen and (max-width: 840px){
        font-size: 24px;
    }
`;

export const SubtitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;
`;

export const CriarText = styled.p`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 14px;
    color: #23DD7A;
    cursor: pointer;
`;

export const TextPrivacy = styled.p`
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    display: flex;
    flex-direction: row;
    gap: 5px;
`;
