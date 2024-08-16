import { Pressable } from "react-native";
import { HeaderFullContainer, HeaderFullContentContainerLeft, HeaderFullContentContainerRight, IconAddress, IconCar, IconEnderecoContainer, IconSeta, Logotipo, TextAddress } from "./styles";
import { useNavigation } from "@react-navigation/native";


export default function HeaderFull() {
 const navigation = useNavigation();
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
        <Pressable onPress={() => navigation.navigate('Cart')}>
        <IconCar source={require('../../assets/images/carblue.png')} />
        </Pressable>
        <IconSeta source={require('../../assets/images/direction.png')} />
      </HeaderFullContentContainerRight>
    </HeaderFullContainer>
  )

}