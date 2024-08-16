import { CategoriaContainer,  Texto, BlueContainer, Imagem } from "./styles";

type Props = {
    texto: string;
    imagem: any;
    
}

export default function CircleBlueCategory ({ imagem, texto}: Props){

    return(
    <CategoriaContainer>
        <BlueContainer>
        <Imagem source={imagem} /> 
        </BlueContainer>
        <Texto>{texto}</Texto>
    </CategoriaContainer>
    )
}