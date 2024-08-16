import { useForm } from "react-hook-form";
import { Imagem, InputConteiner, InputTexto } from "./styles";

type Props ={

    imagem?: any;
    placeholder: string;
    secureTextEntry: boolean;
    value: any;
    onChangeText: any;

}


export function Input ({imagem, placeholder,secureTextEntry, value, onChangeText}: Props){
   

    return(
    <InputConteiner hasImage={!!imagem}>
        {imagem && <Imagem source={imagem} hasImage={!!imagem} alt="gatinho"/>}
        <InputTexto secureTextEntry={secureTextEntry} placeholder={placeholder} placeholderTextColor='#06071366' onChangeText={onChangeText} value={value}/>
    </InputConteiner>
    )
}