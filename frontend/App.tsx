import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './src/components/titulo';
import EscolhaUsuario from './src/pages/escolhaUsuario';
import { useFonts } from 'expo-font';
import Login from './src/pages/login';
import CadastroComprador from './src/pages/telaCadastroComprador';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Cherry Bomb One': require("./src/assets/fonts/CherryBombOne.ttf"),
    'Verdana': require("./src/assets/fonts/verdana-4.ttf")
});
    
if(!fontsLoaded) return(<Text>Erro ao carregar as fontes.</Text>);
  return (
    
  
    <CadastroComprador/>
    
  );
}

