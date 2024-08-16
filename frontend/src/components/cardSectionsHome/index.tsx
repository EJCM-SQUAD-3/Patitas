import { Botao, CardSectionContainer, ContentContainer, Imagem, ImagemContainer, Texto, TipoMoeda, Valor, ValorFormatado } from "./styles";


type Props = {
    texto: string;
    valor: string;
    imagem: any;
}

export default function CardSectionsHome({ imagem, texto, valor }: Props) {

    return (
        <CardSectionContainer>
            <ImagemContainer>
                <Imagem source={imagem} />
            </ImagemContainer>
            <ContentContainer>
                <Texto>{texto}</Texto>
                <Botao source={require('../../assets/images/sum.png')} />
                <ValorFormatado>
                    <TipoMoeda>R$</TipoMoeda>
                    <Valor>{valor}</Valor>
                </ValorFormatado>
            </ContentContainer>
        </CardSectionContainer>
    )
}  