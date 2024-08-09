import { Imagem, InputConteiner, InputTexto } from "./styles";

type Props ={

    imagem: any;
    placeholder: string;
    secureTextEntry: boolean;

}

export function Input ({imagem, placeholder,secureTextEntry}: Props){

    return(
    <InputConteiner hasImage={!!imagem}>
        {imagem && <Imagem source={imagem} hasImage={!!imagem} alt="gatinho"/>}
        <InputTexto secureTextEntry={secureTextEntry} placeholder={placeholder} placeholderTextColor='#06071366'/>
    </InputConteiner>
    )
}