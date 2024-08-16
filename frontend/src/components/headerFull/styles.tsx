import styled from "styled-components/native";

export const HeaderFullContainer = styled.View`
  min-width: 100%;
  height: 135px;
  background-color: #154962; 
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
`
export const Logo = styled.Image`
  width: 132px;
  height: 57px;
`

export const ContainerAddress = styled.View `
  width: 100%;
  padding: 5px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

`
export const IconAddress = styled.Image`
  width: 30px;
  height: 30px;
  
`
export const ContainerCart = styled.View `
display: absolute;
position: right;

`

export const TextAddress = styled.Text`
  color: #f2f3f3;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  font-family: 'Verdana';
  
`
export const IconSeta = styled.Image`
  width: 15px;
  height: 15px;
`;

export const IconCar = styled.Image`
  width: 35px;
  height: 35px;
`;

export const PressableContainer = styled.View`
  position: absolute;
  right: 20px;
  top: 40px;
  width: 35px;
  height: 35px;
`;