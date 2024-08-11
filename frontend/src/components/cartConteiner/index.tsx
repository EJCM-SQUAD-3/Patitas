import { Pressable } from "react-native";
import { BigConteiner, BottomSideConteiner, ConteinerImagem, Description, HeartImage, Imagem, Numero, Preco, Quantidade, SideInfosConteiner, Sinal, UpSideConteiner } from "./styles";
import { useState } from "react";
type Props ={

    description: string;
    preco: number;
    imagem: any;

}
const numero = 1;
export default function CartConteiner({description, preco, imagem}: Props){
    const [numero, setNumero] = useState(1);
    const [fullHeart, setFullHeart] = useState(true)

    function mudar(){
        setFullHeart(!fullHeart);
    }

    function plus(){
        setNumero(prevNumero => prevNumero + 1);
    }

    function less(){
        setNumero(prevNumero => prevNumero > 0 ? prevNumero - 1 : 0);
    }

    return(
        <BigConteiner>
            <ConteinerImagem>
                <Imagem source={imagem}/>
            </ConteinerImagem>
            <SideInfosConteiner>
                <UpSideConteiner>
                    <Description>{description}</Description>
                    <Pressable onPress={mudar}>
                    <HeartImage source={fullHeart ? require('../../assets/images/emptyHeartIcon.png'): require('../../assets/images/fullHeartIcon.png')}/>
                    </Pressable>
                </UpSideConteiner>
                <BottomSideConteiner>
                    <Preco>R$ {preco}</Preco>
                    <Quantidade>
                        <Pressable onPress={less}>
                        <Sinal source={require('../../assets/images/less.png')}/>
                        </Pressable>
                        <Numero>{numero}</Numero>
                        <Pressable onPress={plus}>
                        <Sinal source={require('../../assets/images/plus.png')}/>
                        </Pressable>
                    </Quantidade>
                </BottomSideConteiner>
            </SideInfosConteiner>
        </BigConteiner>
    )


}