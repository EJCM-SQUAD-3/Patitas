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
                    <Input secureTextEntry={false} placeholder="Nome  Produto" value={''} onChangeText={'nada'}/>
                </InputDiv>
                <InputDiv>
                    <Input secureTextEntry={false} placeholder="Valor do Produto" value={''} onChangeText={'nada'}/>
                </InputDiv>
                <InputDiv>
                    <Input secureTextEntry={false} placeholder="Descrição" value={''} onChangeText={'nada'}/>
                </InputDiv>
                <InputDiv>
                    <Input secureTextEntry={false} placeholder="Categoria do Produto" value={''} onChangeText={'nada'}/>
                </InputDiv>
                
                <ButtonContainer>
                    <OrangeButton texto="Adicionar Foto"/>
                </ButtonContainer>
            </FormDiv>
        </NewProduct>
    )
}