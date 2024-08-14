import { Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Input } from "../../components/input";

import { Patas } from "../login/styles";
import { Check, InputsConteiner, Tela, Termos, TermosConteiner } from "./styles";
import { useEffect, useState } from "react";
import SmallTitle from "../../components/smallTitle";
import OrangeButton from "../../components/orangeButton";
import { useNavigation } from "@react-navigation/native";

type Formulario = {
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    repSenha: string;
};

export default function ScreenRegisterBuyer() {
    const navigation = useNavigation();
    const { register, control, handleSubmit, formState: { errors, isValid }, setValue, getValues, reset, watch } = useForm<Formulario>({
        defaultValues: {
            nome: '',
            cpf: '',
            email: '',
            senha: '',
            repSenha: '',
        },
        mode: 'onChange', 
    });

    useEffect(() => console.log('Erro: ', errors), [errors]);

    const [trocar, setTrocar] = useState(true);

    function Troca() {
        setTrocar(!trocar);
    }

    const onSubmit = (data: Formulario) => {
        console.log(data);
        if (isValid) {
            navigation.navigate('SelectUser');
        }
    };

    const senha = watch('senha');

    return (
        <Tela>
            <SmallTitle />
            <InputsConteiner>
                <Controller
                    control={control}
                    rules={{ required: "Obrigatório!!" }}
                    name="nome"
                    render={({ field: { value, onChange } }) => (
                        <Input secureTextEntry={false} imagem={require('../../assets/images/userIcon.png')} placeholder="Nome ..." value={value} onChangeText={onChange} />
                    )}
                />
                <Controller
                    control={control}
                    rules={{ required: "Obrigatório!!" }}
                    name="cpf"
                    render={({ field: { value, onChange } }) => (
                        <Input secureTextEntry={false} imagem={require('../../assets/images/cpfIcon.png')} placeholder="CPF ..." value={value} onChangeText={onChange} />
                    )}
                />
                <Controller
                    control={control}
                    rules={{
                        required: "Obrigatório!!",
                        pattern: {
                            message: "Email Inválido",
                            value: /\S+@\S+\.\S+/
                        }
                    }}
                    name="email"
                    render={({ field: { value, onChange } }) => (
                        <Input secureTextEntry={false} imagem={require('../../assets/images/arrobaIcon.png')} placeholder="E-mail ..." value={value} onChangeText={onChange} />
                    )}
                />
                <Controller
                    control={control}
                    rules={{ required: "Obrigatório!!" }}
                    name="senha"
                    render={({ field: { value, onChange } }) => (
                        <Input secureTextEntry={true} imagem={require('../../assets/images/lock.png')} placeholder="Senha ..." value={value} onChangeText={onChange} />
                    )}
                />
                <Controller
                    control={control}
                    name="repSenha"
                    rules={{
                        required: "Obrigatório!!",
                        validate: value => value === senha || "As senhas não coincidem."
                    }}
                    render={({ field: { value, onChange } }) => (
                        <Input secureTextEntry={true} imagem={require('../../assets/images/lock.png')} placeholder="Confirmar Senha ..." value={value} onChangeText={onChange} />
                    )}
                />
            </InputsConteiner>
            <TermosConteiner>
                <Pressable onPress={Troca}>
                    <Check source={trocar ? require('../../assets/images/Checkbox.png') : require('../../assets/images/CheckboxFull.png')} />
                </Pressable>
                <Termos>Concordo com os termos</Termos>
            </TermosConteiner>
            <OrangeButton onPress={handleSubmit(onSubmit)} texto="Entrar" />
        </Tela>
    );
}
