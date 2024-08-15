

import Back from "../../components/back";
import InputFile from "../../components/inputFile";


import NavBar from "../../components/navBar";
import OrangeButton from "../../components/orangeButton";
import { Page, PageContentContainer, TitleAddPhoto, } from "./styles";



export default function ProductPhoto() {

    return (
        <Page>
            <Back />
            <PageContentContainer>
                <TitleAddPhoto>Adicionar Foto do Produto</TitleAddPhoto>


               
            <InputFile />


                <OrangeButton texto={"Adicionar Produto"} />
            </PageContentContainer>
            <NavBar activeIcon="profile" />
        </Page>
    )
}