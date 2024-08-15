


import CardSectionsHome from "../../components/cardSectionsHome";
import HeaderSimple from "../../components/headerSimple";
import NavBar from "../../components/navBar";
import TitleSectionsHome from "../../components/titleSectionsHome";
import { Page, PageContent, SectionHome } from "./styles";



export default function HomeSeller() {

    return (
        <Page>
            <HeaderSimple />
            <PageContent>
                <TitleSectionsHome texto={"Seus produtos"} />
                <SectionHome>
                    <CardSectionsHome texto={"Coleira Peitoral..."} valor={"90,00"} imagem={require('../../assets/images/collar.png')} />
                    <CardSectionsHome texto={"Coleira Peitoral..."} valor={"26,00"} imagem={require('../../assets/images/collars.png')} />
                    <CardSectionsHome texto={"Coleira Peitoral..."} valor={"55,00"} imagem={require('../../assets/images/collar.png')} />
                </SectionHome>
                <SectionHome>
                    <CardSectionsHome texto={"Ração Seca Nutrilus Pro + Frango ..."} valor={"132,00"} imagem={require('../../assets/images/food1.png')} />
                    <CardSectionsHome texto={"Ração Pedigree Nutrição Essen..."} valor={"150,00"} imagem={require('../../assets/images/food2.png')} />
                    <CardSectionsHome texto={"Ração Seca Espoleta Carne para cães ..."} valor={"75,00"} imagem={require('../../assets/images/food3.png')} />
                </SectionHome>
            </PageContent>
            <NavBar activeIcon="home" />
        </Page>
    )
}