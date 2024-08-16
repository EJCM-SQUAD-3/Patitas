import React, { useState } from 'react';
import { InputFileContainer } from './styles';

export default function InputFile() {
    const [upload, setUpload] = useState<File | null>(null);  // Especifica que pode ser um File ou null

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();  // Previne o comportamento padrão de recarregar a página
        if (upload) {
            console.log('Arquivo selecionado:', upload);
            // Lógica de upload ou manipulação do arquivo
        } else {
            alert('Por favor, selecione um arquivo.');
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setUpload(e.target.files[0]);  // Atualiza o estado com o arquivo selecionado
        }
    };

    return (
        <InputFileContainer>
            <form onSubmit={handleSubmit}>
                <label htmlFor='upload'>
                    <img src={require('../../assets/images/cloud.png')} alt="Upload" />
                </label>
                <input 
                    id='upload' 
                    type='file' 
                    name='upload' 
                    onChange={handleFileChange}  // Adiciona a função com o tipo correto
                />
                <button type='submit'>Adicionar produto</button>
            </form>
        </InputFileContainer>
    );
}
