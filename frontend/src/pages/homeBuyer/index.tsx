import { ScrollView } from "react-native-gesture-handler";
import ButtonBenefit from "../../components/buttonBenefit";
import CardSectionsHome from "../../components/cardSectionsHome";
import CircleBlueCategory from "../../components/circleBlueCategory";
import HeaderFull from "../../components/headerFull";
import NavBar from "../../components/navBar";
import TitleSectionsHome from "../../components/titleSectionsHome";
import { Page, PageContent, SectionHome, TitleBenefits, TypeBenefitContainer, TypeCategoryContainer } from "./styles";
import { View } from "react-native";



export default function HomeBuyer() {

    return (
        <Page>
            <HeaderFull/>
            <PageContent>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                    <TypeCategoryContainer>
                        <CircleBlueCategory texto={"Cachorros"} source={require('../../assets/images/dogs.png')} />
                        <CircleBlueCategory texto={"Gatos"} style={{width:70, height:100}}source={require('../../assets/images/cat1.svg')}/>
                        <CircleBlueCategory texto={"Peixes"} source={require('../../assets/images/fishes.png')}/>
                    </TypeCategoryContainer>
                </ScrollView>

                <TitleBenefits>Meus benefícios</TitleBenefits>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                    <TypeBenefitContainer>
                        <ButtonBenefit texto={"Frete grátis"} imagem={require('../../assets/images/car.png')}/>
                        <ButtonBenefit texto={"Cupons"} imagem={require('../../assets/images/ticket.png')}/>
                        <ButtonBenefit texto={"Cashback"} imagem={require('../../assets/images/cashback.svg')}/>
                    </TypeBenefitContainer>
                </ScrollView>

                <TitleSectionsHome texto={"Recomendados para você"} />
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                    <SectionHome>
                        <CardSectionsHome texto={"Coleira Peitoral..."} valor={"90,00"} imagem={require('../../assets/images/collar.png')}/>
                        <CardSectionsHome texto={"Coleira Peitoral..."} valor={"26,00"} imagem={require('../../assets/images/collars.png')}/>
                        <CardSectionsHome texto={"Coleira Peitoral..."} valor={"55,00"} imagem={require('../../assets/images/collar.png')}/>
                    </SectionHome>
                </ScrollView>

                <TitleSectionsHome texto={"Rações"} />
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                    <SectionHome>
                        <CardSectionsHome texto={"Ração Seca Nutrilus Pro + Frango ..."} valor={"132,00"} imagem={require('../../assets/images/food1.png')} />
                        <CardSectionsHome texto={"Ração Pedigree Nutrição Essen..."} valor={"150,00"} imagem={require('../../assets/images/food2.png')} />
                        <CardSectionsHome texto={"Ração Seca Espoleta Carne para cães ..."} valor={"75,00"} imagem={require('../../assets/images/food3.png')} />
                    </SectionHome>
                </ScrollView>

                <TitleSectionsHome texto={"Brinquedos"} />
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                    <SectionHome>
                        <CardSectionsHome texto={"Pneu Off Road,\nPvc Flex"} valor={"18,00"} imagem={require('../../assets/images/tire.png')} />
                        <CardSectionsHome texto={"Bola De Tênis Brinquedo..."} valor={"20,00"} imagem={require('../../assets/images/tennis.png')} />
                        <CardSectionsHome texto={"Brinquedo Mordedor Interativo Ca..."} valor={"40,00"} imagem={require('../../assets/images/teether.png')} />
                    </SectionHome>
                </ScrollView>

                <TitleSectionsHome texto={"Farmácia"} />
                <ScrollView style={{marginBottom:80}}showsHorizontalScrollIndicator={false} horizontal={true}>
                    <SectionHome>
                        <CardSectionsHome texto={"Novo Colar Elizabetano Veteri.."} valor={"50,00"} imagem={require('../../assets/images/necklance.png')} />
                        <CardSectionsHome texto={"Mega Calm - 60 Comprimidos"} valor={"99,99"} imagem={require('../../assets/images/remedy.png')} />
                        <CardSectionsHome texto={"Petisco Calmante para Cachorro"} valor={"44,90"} imagem={require('../../assets/images/snack.png')} />
                    </SectionHome>
                </ScrollView>
            </PageContent>
            <NavBar activeIcon="home" />
        </Page>

    )
}