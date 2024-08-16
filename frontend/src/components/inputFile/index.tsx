import React from 'react';
import { InputFileContainer } from './styles';

export default function InputFile() {

    return (
        <>
            <InputFileContainer>
                <label htmlFor='upload'> <img src={require('../../assets/images/cloud.png')}/> </label>
                <input id='upload' type='file' name='upload' style={{ display: "none" }}/>
            </InputFileContainer>
        </>

    );
}
