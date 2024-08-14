import styled from 'styled-components/native';

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
 
`;

export const P = styled.Text`
  padding: 0;
  font-size: 57.93px;
  font-family: 'Cherry Bomb One';
  color: #E97B0C;
`;

export const Atitas = styled.Text`
  font-size: 57.93px;
  font-family: 'Cherry Bomb One';
  color: #154962;
`;

export const Bola1 = styled.View`
  background-color: #154962;
  width: 7.24px;
  height: 7.24px;
  border-radius: 50%;
  position: absolute;
  margin-right: 15px;
  margin-bottom: 45px;
`;

export const Bola2 = styled.View`
  background-color: #3E99B4;
  width: 10.14px;
  height: 10.14px;
  border-radius: 50%;
  position: absolute;
  margin-bottom: 40px;
`;

export const Bola3 = styled.View`
  background-color: #154962;
  width: 5.79px;
  height: 5.79px;
  border-radius: 50%;
  position: absolute;
  margin-right: 112px;
  margin-top: 30px;
`;
