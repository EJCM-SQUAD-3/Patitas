import { Pressable } from "react-native";
import Back from "../../components/returnButton";
import BlueButton from "../../components/blueButton";
import CartConteiner from "../../components/cartConteiner";
import Header from "../../components/header";
import NavBar from "../../components/navBar";
import { BackConteiner, Conteiners, Tela } from "./styles";
import { useNavigation } from "@react-navigation/native";
import ReturnButton from "../../components/returnButton";

export default function Cart(){
    const navigation = useNavigation();

    return(

        <Tela>
          
            <Header/>
            <BackConteiner>
            <ReturnButton/>
            </BackConteiner>
            <Conteiners>
                <CartConteiner imagem={require('../../assets/images/pedigree.png')} description="Adulto - Ração Pedigree Nutrição 
Essencial Carne para Cães Adultos" preco={160}/>

                <CartConteiner imagem={require('../../assets/images/dogFood.png')} description="Adulto - Ração Pedigree Nutrição 
Essencial Carne para Cães Adultos" preco={90}/>
                <CartConteiner imagem={require('../../assets/images/dog.png')} description="Blusa Jacquard Tricolor Sport" preco={82}/>
                <CartConteiner imagem={require('../../assets/images/dogName.png')} description="Corrente Inox e Pingente Várias 
Cores - Apolo" preco={50}/>

            </Conteiners>
            <Pressable onPress={()=> navigation.navigate}>
            <BlueButton/>
            </Pressable>
            
            <NavBar activeIcon="home"/>
        </Tela>
    )
}