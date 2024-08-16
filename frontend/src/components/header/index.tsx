import React, { useState } from 'react';
import { Atitas, Bola1, Bola2, Bola3, Container, HeaderConteiner, P, PContainer } from "./styles";
import SideNav from '../sideNav'; // Certifique-se de ajustar o caminho
import { TouchableOpacity } from 'react-native';
export default function Header() {
  const [isSideNavVisible, setIsSideNavVisible] = useState(false);

  // Função para alternar a visibilidade do SideNav
  const toggleSideNav = () => {
    setIsSideNavVisible(!isSideNavVisible);
  };
  return (
    <>
      
        <HeaderConteiner onPress={toggleSideNav}>
          <Container>
            <PContainer>
              <P>P</P>
              <Bola1 />
              <Bola2 />
            </PContainer>
            <Bola3 />
            <Atitas>atitas</Atitas>
          </Container>
        </HeaderConteiner>
      

      {isSideNavVisible && <SideNav />}
    </>
  );
}