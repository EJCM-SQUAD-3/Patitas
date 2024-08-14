import React from 'react';
import { Pressable } from 'react-native';
import { Distancia, BotaoContainer, Texto } from './styles';



export default function BlueButton() {
  return (
    <Pressable>
      <Distancia>
        <BotaoContainer>
          <Texto>Finalizar Compra</Texto>
        </BotaoContainer>
      </Distancia>
    </Pressable>
  );
}
