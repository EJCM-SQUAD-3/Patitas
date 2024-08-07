import styled from "styled-components/native";

export const InputConteiner = styled.View`
    width: 314px;
    height: 54px;
    align-items: flex-end;
    flex-direction: row;
    border-bottom-width: 1px;
    border-bottom-color: #053D58CC;
    padding-bottom:10;
   

`

export const InputTexto = styled.TextInput`
    margin:0;
    
    decoration: none;
    padding-left: 10px;
    font-size: 16px;
    font-family: 'Verdana';
    outline: none;
    border: none;
    
     &:focus {
    outline: none;
    border: none;
  }

`
export const Imagem = styled.Image`

  width: 21px;
  height: 21px;
 
  
  margin:0;
  padding:0;

`