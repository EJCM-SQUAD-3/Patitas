import styled from "styled-components/native";

export const CategoriaContainer = styled.View`
    width: 120px;
    height: 153px;
   display: flex;
   align-items: center;
   justify-content: center;
    
   
`;
export const BlueContainer = styled.View`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #154962;
    margin-bottom: 10px;
    align-items: center;
    justify-content:center;
    z-index: 1;
   
`

export const Texto = styled.Text`
    color: #154962;
    font-size: 15px;
    line-height: 22px;
    font-weight: 600;
  
  
`
export const Imagem = styled.Image`
   width: 80px;
   height: 80px;
   object-fit: contain;
  
`