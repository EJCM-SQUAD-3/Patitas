import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { useFonts } from 'expo-font';

import SellerProfile from './src/pages/sellerProfile';
import { Routes } from './src/navigation';
import SideNav from './src/components/sideNav';
import ProductRegistration from './src/pages/productRegistration';
import AdressRegister from './src/pages/adressRegister';
import CartConteiner from './src/components/cartConteiner';
import { Cart } from './src/pages/cart';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Cherry Bomb One': require("./src/assets/fonts/CherryBombOne.ttf"),
    'Verdana': require("./src/assets/fonts/verdana-4.ttf")
});
    
if(!fontsLoaded) return(<Text>Erro ao carregar as fontes.</Text>);
  return (
    
    <Cart/>
    
  );
}

