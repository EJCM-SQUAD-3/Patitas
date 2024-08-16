import styled from "styled-components/native";

export const Page = styled.View`
    width: 100%;
    height: 75%;
    margin:0;
    display: flex;
    flex-direction:column;  
`;

export const ButtonBackContainer = styled.View`
   padding-top:24px;
   padding-left:24px;
`;

export const PageContentContainer = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-between;
`;

export const TitleAddPhoto = styled.Text`
    color:#154962;
    font-family:'Verdana';
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    margin: 40px 0px 200px 0px;
`;

export const FooterContainer = styled.View`
    width: 100%;
    height: 62px;
    bottom: 0;
`;


