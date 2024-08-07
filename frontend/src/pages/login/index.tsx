import BotaoLaranja from "../../components/botaoLaranja";
import { Input } from "../../components/input";
import Titulo from "../../components/titulo";
import TituloReduzido from "../../components/tituloReduzido";
import { Esqueceu, Inputs, InputTitleLogin, InputTitleSenha, Patas, Tela, TitleConteiner } from "./styles";



export default function Login(){

    return(
        <Tela>
            
            <TituloReduzido/>
            <Patas source={require('../../assets/images/patas.png')}/>
            <InputTitleLogin>Login</InputTitleLogin>
            <Inputs>
                
                <Input secureTextEntry={false} imagem={require('../../assets/images/gatinho.png')} placeholder="Digite seu ..."/>
            </Inputs>
            <InputTitleSenha>Senha</InputTitleSenha>
            <Inputs>
                
                <Input secureTextEntry={true} imagem={require('../../assets/images/cadeado.png')} placeholder="Digite seu ..."/>
            </Inputs>
            <Esqueceu> Esqueceu sua senha?</Esqueceu>
            <BotaoLaranja texto="Entrar"/>
            <BotaoLaranja texto="Cadastrar"/>
                
        </Tela>

       
    )

}