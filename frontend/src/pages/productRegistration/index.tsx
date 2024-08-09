import { Input } from "../../components/input";
import { BackContainer, ButtonContainer, FormDiv, FormTitle, InputDiv, NewProduct } from "./style";
import OrangeButton from "../../components/orangeButton";
import Back from "../../components/back";


export default function ProductRegistration(){
    return(
        <NewProduct>
            <FormDiv>
                <BackContainer>
                    <Back/>
                </BackContainer>

                <FormTitle>Novo Produto</FormTitle>

                <InputDiv>
                    <Input secureTextEntry={false} placeholder="Nome  Produto"/>
                </InputDiv>
                <InputDiv>
                    <Input secureTextEntry={false} placeholder="Valor do Produto"/>
                </InputDiv>
                <InputDiv>
                    <Input secureTextEntry={false} placeholder="Descrição"/>
                </InputDiv>
                <InputDiv>
                    <Input secureTextEntry={false} placeholder="Categoria do Produto"/>
                </InputDiv>
                
                <ButtonContainer>
                    <OrangeButton texto="Adicionar Foto"/>
                </ButtonContainer>
            </FormDiv>
        </NewProduct>
    )
}