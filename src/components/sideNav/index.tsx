import { CatConteiner, Config, ConfigConteiner, InfoUser, SideNavigator, Cat, Rayssa, Ola, Sair, PrimeirosItems, Opcao, LittleImg, Textinho, SegundosItems } from "./styles";
import { useState } from "react";
import { PanGestureHandler, State } from 'react-native-gesture-handler';
export default function SideNav(){

    return(
        <SideNavigator>

            <ConfigConteiner>
                <Config source={require('../../assets/images/configIcon.png')}/>
            </ConfigConteiner>
            <CatConteiner>
                <Cat source={require('../../assets/images/upCat.png')}/>
            </CatConteiner>
            <InfoUser>
                <Rayssa source={require('../../assets/images/Rayssa.png')}/>
                <Ola>Olá, Rayssa!</Ola>
                <Sair>Sair da Conta</Sair>
            </InfoUser>
            <PrimeirosItems>
                <Opcao>
                    <LittleImg source={require('../../assets/images/formIcon.png')}/>
                    <Textinho>Departamentos</Textinho>
                </Opcao>
                <Opcao>
                    <LittleImg source={require('../../assets/images/heartIcon.png')}/>
                    <Textinho>Favoritos</Textinho>
                </Opcao>
                <Opcao>
                    <LittleImg source={require('../../assets/images/ShoppingBagIcon.png')}/>
                    <Textinho>Meus pedidos</Textinho>
                </Opcao>
                <Opcao>
                    <LittleImg source={require('../../assets/images/pencilIcon.png')}/>
                    <Textinho>Lista de Compras</Textinho>
                </Opcao>
                <Opcao>
                    <LittleImg source={require('../../assets/images/chatIcon.png')}/>
                    <Textinho>Mensagens</Textinho>
                </Opcao>
                <Opcao>
                    <LittleImg />
                    <Textinho>Suas avaliações</Textinho>
                </Opcao>
            </PrimeirosItems>
            <SegundosItems>
                <Textinho>Fale conosco</Textinho>
                <Textinho>Seja um Vendedor</Textinho>
                <Textinho>Regras da Fidelidade</Textinho>
                <Textinho>Termos de Uso</Textinho>
                <Textinho>Política de Privacidade</Textinho>

            </SegundosItems>


        </SideNavigator>

    )

}