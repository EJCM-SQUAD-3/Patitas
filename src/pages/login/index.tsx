
import { Input } from "../../components/input";
import { Esqueceu, Inputs, InputTitleLogin, InputTitleSenha, Patas, Tela, TitleConteiner } from "./styles";
import SmallTitle from "../../components/smallTitle";
import OrangeButton from "../../components/orangeButton";



export default function Login(){

    return(
        <Tela>
            
            <SmallTitle/>
            <Patas source={require('../../assets/images/paws.png')}/>
            <InputTitleLogin>Login</InputTitleLogin>
            <Inputs>
                
                <Input secureTextEntry={false} imagem={require('../../assets/images/smallCat.png')} placeholder="Digite seu ..."/>
            </Inputs>
            <InputTitleSenha>Senha</InputTitleSenha>
            <Inputs>
                
                <Input secureTextEntry={true} imagem={require('../../assets/images/lock.png')} placeholder="Digite seu ..."/>
            </Inputs>
            <Esqueceu> Esqueceu sua senha?</Esqueceu>
            <OrangeButton texto="Entrar"/>
            <OrangeButton texto="Cadastrar"/>
                
        </Tela>

       
    )

}