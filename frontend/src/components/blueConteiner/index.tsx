import { Pressable } from "react-native";
import { Conteiner1, Conteiner2, ConteinerAzulClaro, SetaDireita, TextoForte, TextoFraco } from "./style";

type Props ={
    textoForte: string;
    textoFraco: string;

}

export default function BlueConteiner ({textoForte, textoFraco}: Props){
    return(
        <Pressable>
        <ConteinerAzulClaro>

            <Conteiner1>
                <TextoForte>{textoForte}</TextoForte>
            </Conteiner1>

            <Conteiner2>
                <TextoFraco>{textoFraco}</TextoFraco>
                <SetaDireita source={require('../../assets/images/rightArrow.png')}/>
            </Conteiner2>
        </ConteinerAzulClaro>
        </Pressable>

    )


}