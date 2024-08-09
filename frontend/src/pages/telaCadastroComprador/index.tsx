import { Pressable } from "react-native";
import BotaoLaranja from "../../components/botaoLaranja";
import { Input } from "../../components/input";
import TituloReduzido from "../../components/tituloReduzido";
import { Patas } from "../login/styles";
import { Check, InputsConteiner, Tela, Termos, TermosConteiner } from "./styles";
import { useState } from "react";

export default function CadastroComprador (){

    const [trocar, setTrocar] = useState(true)
    
    function Troca(){
        setTrocar(!trocar)

    }


    return(
        <Tela>
        <TituloReduzido/>
        <InputsConteiner>
        <Input secureTextEntry={false} imagem={require('../../assets/images/userIcon.png')} placeholder="Nome ..."/>
        <Input secureTextEntry={false} imagem={require('../../assets/images/cpfIcon.png')} placeholder="CPF ..."/>
        <Input secureTextEntry={false} imagem={require('../../assets/images/arrobaIcon.png')} placeholder="E-mail ..."/>
        <Input secureTextEntry={false} imagem={require('../../assets/images/cadeado.png')} placeholder="Senha ..."/>
        <Input secureTextEntry={false} imagem={require('../../assets/images/cadeado.png')} placeholder="Confirmar Senha ..."/>
        </InputsConteiner>
        <TermosConteiner>
            <Pressable onPress={Troca}>
        <Check source={trocar ? require('../../assets/images/Checkbox.png') : require('../../assets/images/CheckboxFull.png')}/>
            </Pressable>
            <Termos>Concordo com os termos</Termos>
        </TermosConteiner>
        <BotaoLaranja texto="Entrar"/>
        </Tela>
        
    )

}