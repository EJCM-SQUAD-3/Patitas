import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { useFonts } from 'expo-font';

import SellerProfile from './src/pages/sellerProfile';
import { Routes } from './src/navigation';
import SideNav from './src/components/sideNav';
import ProductRegistration from './src/pages/productRegistration';
import AdressRegister from './src/pages/adressRegister';
import { Cart } from './src/pages/cart';
import HomeBuyer from './src/pages/homeBuyer';
import HomeSeller from './src/pages/homeSeller';
import ProductPhoto from './src/pages/productPhoto';


export default function App() {
  const [fontsLoaded] = useFonts({
    'Cherry Bomb One': require("./src/assets/fonts/CherryBombOne.ttf"),
    'Verdana': require("./src/assets/fonts/verdana-4.ttf"),
    'PoppinsSemiBold600': require("./src/assets/fonts/PoppinsSemiBold600.ttf")
});
    
if(!fontsLoaded) return(<Text>Erro ao carregar as fontes.</Text>);
  return (
    
    // <Cart/>
    // <HomeBuyer />
    // <HomeSeller />
    <ProductPhoto />
    
  );
}

