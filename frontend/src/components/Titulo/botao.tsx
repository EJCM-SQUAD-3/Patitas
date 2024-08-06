import { Pressable, Text, View } from "react-native";
import { styles } from "./botao.style";

type Props ={
    texto: string;
}

export default function Botao({texto}: Props){

    return(
        <Pressable style={styles.distancia}>
            <View style={styles.botao} >
                <Text style={styles.texto}>{texto}</Text>
            </View>
        </Pressable>
    )
    
}