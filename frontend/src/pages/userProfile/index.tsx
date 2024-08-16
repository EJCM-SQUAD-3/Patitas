import { Pressable } from "react-native";
import Back from "../../components/returnButton";
import BlueConteiner from "../../components/blueConteiner";
import { BackConteiner, Config, Conteiners, ImagemPessoa, Tela } from "./styles";
import { useNavigation } from "@react-navigation/native";
import ReturnButton from "../../components/returnButton";

export default function UserProfile(){
    const navigation = useNavigation();
    return(
        <Tela>
            <BackConteiner>
            <Pressable onPress={()=> navigation.navigate('Home')}>
            <ReturnButton/>
            </Pressable>
            </BackConteiner>
            <ImagemPessoa source={require('../../assets/images/girl.png')}/>
            <Config>Configurações de Perfil</Config>
            <Conteiners>
                <Pressable onPress={()=> navigation.navigate('UserProfilePhoto')}>
                <BlueConteiner textoForte="Alterar foto de usuário" textoFraco=""/>
                </Pressable>
                <BlueConteiner textoForte="Alterar nome de usuário" textoFraco="Rayssa"/>
                <BlueConteiner textoForte="Email" textoFraco="rayssa@gmail.br"/>
                <BlueConteiner textoForte="Trocar de senha" textoFraco="********"/>
                <BlueConteiner textoForte="Meus Endereços" textoFraco="R.Dionísio, 72 - RJ"/>
                <BlueConteiner textoForte="Cartões de Crédito" textoFraco="Mastercard- ***"/>
                <BlueConteiner textoForte="Alterar informações do Pet" textoFraco=""/>

                <BlueConteiner textoForte="Meus produtos" textoFraco=""/>
                <BlueConteiner textoForte="Excluir conta" textoFraco=""/>
            </Conteiners>
        </Tela>

    )
}