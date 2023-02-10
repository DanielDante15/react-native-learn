import React from "react"
import { View,Text,StyleSheet, TouchableOpacity } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import colors from "../config/colors";

export default  function Botao(props){
    const styles = StyleSheet.create({
        button:{
            backgroundColor:colors.primary,
            borderRadius:10,
            padding:10,
            margin:10,
            textAlign:'center',
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            // width:100,
            // height:40,
        },
        text:{
            color:'#fff',
            
        }
    })
    return(
        <>
        <TouchableOpacity style={[styles.button,{backgroundColor:colors.bg[props.type]}]}>
        <MaterialIcons name={props.icon} size={24} color="black" />
            <Text style={[styles.text,{color:colors.text[props.type]}]}>
                
                {props.children}
            </Text>
        </TouchableOpacity>
        </>
    )
}


Botao.defaultProps = {
    type:'primary'
}