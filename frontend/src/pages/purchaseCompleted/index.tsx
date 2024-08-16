import { Pressable } from "react-native";
import Header from "../../components/header";
import { Buy, Conteiner, Doguinho, Tela, Texto } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function PurchaseCompleted(){
const navigation = useNavigation()
    return(
        <Tela>
            <Header/>
            <Conteiner>
                <Doguinho source={require('../../assets/images/Dogpaw.png')}/>
                <Pressable onPress={()=> navigation.navigate('CHome') }>
                <Buy>
                    <Texto>Compra finalizada com sucesso</Texto>
                </Buy>
                </Pressable>
            </Conteiner>

        </Tela>

    )

}