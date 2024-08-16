import { Botao, CardSectionContainer, ContentContainer, Imagem, ImagemContainer, Texto, TipoMoeda, Valor, ValorFormatado } from "./styles";

type CardSectionsHome = {
    texto: string;
    valor: string;
    imagem: any;
}

export default function CardSectionsHome(props: CardSectionsHome) {

    return (
        <>
            <CardSectionContainer>
                <ImagemContainer>
                    <Imagem source={props.imagem} />
                </ImagemContainer>
                <ContentContainer>
                    <Texto>{props.texto}</Texto>
                    <Botao source={require('../../assets/images/sum.png')} />
                    <ValorFormatado>
                        <TipoMoeda>R$</TipoMoeda>
                        <Valor>{props.valor}</Valor>
                    </ValorFormatado>
                </ContentContainer>
            </CardSectionContainer>
        </>
    )
}  