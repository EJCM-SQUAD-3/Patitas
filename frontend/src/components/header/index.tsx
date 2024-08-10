import { Atitas, Bola1, Bola2, Bola3, Container, HeaderConteiner, P, PContainer } from "./styles";


export default function Header(){

    return(

        <HeaderConteiner>
            <Container>
      <PContainer>
        <P>P</P>
        <Bola1 />
        <Bola2 />
      </PContainer>
      <Bola3 />
      <Atitas>atitas</Atitas>
    </Container>

        </HeaderConteiner>
    )

}