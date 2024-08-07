import { Imagem, InputConteiner, InputTexto } from "./styles";

type Props ={

    imagem: any;
    placeholder: string;
    secureTextEntry: boolean;

}

export function Input ({imagem, placeholder,secureTextEntry}: Props){

    return(
    <InputConteiner>
        <Imagem source={imagem} alt="gatinho"/>
        <InputTexto secureTextEntry={secureTextEntry} placeholder={placeholder} placeholderTextColor='#06071366'/>

    </InputConteiner>
    )
}