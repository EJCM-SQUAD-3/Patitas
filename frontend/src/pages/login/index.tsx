import { Input } from "../../components/input";
import { Esqueceu, Inputs, InputTitleLogin, InputTitleSenha, Patas, Tela } from "./styles";
import SmallTitle from "../../components/smallTitle";
import OrangeButton from "../../components/orangeButton";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { AuthContext } from "../../contexts/auth";
import userServices, { loginData } from "../../services/userServices";
import AsyncStorage from "@react-native-async-storage/async-storage";

type RootStackParamList = {
  SelectUser: undefined;
  ScreenRegisterBuyer: undefined;
  
};


export default function Login() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const fadeAnim = useRef(new Animated.Value(0)).current; 

  const Auth = React.useContext(AuthContext);

  const { reset, control, handleSubmit } = useForm<loginData>({ 
      mode: 'onChange', 
      defaultValues: { email: '', password: '' } 
  });

  const handleOnSubmit = (data: loginData) => {
    reset();
    userServices.login(data).then(response => {
        if (response?.status === 200) {
            Auth.setToken(response?.data.token),
            AsyncStorage.setItem('token', response?.data.token)
        }
    }).catch(e => {
        console.log("Login Error: ", e);
        alert('Login Error')
    })
  };

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
          )}/>
        </Inputs>
        <InputTitleSenha>Senha</InputTitleSenha>
        <Inputs>
        <Controller
                    control={control}
                    rules={{ required: "Obrigatório!!" }}
                    name="password"
                    render={({ field: { value, onChange } }) => (
                        <Input secureTextEntry={true} imagem={require('../../assets/images/lock.png')} placeholder="Senha..." value={value} onChangeText={onChange} />
                    )}
                />
        </Inputs>
        <Esqueceu> Esqueceu sua senha?</Esqueceu>
        <OrangeButton onPress={handleSubmit(handleOnSubmit)} texto="Entrar" />
        <OrangeButton onPress={() => navigation.navigate('ScreenRegisterBuyer')} texto="Cadastrar" />
      </Tela>
    </Animated.View>
  );
}