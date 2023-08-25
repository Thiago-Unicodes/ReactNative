import React, {useState} from 'react';
import { Dimensions, SafeAreaView, TextInput, Image, TouchableHighlight, Text, View, StyleSheet} from 'react-native';
import { css } from '../css/Css';


export default props=> {

    //crio um array para os estilos de botoes
    const estilosBotoes =[estilo.btn] //este estilo é padão para o botão

    /*esta constante acima ira sofre modificações em relaçao aos ifs abaixo, 
    toda vez que um 'props' de um botão for passado, o if faz um 'push' (coloca o estilo)
    junto ao meu array de estilos */

    //se o props for 'duplo', faço um push do estilo.btnDuplo ao array, passando as propriedades novas ao estilo
    if(props.quad){
        estilosBotoes.push(estilo.btnQuad)
    }
    if(props.igual){
        estilosBotoes.push(estilo.btnIgual)
    }
    if(props.operacao){
        estilosBotoes.push(estilo.btnOperacao)
    }
    if(props.ac){
        estilosBotoes.push(estilo.btnAC)
    }
    if(props.back){
        estilosBotoes.push(estilo.btnBack)
    }

    return(        
        
        //este componente sera manimupado vias props
        <TouchableHighlight
            onPress={props.aoClicar}
        >
            <Text style={estilosBotoes}>{props.label}</Text>
        </TouchableHighlight>


    )
}

const estilo = StyleSheet.create({
    /* BOTÕES */

    btn:{
        //aqui eu uso o Dimensions para defini a altura e largura em relação a tela, isso dividindo a largura em 4
        height:Dimensions.get('window').width/4,
        width:Dimensions.get('window').width/4,
        fontSize:30,
        padding:20,
        borderWidth:1,
        color:'#FFFFFF',
        borderColor:'#ffffff',
        justifyContent:'center',
        textAlign:'center',
        backgroundColor:'#3D3C3C',        
    },

    btnOperacao:{
        color:'#A5F512',      
    },

    btnIgual:{
        color:'#FCFCFC',  
        fontWeight:'bold',     
    },

    btnAC:{
        color:'#00FF00',       
    },

    btnBack:{
        color:'#2FB5C7',       
    },

    btnQuad:{
        color:'#252323',
        //aqui o tamanho será quadruplicado
        width:(Dimensions.get('window').width/4)*4,

    },
})