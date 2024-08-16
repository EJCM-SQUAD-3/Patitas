import Back from "../../components/back";
import InputFile from "../../components/inputFile";
import NavBar from "../../components/navBar";
import OrangeButton from "../../components/orangeButton";
import { ButtonBackContainer, FooterContainer, Page, PageContentContainer, TitleAddPhoto, } from "./styles";
import { useNavigation } from "@react-navigation/native";
export default function userProfilePhoto() {
const navigation = useNavigation();
    return (
        <>
            <Page>
                <ButtonBackContainer onPress={()=>navigation.navigate('Home')}>
                    <Back />
                </ButtonBackContainer>

                <PageContentContainer>
                    <TitleAddPhoto>Alterar Foto de Perfil</TitleAddPhoto>
                    <InputFile />
                    <OrangeButton  onPress={()=>navigation.navigate('Home')} texto={"Baixar foto"} />
                </PageContentContainer>

                <FooterContainer>
                    <NavBar activeIcon="profile" />
                </FooterContainer>
            </Page>
        </>
    )
}