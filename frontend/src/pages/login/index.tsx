import { Input } from "../../components/input";
import { Esqueceu, Inputs, InputTitleLogin, InputTitleSenha, Patas, Tela } from "./styles";
import SmallTitle from "../../components/smallTitle";
import OrangeButton from "../../components/orangeButton";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useForm, Controller } from "react-hook-form";

type RootStackParamList = {
  SelectUser: undefined;
  ScreenRegisterBuyer: undefined;
  
};

type Formulario = {
  
  email: string;
  senha: string;

};

export default function Login() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const fadeAnim = useRef(new Animated.Value(0)).current; 

  const { register, control, handleSubmit, formState: { errors, isValid }, setValue, getValues, reset, watch } = useForm<Formulario>({
    defaultValues: {
       
        email: '',
        senha: '',
      
    },
    mode: 'onChange', 
});

useEffect(() => console.log('Erro: ', errors), [errors]);

const onSubmit = (data: Formulario) => {
  console.log(data);
  if (isValid) {
      navigation.navigate('SelectUser');
  }
};

const senha = watch('senha');

  useEffect(() => {
    
    Animated.timing(fadeAnim, {
      toValue: 1, 
      duration: 1000, 
      useNativeDriver: true, 
    }).start();
  }, [fadeAnim]);




  return (
    <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
      <Tela>
        <SmallTitle />
        <Patas source={require('../../assets/images/paws.png')} />
        <InputTitleLogin>Login</InputTitleLogin>
        <Inputs>
        <Controller
                    control={control}
                    rules={{ required: "Obrigatório!!" }}
                    name="email"
                    render={({ field: { value, onChange } }) => (
                        <Input secureTextEntry={false} imagem={require('../../assets/images/smallCat.png')} placeholder="Email..." value={value} onChangeText={onChange} />
                    )}
                />
        </Inputs>
        <InputTitleSenha>Senha</InputTitleSenha>
        <Inputs>
        <Controller
                    control={control}
                    rules={{ required: "Obrigatório!!" }}
                    name="senha"
                    render={({ field: { value, onChange } }) => (
                        <Input secureTextEntry={true} imagem={require('../../assets/images/lock.png')} placeholder="Senha..." value={value} onChangeText={onChange} />
                    )}
                />
        </Inputs>
        <Esqueceu> Esqueceu sua senha?</Esqueceu>
        <OrangeButton onPress={handleSubmit(onSubmit)} texto="Entrar" />
        <OrangeButton onPress={() => navigation.navigate('ScreenRegisterBuyer')} texto="Cadastrar" />
      </Tela>
    </Animated.View>
  );
}
