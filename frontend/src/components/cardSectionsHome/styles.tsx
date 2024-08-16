import styled from "styled-components/native";

export const CardSectionContainer = styled.View`
    width: 150px;
    height: 190px; 
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 12px;
   border-radius: 18px;
   box-shadow: 0px 0px 4px  rgba(0, 0, 0, 0.5); 
`;

export const ImagemContainer = styled.View`
    width: 110px;
    height: 88px;
   border-radius: 20px;
   margin-top: -21px; 
`;

export const ContentContainer = styled.View`
    width: 105px;
    height: 50px;
`;

export const Texto = styled.Text`
    color: #154962;
    font-size: 10px;
    line-height: 12px;
    font-weight: 400;
    font-family: 'Verdana';
    word-wrap: break-word;
`;

export const ValorFormatado = styled.View`
    width: 64px;
    height: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const TipoMoeda = styled.Text`
    color: #154962;
    font-size: 12px;
    line-height: 12px;
    font-weight: 700;
    font-family: 'Verdana';
    margin-right: 7px;
`;

export const Valor = styled.Text`
    color: #154962;
    font-size: 12px;
    line-height: 12px;
    font-weight: 400;
    font-family: 'Verdana';
`;

export const Imagem = styled.Image`
    width: 112px;
    height: 88px;
`;

export const Botao = styled.Image`
    width: 24px;
    height: 24px;
    align-self: flex-end; 
`;