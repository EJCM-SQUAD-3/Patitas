import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    titulo:{
        width: "100%",
        height:100,
        
        flexDirection: 'row',
        justifyContent:'center',
       
       

    },

    pConteiner:{
       
      
        flexDirection: 'column',
        alignItems:'flex-end',
        
        padding:0,
        margin:0,
        height:100,
        justifyContent:'center',
       
        
      
    },

    p:{
        padding:0,
        paddingTop:15,
        fontSize:80,
        fontFamily:'Cherry Bomb One',
        color:'#E97B0C',
     
    },
    atitas:{
        fontSize:80,
        fontFamily:'Cherry Bomb One',
        color:'#154962',
    },


    bola1:{
       backgroundColor:'#154962',
       width:10,
       height:10,
       borderRadius:'50%',
       position:'absolute',
       marginRight:20,
       marginBottom:49,
      

    },
    bola2:{
       backgroundColor:'#3E99B4',
       width:14,
       height:14,
       borderRadius:'50%',
       position:'absolute',
       marginBottom:40,
      

    },
    bola3:{
       backgroundColor:'#154962',
       width:8,
       height:8,
       borderRadius:'50%',
       
       position:'absolute',
       marginRight:160,
       marginTop:42,
      

    }

})