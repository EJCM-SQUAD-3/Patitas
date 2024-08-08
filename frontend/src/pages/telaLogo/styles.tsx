import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";


export const Tela = styled.View`

  flex:1;
`

export const GradientBackground = styled(LinearGradient).attrs({
  colors: ['#3E99B4', '#F2F3F3'],
  
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;




