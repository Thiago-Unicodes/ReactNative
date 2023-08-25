import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const css = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },

    titulo:{
        marginTop:20,
        fontSize:25,
        color:'#ffffff',
        padding:10,
    },

    display:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:'100%',
    },

    display_numeros:{
        textAlign:'right',
        width:'100%',
        backgroundColor:'#ffffff',
        padding:20,
        fontSize:35,
        bottom:-10,
    },

    display_resultado:{
        textAlign:'right',
        width:'100%',
        backgroundColor:'#FFC400',
        padding:25,
        fontSize:40,
        marginTop:5,
        bottom:-20,
    },

    display_botoes:{
        width:'100%',
        flexDirection:'row',
        flexWrap:'wrap',
    },



})

export {css};