import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './src/components/Titulo/titulo';
import EscolhaUsuario from './src/pages/escolhaUsuario/escolhaUsuario';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Cherry Bomb One': require("./src/assets/fonts/CherryBombOne.ttf")
});
    
if(!fontsLoaded) return(<Text>Erro ao carregar as fontes.</Text>);
  return (
    
  
    <EscolhaUsuario/>
    
  );
}

