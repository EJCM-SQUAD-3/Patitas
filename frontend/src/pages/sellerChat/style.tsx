import styled from 'styled-components/native';

export const MainDiv = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #F2F3F3;
`;

export const BackContainer = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: left;
  padding: 20px;
`;

export const TitleContainer = styled.View`
  width: 100%;
  position: relative;
`;

export const Title = styled.Text`
  color: #154962;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 16px;
  text-align: left;
  padding: 30px 0 10px;
  width: 100%;
  position: relative;
`;

export const Underline = styled.View`
  width: 170px;
  height: 1.5px;
  margin-top: -10px;
  background-color: #154962;
`;

export const ChatDiv = styled.View`
  background-color: #99DFEB;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  width: 100%;
`;


export const ProfileImage = styled.Image`
  border-radius: 10px;
  margin-right: 10px;
  width: 75px;
  height: 75px;
`;

export const UserName = styled.Text`
  color: #154962;
  font-family: 'Verdana';
  font-weight: 400;
  font-size: 16px;
  padding: 10px;
  flex: 1;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
  margin-left: 15px;
`;