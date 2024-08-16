import Back from "../../components/returnButton";
import BlueConteiner from "../../components/blueConteiner";
import { BackConteiner, Config, Conteiners, ImagemPessoa, Tela } from "./style";
import ReturnButton from "../../components/returnButton";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import NavBar2 from "../../components/navbar2";

export default function SellerProfile(){
const navigation = useNavigation();
    return(
        <Tela>
            <BackConteiner onPress={()=> navigation.navigate('Home/Vendedor')}>
                <ReturnButton/>
            </BackConteiner>

            <ImagemPessoa source={require('../../assets/images/girl.png')}/>

            <Config>Configurações de Perfil</Config>

            <Conteiners>
                <Pressable onPress={()=> navigation.navigate('')}>
                <BlueConteiner textoForte="Alterar foto de usuário" textoFraco=""/>
                </Pressable>

                <BlueConteiner textoForte="Alterar nome de usuário" textoFraco="Rayssa"/>
                <BlueConteiner textoForte="Email" textoFraco="rayssa@gmail.br"/>
                <BlueConteiner textoForte="Trocar de senha" textoFraco="********"/>
                <BlueConteiner textoForte="Meus produtos" textoFraco=""/>
                <Pressable onPress={()=> navigation.navigate('ProductRegitration')}>
                <BlueConteiner textoForte="Novo Produto" textoFraco=""/>
                </Pressable>
                <BlueConteiner textoForte="Excluir conta" textoFraco=""/>
            </Conteiners>
            <NavBar2 activeIcon="profile"/>
        </Tela>

    )
}