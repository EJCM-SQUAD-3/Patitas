import { Pressable } from "react-native";
import Back from "../../components/returnButton";
import BlueButton from "../../components/blueButton";
import Header from "../../components/header";
import { Input } from "../../components/input";
import NavBar from "../../components/navBar";
import { BackConteiner, Conteiner, Endereco, Tela } from "./styles";
import { useNavigation } from "@react-navigation/native";
import ReturnButton from "../../components/returnButton";

export default function AdressRegister(){
const navigation = useNavigation();
    return(

        <Tela>
            <Header/>
            <BackConteiner>
            <ReturnButton/>
            </BackConteiner>
            <Endereco>Endereço</Endereco>
            <Conteiner>
            <Input secureTextEntry={false} imagem={require('../../assets/images/blackProfileIcon.png')} placeholder="CPF ..." value={''} onChangeText={'nada'} />
            <Input secureTextEntry={false} imagem={require('../../assets/images/cepIcon.png')} placeholder="CEP" value={''} onChangeText={'nada'} />
            <Input secureTextEntry={false} imagem={require('../../assets/images/truckIcon.png')} placeholder="Cidade ..." value={''} onChangeText={'nada'} />
            <Input secureTextEntry={false} imagem={require('../../assets/images/truckIcon.png')} placeholder="Bairro" value={''} onChangeText={'nada'} />
            </Conteiner>
            <Pressable>
            <BlueButton/>
            </Pressable>
            <NavBar activeIcon="home"/>
        </Tela>
    )
}