import React from 'react';
import { Tela, GataAstroContainer, GataAstroImage, Quem } from './escolhaUsuario.style';
import Titulo from '../../components/Titulo/titulo';
import Botao from '../../components/botao/botao';

export default function EscolhaUsuario() {
  return (
    <Tela>
      <Titulo />
      <GataAstroContainer>
        <GataAstroImage source={require('../../assets/gatoAstronauta.png')} />
      </GataAstroContainer>
      <Quem>Quem é você?</Quem>
      <Botao texto="Comprador" />
      <Botao texto="Vendedor" />
    </Tela>
  );
}
