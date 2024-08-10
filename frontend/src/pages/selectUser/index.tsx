import React from 'react';
import { Tela, GataAstroContainer, GataAstroImage, Quem } from './styles';


import Button from '../../components/button';
import Title from '../../components/title';
import { useNavigation } from '@react-navigation/native';

export default function SelectUser() {
  const navigation = useNavigation()
  return (
    <Tela>
      <Title />
      <GataAstroContainer>
        <GataAstroImage source={require('../../assets/images/astroCat.png')} />
      </GataAstroContainer>
      <Quem>Quem é você?</Quem>
      <Button texto="Comprador" onPress={() => navigation.navigate('Login')}/>
      <Button texto="Vendedor" onPress={'nada'} />
    </Tela>
  );
}
