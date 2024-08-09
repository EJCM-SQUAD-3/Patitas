import { Pressable } from "react-native";
import Header from "../../components/header";
import { Buy, Conteiner, Doguinho, Tela, Texto } from "./styles";


export default function PurchaseCompleted(){

    return(
        <Tela>
            <Header/>
            <Conteiner>
                <Doguinho source={require('../../assets/images/Dogpaw.png')}/>
                <Pressable>
                <Buy>
                    <Texto>Compra finalizada com sucesso</Texto>
                </Buy>
                </Pressable>
            </Conteiner>

        </Tela>

    )

}