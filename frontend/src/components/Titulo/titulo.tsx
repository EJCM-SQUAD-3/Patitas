import React from 'react';
import { Container, PContainer, P, Atitas, Bola1, Bola2, Bola3 } from './titulo.style';

export default function Titulo() {
  return (
    <Container>
      <PContainer>
        <P>P</P>
        <Bola1 />
        <Bola2 />
      </PContainer>
      <Bola3 />
      <Atitas>atitas</Atitas>
    </Container>
  );
}
