import styled from "styled-components"

export const NewProduct = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    background-color: #F2F3F3;
`;

export const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 400px;
`;

export const FormTitle = styled.h2`
    font-family: 'Verdana', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #154962;
`;

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 100%;
`;

export const BackContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 30px 0 15px 0;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 60px;
`;