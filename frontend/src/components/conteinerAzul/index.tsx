import { Conteiner1, Conteiner2, ConteinerAzulClaro, SetaDireita, TextoForte, TextoFraco } from "./style";

type Props ={
    textoForte: string;
    textoFraco: string;

}

export default function ConteinerAzul ({textoForte, textoFraco}: Props){
    return(
        <ConteinerAzulClaro>

            <Conteiner1>
                <TextoForte>{textoForte}</TextoForte>
            </Conteiner1>

            <Conteiner2>
                <TextoFraco>{textoFraco}</TextoFraco>
                <SetaDireita source={require('../../assets/images/setaDireita.png')}/>
            </Conteiner2>
        </ConteinerAzulClaro>

    )


}