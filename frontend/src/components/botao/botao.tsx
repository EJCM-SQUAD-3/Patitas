import React from 'react';
import { Pressable } from 'react-native';
import { Distancia, BotaoContainer, Texto } from './botao.style';

type Props = {
  texto: string;
}

export default function Botao({ texto }: Props) {
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
