import { Image, Text, View } from "react-native";
import Titulo from "../../components/Titulo/titulo";
import { styles } from "./escolhaUsuario.style";
import Botao from "../../components/Titulo/botao";

export default function EscolhaUsuario(){

    return(
        <View style ={styles.Tela}>
        <Titulo/>
        <View style ={styles.GataAstro}>
        <Image style ={styles.GataAstro} source={require('../../assets/gatoAstronauta.png')}/>
        </View>
        <Text style={styles.Quem}> Quem é você?</Text>
        <Botao texto="Comprador"/>
        <Botao texto="Vendedor"/>
        </View>
    )
}