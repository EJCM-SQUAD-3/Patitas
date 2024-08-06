import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    distancia:{

        padding: 5,
    },
    botao:{
        width:285,
        height:39,
        backgroundColor: '#053D58',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:18,
        shadowColor: '#000000', // Cor da sombra
        shadowOffset: { width: 0, height: 4 }, // Deslocamento da sombra
        shadowOpacity: 0.25, // Opacidade da sombra (25%)
        shadowRadius: 4, // Raio de desfoque
        

    },

    texto: {

        color: 'white',
    }

})