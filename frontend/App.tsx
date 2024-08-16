import React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';

import RegisterStack from './src/navigation/registerStack';
import { AuthContext } from './src/contexts/auth';
import { AuthProvider } from './src/contexts/auth';
import HomeStack from './src/navigation/homeSTack';

const AppContent = () => {
  const [fontsLoaded] = useFonts({
    'Cherry Bomb One': require("./src/assets/fonts/CherryBombOne.ttf"),
    'Verdana-4': require("./src/assets/fonts/verdana-4.ttf"),
    'Verdana': require("./src/assets/fonts/verdana.ttf"),
    'poppinsSemiBold': require("./src/assets/fonts/poppinsSemiBold600.ttf")
  });

  const { signed } = React.useContext(AuthContext);

  if (!fontsLoaded) return (<Text>Erro ao carregar as fontes.</Text>);

  return signed ? <HomeStack /> : <RegisterStack />;
};

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}