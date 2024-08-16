import { Pressable} from "react-native";
import Back from "../../components/returnButton";
import BlueButton from "../../components/blueButton";
import Header from "../../components/header";
import { Input } from "../../components/input";
import NavBar from "../../components/navBar";
import { BackConteiner, Conteiner, Endereco, Tela } from "./styles";
import { useNavigation } from "@react-navigation/native";
import ReturnButton from "../../components/returnButton";
import { useState } from "react";

export default function AdressRegister() {
    const navigation = useNavigation();

   
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');

    return (
        <Tela>
            <Header/>
            <BackConteiner>
                <ReturnButton/>
            </BackConteiner>
            <Endereco>Endereço</Endereco>
            <Conteiner>
               
                <Input 
                    secureTextEntry={false} 
                    imagem={require('../../assets/images/blackProfileIcon.png')} 
                    placeholder="CPF ..." 
                    value={cpf} 
                    onChangeText={setCpf}  
                />
                <Input 
                    secureTextEntry={false} 
                    imagem={require('../../assets/images/cepIcon.png')} 
                    placeholder="CEP" 
                    value={cep} 
                    onChangeText={setCep}  
                />
                <Input 
                    secureTextEntry={false} 
                    imagem={require('../../assets/images/truckIcon.png')} 
                    placeholder="Cidade ..." 
                    value={cidade} 
                    onChangeText={setCidade}  
                />
                <Input 
                    secureTextEntry={false} 
                    imagem={require('../../assets/images/truckIcon.png')} 
                    placeholder="Bairro" 
                    value={bairro} 
                    onChangeText={setBairro}  
                />
            </Conteiner>
            <Pressable onPress={() => navigation.navigate('PurchaseCompleted')}>
                <BlueButton />
            </Pressable>
            <NavBar activeIcon="home"/>
        </Tela>
    );
}
