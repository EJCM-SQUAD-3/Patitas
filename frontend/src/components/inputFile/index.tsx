
import React, { useState, useRef } from 'react';
import { InputFileContainer } from './styles';





export default function InputFile() {

    const [upload, setUpload] = useState
 
    return(

    <InputFileContainer>
        <form action="">

            <label htmlFor='upload'> <img src={require('../../assets/images/cloud.png')} /> </label>
            <input id='upload' type='file' name='upload'></input>

            <button type='submit'>Adicionar produto</button>
        </form>
    </InputFileContainer>
    );
}
