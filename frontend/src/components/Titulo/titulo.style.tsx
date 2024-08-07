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
  height: 100px;
  justify-content: center;
`;

export const P = styled.Text`
  padding: 0;
  padding-top: 15px;
  font-size: 80px;
  font-family: 'Cherry Bomb One';
  color: #E97B0C;
`;

export const Atitas = styled.Text`
  font-size: 80px;
  font-family: 'Cherry Bomb One';
  color: #154962;
`;

export const Bola1 = styled.View`
  background-color: #154962;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  margin-right: 20px;
  margin-bottom: 49px;
`;

export const Bola2 = styled.View`
  background-color: #3E99B4;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: absolute;
  margin-bottom: 40px;
`;

export const Bola3 = styled.View`
  background-color: #154962;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: absolute;
  margin-right: 160px;
  margin-top: 42px;
`;
