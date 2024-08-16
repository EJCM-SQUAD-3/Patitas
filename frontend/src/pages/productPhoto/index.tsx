import Back from "../../components/back";
import InputFile from "../../components/inputFile";
import NavBar from "../../components/navBar";
import OrangeButton from "../../components/orangeButton";
import { ButtonBackContainer, FooterContainer, Page, PageContentContainer, TitleAddPhoto, } from "./styles";

export default function ProductPhoto() {

    return (
        <>
            <Page>
                <ButtonBackContainer>
                    <Back />
                </ButtonBackContainer>

                <PageContentContainer>
                    <TitleAddPhoto>Adicionar Foto do Produto</TitleAddPhoto>
                    <InputFile />
                    <OrangeButton texto={"Adicionar Produto"} />
                </PageContentContainer>

                <FooterContainer>
                    <NavBar activeIcon="profile" />
                </FooterContainer>
            </Page>
        </>
    )
}