

import Back from "../../components/returnButton";
import InputFile from "../../components/inputFile";


import NavBar from "../../components/navBar";
import OrangeButton from "../../components/orangeButton";
import { Page, PageContentContainer, TitleAddPhoto, } from "./styles";
import ReturnButton from "../../components/returnButton";



export default function ProductPhoto() {

    return (
        <Page>
            <ReturnButton/>
            <PageContentContainer>
                <TitleAddPhoto>Adicionar Foto do Produto</TitleAddPhoto>


               
            <InputFile />


                <OrangeButton texto={"Adicionar Produto"} />
            </PageContentContainer>
            <NavBar activeIcon="profile" />
        </Page>
    )
}