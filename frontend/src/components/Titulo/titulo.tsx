
import { Image, Text, View } from "react-native";
import { styles } from "./titulo.style";

export default function Titulo(){

    return(
        
        <View style={styles.titulo}>

            <View style={styles.pConteiner}>
            <Text style={styles.p}>P</Text>
            <View style={styles.bola1}></View>
            <View style={styles.bola2}></View>
            
            </View>
            <View style={styles.bola3}></View>
            
            <Text style={styles.atitas}>atitas</Text>
            
      
           
        </View>


    )


}