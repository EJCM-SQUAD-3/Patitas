import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { useFonts } from 'expo-font';
import Login from './src/pages/login';


import SelectUser from './src/pages/selectUser';
import ScreenLogo from './src/pages/screenLogo';
import ScreenRegisterBuyer from './src/pages/screenRegisterBuyer';
import BlueConteiner from './src/components/blueConteiner';
import UserProfile from './src/pages/userProfile';
import ProductRegistration from './src/pages/productRegistration';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Cherry Bomb One': require("./src/assets/fonts/CherryBombOne.ttf"),
    'Verdana': require("./src/assets/fonts/verdana-4.ttf")
});
    
if(!fontsLoaded) return(<Text>Erro ao carregar as fontes.</Text>);
  return (
    
  
    <ProductRegistration/>
    
  );
}

