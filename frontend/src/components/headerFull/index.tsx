import { ContainerAddress, HeaderFullContainer, HeaderFullContentContainerLeft, HeaderFullContentContainerRight, IconAddress, IconCar, IconSeta, Logotipo, TextAddress } from "./styles";

export default function HeaderFull() {

  return (
    <>
    <HeaderFullContainer>
        <Logotipo source={require('../../assets/images/logotype.png')} />
        <ContainerAddress>
          <IconAddress source={require('../../assets/images/address.png')} />
          <TextAddress>Receber em <br></br>rua Dionísio, 72- apt 402</TextAddress>
        <IconSeta source={require('../../assets/images/direction.png')} />
        </ContainerAddress>
        <IconCar source={require('../../assets/images/carblue.png')} />
    </HeaderFullContainer>
    </>
  )

}