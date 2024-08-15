import { HeaderFullContainer, HeaderFullContentContainerLeft, HeaderFullContentContainerRight, IconAddress, IconCar, IconEnderecoContainer, IconSeta, Logotipo, TextAddress } from "./styles";



export default function HeaderFull() {

  return (
    <HeaderFullContainer>
      <HeaderFullContentContainerLeft>
        <Logotipo source={require('../../assets/images/logotype.png')} />
        <IconEnderecoContainer>
          <IconAddress source={require('../../assets/images/address.png')} />
          <TextAddress>Receber em <br></br>rua Dionísio, 72- apt 402</TextAddress>
        </IconEnderecoContainer>
      </HeaderFullContentContainerLeft>
      <HeaderFullContentContainerRight>
        <IconCar source={require('../../assets/images/carblue.png')} />
        <IconSeta source={require('../../assets/images/direction.png')} />
      </HeaderFullContentContainerRight>
    </HeaderFullContainer>
  )

}