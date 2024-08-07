import React from 'react';
import { Tela, GataAstroContainer, GataAstroImage, Quem } from './styles';
import Titulo from '../../components/titulo';
import Botao from '../../components/botao';

export default function EscolhaUsuario() {
  return (
    <Tela>
      <Titulo />
      <GataAstroContainer>
        <GataAstroImage source={require('../../assets/images/gatoAstronauta.png')} />
      </GataAstroContainer>
      <Quem>Quem é você?</Quem>
      <Botao texto="Comprador" />
      <Botao texto="Vendedor" />
    </Tela>
  );
}
