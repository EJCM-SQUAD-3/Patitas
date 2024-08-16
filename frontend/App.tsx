import React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';

import RegisterStack from './src/navigation/registerStack';
import AuthProvider, { AuthContext } from './src/contexts/auth';
import HomeStack from './src/navigation/homeSTack';

export default function App() {

  const Auth = React.useContext(AuthContext);
  
  const [fontsLoaded] = useFonts({
    'Cherry Bomb One': require("./src/assets/fonts/CherryBombOne.ttf"),
    'Verdana-4': require("./src/assets/fonts/verdana-4.ttf"),
    'Verdana': require("./src/assets/fonts/verdana.ttf"),
    'poppinsSemiBold': require("./src/assets/fonts/poppinsSemiBold600.ttf")
  });
    
  if(!fontsLoaded) return(<Text>Erro ao carregar as fontes.</Text>);
  return (
    <AuthProvider>
      {Auth.signed ? <RegisterStack/> : <HomeStack/> }
    </AuthProvider>
  );
}