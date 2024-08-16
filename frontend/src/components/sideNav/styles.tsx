import { Dimensions } from "react-native";
import styled from "styled-components/native";
const { width } = Dimensions.get('window');

export const SideNavigator = styled.View`
    width: 230px;
    height: 844px;
    position: fixed;
    flex-direction: column;
    align-items: center;
    background-color: #99DFEB;
    border-radius: 18px;
    margin-left: 170px;
    z-index: 1000;
    

`

export const ConfigConteiner = styled.View`
    padding-top: 25px;
    padding-right: 150px;
    
`
export const Config = styled.Image`
    width: 24px;
    height: 24px;

`

export const CatConteiner = styled.View`
    position: absolute;
    margin-top: -0px;
    margin-left: 149px;
`
export const Cat = styled.Image`
    width: 60.02px;
    height: 130.16px;

`

export const InfoUser = styled.View`
    padding-top: 20px;
    flex-direction: column;
    align-items: center;

`
export const Ola = styled.Text`
    font-family: 'Verdana';
    font-weight: 700;
    color: #154962;
    text-decoration: underline;
    font-size: 16px;
    padding: 10px 0px;
`
export const Sair = styled.Text`
    font-family: 'Verdana';
    color:#E97B0C;
    text-decoration: underline;
   text-decoration-color: #E97B0C;
    font-size: 12px;
`
export const Rayssa = styled.Image`
    width: 99px;
    height: 99px;
`
export const Opcao = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 20px;
    padding-left: 30px;

`

export const Textinho = styled.Text`
    font-family: 'Verdana';
    color:#154962;
    padding-left: 13px;

    font-size: 16px;
`
export const LittleImg = styled.Image`
    width: 22px;
    height: 20px;

`

export const PrimeirosItems = styled.View`
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
   
    padding-top: 35px;
    padding-right: 16px;
    border-bottom-width: 1px;
    border-bottom-color: #154962;
    padding-bottom: 15px;

`
export const SegundosItems = styled.View`
    flex-direction: column;
    justify-content: space-between;
    width: 86%;
    height: 220px;
    padding-top: 40px;

`