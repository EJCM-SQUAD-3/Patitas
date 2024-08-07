import React from 'react';
import { Pressable } from 'react-native';
import { Distancia, BotaoContainer, Texto } from './styles';

type Props = {
  texto: string;
}

export default function BotaoLaranja({ texto }: Props) {
  return (
    <Pressable>
      <Distancia>
        <BotaoContainer>
          <Texto>{texto}</Texto>
        </BotaoContainer>
      </Distancia>
    </Pressable>
  );
}
