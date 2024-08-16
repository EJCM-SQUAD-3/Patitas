import ReturnButton from "../../components/returnButton";
import Back from "../../components/returnButton";
import { TitleContainer, Title, BackContainer, MainDiv, ProfileImage, UserName, Icon, ChatDiv, Underline } from "./style";

export default function SellerChat() {
  return (
    <MainDiv>
      <BackContainer>
        <ReturnButton />
        <TitleContainer>
          <Title>Fale com o vendedor</Title>
          <Underline/>
        </TitleContainer>
      </BackContainer>
        <ChatDiv>
          <ProfileImage source={require('../../assets/images/profile.png')} />
          <UserName>PetLove</UserName>
          <Icon source={require('../../assets/images/edit.png')} />
          <Icon source={require('../../assets/images/options.png')} />
        </ChatDiv>
    </MainDiv>
  );
}