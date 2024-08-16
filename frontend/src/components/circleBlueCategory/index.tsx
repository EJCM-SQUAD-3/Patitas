import { ImageProps, ImageSourcePropType } from "react-native";
import { CategoriaContainer, Imagem, Texto, BlueContainer } from "./styles";

type CircleProps = ImageProps & {
    texto: string;
    source: ImageSourcePropType
}

export default function CircleBlueCategory (props: CircleProps){

    return(
    <CategoriaContainer>
        <BlueContainer>
        <Imagem {...props} source={props.source} />
        </BlueContainer>
        <Texto>{props.texto}</Texto>
    </CategoriaContainer>
    )
}