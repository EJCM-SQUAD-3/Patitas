import React from 'react';
import { Tela, GataAstroContainer, GataAstroImage, Quem } from './styles';


import Button from '../../components/button';
import Title from '../../components/title';

export default function SelectUser() {
  return (
    <Tela>
      <Title />
      <GataAstroContainer>
        <GataAstroImage source={require('../../assets/images/astroCat.png')} />
      </GataAstroContainer>
      <Quem>Quem é você?</Quem>
      <Button texto="Comprador" />
      <Button texto="Vendedor" />
    </Tela>
  );
}
