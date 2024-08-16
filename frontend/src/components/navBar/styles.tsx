import styled from 'styled-components/native'

export const NavBarDiv = styled.View`
    width: 100%;
    height: 71px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    z-index: 1000;
    background-color: #154962;
`;

export const IconDiv = styled.Pressable`
    color: white;
    flex: 1;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const Icon = styled.Image`
    width: 24px;
    height: 24px;
`;

export const BottomLine = styled.View`
    width: 20%;
    height: 2px;
    background-color: white;
    position: absolute;
    bottom: -6px;
`;