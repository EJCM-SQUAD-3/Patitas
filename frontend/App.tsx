import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { useFonts } from 'expo-font';

import SellerProfile from './src/pages/sellerProfile';
import { Routes } from './src/navigation';
import SideNav from './src/components/sideNav';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Cherry Bomb One': require("./src/assets/fonts/CherryBombOne.ttf"),
    'Verdana': require("./src/assets/fonts/verdana-4.ttf")
});
    
if(!fontsLoaded) return(<Text>Erro ao carregar as fontes.</Text>);
  return (
    
    <SideNav/>
    
  );
}

