import { HeaderSimpleContainer, Logotipo} from "./styles";



export default function HeaderSimple() {

  return (
    <HeaderSimpleContainer>
        <Logotipo source={require('../../assets/images/logotype.png')} />
    </HeaderSimpleContainer>
  )

}