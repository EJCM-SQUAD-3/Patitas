import React from 'react';
import { Pressable } from 'react-native';
import { Distancia, BotaoContainer, Texto } from './styles';
import { useNavigation } from '@react-navigation/native';


export default function BlueButton() {
 
 
  return (
    
      <Distancia>
        <BotaoContainer>
          <Texto>Finalizar Compra</Texto>
        </BotaoContainer>
      </Distancia>
   
  );
}
