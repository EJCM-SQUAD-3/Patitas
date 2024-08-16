import { Pressable } from "react-native";

import { Input } from "../../components/input";

import { Patas } from "../login/styles";
import { Check, InputsConteiner, Tela, Termos, TermosConteiner } from "./styles";
import { useState } from "react";
import SmallTitle from "../../components/smallTitle";
import OrangeButton from "../../components/orangeButton";

export default function ScreenRegisterBuyer (){

    const [trocar, setTrocar] = useState(true)
    
    function Troca(){
        setTrocar(!trocar)

    }


    return(
        <Tela>
        <SmallTitle/>
        <InputsConteiner>
        <Input secureTextEntry={false} imagem={require('../../assets/images/userIcon.png')} placeholder="Nome ..."/>
        <Input secureTextEntry={false} imagem={require('../../assets/images/cpfIcon.png')} placeholder="CPF ..."/>
        <Input secureTextEntry={false} imagem={require('../../assets/images/arrobaIcon.png')} placeholder="E-mail ..."/>
        <Input secureTextEntry={false} imagem={require('../../assets/images/lock.png')} placeholder="Senha ..."/>
        <Input secureTextEntry={false} imagem={require('../../assets/images/lock.png')} placeholder="Confirmar Senha ..."/>
        </InputsConteiner>
        <TermosConteiner>
            <Pressable onPress={Troca}>
        <Check source={trocar ? require('../../assets/images/Checkbox.png') : require('../../assets/images/CheckboxFull.png')}/>
            </Pressable>
            <Termos>Concordo com os termos</Termos>
        </TermosConteiner>
        <OrangeButton texto="Entrar"/>
        </Tela>
        
    )

}