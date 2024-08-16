import Back from "../../components/returnButton";
import InputFile from "../../components/inputFile";
import { useNavigation } from "@react-navigation/native";

import NavBar from "../../components/navBar";
import OrangeButton from "../../components/orangeButton";
import { Page, PageContentContainer, TitleAddPhoto } from "./styles";
import ReturnButton from "../../components/returnButton";
import NavBar2 from "../../components/navbar2";
import { Pressable } from "react-native";

export default function ProductPhoto() {
    const navigation = useNavigation();
    
    return (
        <Page>
            <Pressable onPress={() => navigation.navigate('ProductRegitration')} >
            <ReturnButton />
            </Pressable>
            <PageContentContainer>
                <TitleAddPhoto>Adicionar Foto do Produto</TitleAddPhoto>
                <InputFile />
                <OrangeButton 
                    onPress={() => navigation.navigate('Home/Vendedor')}  
                    texto={"Adicionar Produto"} 
                />
            </PageContentContainer>
            <NavBar2 activeIcon="profile" />
        </Page>
    );
}
