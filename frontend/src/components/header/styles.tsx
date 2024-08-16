import styled from "styled-components/native";

export const HeaderConteiner = styled.Pressable`

    width: 100%;
    height: 77px;
    background-color: #154962; 
    position: fixed;
    z-index: 500;

`

export const Container = styled.View`
  width: 100%;
  height: 100px;
  flex-direction: row;
  justify-content: center;
`;

export const PContainer = styled.View`
  flex-direction: column;
  align-items: flex-end;
  padding: 0;
  margin: 0;
  height: 86px;
  justify-content: center;
  padding-bottom: 30px;
 
`;

export const P = styled.Text`
  padding: 0;
  font-size: 39.26px;
  font-family: 'Cherry Bomb One';
  color: #E97B0C;
`;

export const Atitas = styled.Text`
  font-size: 39.26px;
  font-family: 'Cherry Bomb One';
  color: #99DFEB;
`;

export const Bola1 = styled.View`
  background-color: #EDA61A;
  width: 4.91px;
  height: 4.91px;
  border-radius: 50%;
  position: absolute;
  margin-right: 9.5px;
  margin-bottom: 28px;
`;

export const Bola2 = styled.View`
  background-color: #3E99B4;
  width: 6.87px;
  height: 6.87px;
  border-radius: 50%;
  position: absolute;
  margin-bottom: 25px;
`;

export const Bola3 = styled.View`
  background-color: #99DFEB;
  width: 3.93px;
  height: 3.93px;
  border-radius: 50%;
  position: absolute;
  margin-right: 80px;
  margin-top: 20px;
`;
