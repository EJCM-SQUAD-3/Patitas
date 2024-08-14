import Back from "../../components/back";
import BlueButton from "../../components/blueButton";
import Header from "../../components/header";
import { Input } from "../../components/input";
import NavBar from "../../components/navBar";
import { BackConteiner, Conteiner, Endereco, Tela } from "./styles";


export default function AdressRegister(){

    return(

        <Tela>
            <Header/>
            <BackConteiner>
            <Back/>
            </BackConteiner>
            <Endereco>Endereço</Endereco>
            <Conteiner>
            <Input secureTextEntry={false} imagem={require('../../assets/images/blackProfileIcon.png')} placeholder="CPF ..." value={''} onChangeText={'nada'} />
            <Input secureTextEntry={false} imagem={require('../../assets/images/cepIcon.png')} placeholder="CEP" value={''} onChangeText={'nada'} />
            <Input secureTextEntry={false} imagem={require('../../assets/images/truckIcon.png')} placeholder="Cidade ..." value={''} onChangeText={'nada'} />
            <Input secureTextEntry={false} imagem={require('../../assets/images/truckIcon.png')} placeholder="Bairro" value={''} onChangeText={'nada'} />
            </Conteiner>
            <BlueButton/>

            <NavBar activeIcon="home"/>
        </Tela>
    )
}