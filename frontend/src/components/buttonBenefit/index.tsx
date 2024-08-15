import {  BenefitContainer, Imagem, Texto  } from "./styles";

type Props = {
    texto: string;
    imagem: any;
}

export default function ButtonBenefit ({imagem, texto}: Props){

    return(
    <BenefitContainer>
        <Imagem source={imagem} />
        <Texto>{texto}</Texto>
    </BenefitContainer>
    )
}