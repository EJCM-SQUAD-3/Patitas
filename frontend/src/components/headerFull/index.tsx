import { useNavigation } from "@react-navigation/native";
import { ContainerAddress, HeaderFullContainer, IconAddress, IconCar, IconSeta, Logo, PressableContainer, TextAddress } from "./styles";
import { Pressable } from "react-native";


export default function HeaderFull() {
  const navigation = useNavigation();
  return (
    <>
      <HeaderFullContainer>
        <Logo source={require('../../assets/images/logotype.png')} />
        <ContainerAddress>
          <IconAddress source={require('../../assets/images/address.png')} />
          <TextAddress>Receber em <br></br>rua DionÃsio, 72- apt 402</TextAddress>
          <IconSeta source={require('../../assets/images/direction.png')} />
        </ContainerAddress>
        <PressableContainer >
          <Pressable onPress={() => {navigation.navigate("Cart")}}><IconCar source={require('../../assets/images/carblue.png')} /></Pressable>
        </PressableContainer>

      </HeaderFullContainer>
    </>
  )

}