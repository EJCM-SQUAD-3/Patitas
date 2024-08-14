import React from 'react';
import { Pressable } from 'react-native';
import { Distancia, BotaoContainer, Texto } from './styles';

type Props = {
  texto: string;
  onPress: any;
}

export default function Button({ texto, onPress }: Props) {
  return (
    <Pressable onPress={onPress}>
      <Distancia>
        <BotaoContainer>
          <Texto>{texto}</Texto>
        </BotaoContainer>
      </Distancia>
    </Pressable>
  );
}
