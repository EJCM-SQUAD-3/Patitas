import Back from "../../components/back";
import InputFile from "../../components/inputFile";
import NavBar from "../../components/navBar";
import OrangeButton from "../../components/orangeButton";
import { ButtonBackContainer, FooterContainer, Page, PageContentContainer, TitleAddPhoto, } from "./styles";

export default function userProfilePhoto() {

    return (
        <>
            <Page>
                <ButtonBackContainer>
                    <Back />
                </ButtonBackContainer>

                <PageContentContainer>
                    <TitleAddPhoto>Alterar Foto de Perfil</TitleAddPhoto>
                    <InputFile />
                    <OrangeButton texto={"Baixar foto"} />
                </PageContentContainer>

                <FooterContainer>
                    <NavBar activeIcon="profile" />
                </FooterContainer>
            </Page>
        </>
    )
}