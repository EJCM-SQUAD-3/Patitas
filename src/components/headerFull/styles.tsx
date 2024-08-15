import styled from "styled-components/native";

export const HeaderFullContainer = styled.View`

    min-width: 100%;
    height: 135px;
    background-color: #154962; 
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 60px;
    margin-bottom: 20px;
`

export const HeaderFullContentContainerLeft = styled.View`
  width: 300px;
  height: 110px;
  display: flex;
  flex-direction: column;
`;

export const Logotipo = styled.Image`
  width: 132px;
  height: 57px;
  margin-left: 120px;
`

export const IconEnderecoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  margin-top: 10px;
  margin-left: 10px;
`;

export const IconAddress = styled.Image`
  width: 30px;
  height: 30px;
  
`


export const TextAddress = styled.Text`
  color: #f2f3f3;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  font-family: 'Verdana';
  
`

export const HeaderFullContentContainerRight = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
`;

export const IconSeta = styled.Image`
  width: 15px;
  height: 15px;
  
`;

export const IconCar = styled.Image`
  width: 35px;
  height: 35px;
  
`;
