import React, {useState} from 'react';
import { SafeAreaView, TextInput, Image, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { css } from './css/Css';
import Display from './componentes/Display';
import Botao from './componentes/Botao';


//variaveis GLOBAIS
let estados={
  valorTela:'', //variavel que display de operação (lugar onde ocorre as operações) 
  resultado:0, //variavel é o resultado
  operado:false, //indica um novo evento de comportamento
  ponto:false, //indica se o ponto foi adicionado, sempre antes do operador
}

export default function App() {



  //seto estas constantes com as variaveis globais acima
  const [vtela, setVtela] = useState(estados.valorTela)
  const [vres, setVres] = useState(estados.resultado)



  //ADICIONANDO O DIGITO NA LINHA DO OPERADOR | passando o digito atraves do arrow function
  const addDigito =(digito)=>{

    
    //verificando o ponto
    if(digito == '+' || digito == '-' || digito == '*' || digito == '/'){

      estados.ponto = false

    }
    if(digito == '.' && !estados.ponto){

      estados.ponto = true
      estados.operado = false

    }
    else if(digito == '.' && estados.ponto){

      return

    }

    
    //se ja houve operação e meu digito for...
    if((digito == '+' || digito == '-' || digito == '*' || digito == '/') && estados.operado){

      //assim toda vez que ja houver uma operação feita o resultado passa pra tela e zera o resultado, dando continuidade
      estados.valorTela = estados.resultado
      estados.resultado = 0
    }


    //ADICIONANDO O DIGITO - conservo o estado do valorTela e adiciono + digito
    estados.valorTela = estados.valorTela + digito

    //quardo tudo nesta constante
    const valorDitadoTela = estados.valorTela

    //passando os valores
    setVtela(estados.valorTela)
    setVres(estados.resultado)
    estados.operado = false
  }

  //limpar tela
  const limparTela = ()=>{

    estados={
      valorTela:'', 
      resultado:0, 
      operado:false, 
      ponto:false, 
    }

    setVtela(estados.valorTela)
    setVres(estados.resultado)

  }

  //Verificando os SIMBOLOS
  const opera = (simbolo) =>{

    //AC
    if(simbolo == 'AC'){
      limparTela()
      return
    }

    //BACKSPACE
    if(simbolo == 'BS'){
      //passo para o estados da tela a string  vtela nemos a ultima posição
      estados.valorTela = vtela.substring(0, (vtela.length-1))

      //agora seto o estado da tela 
      setVtela(estados.valorTela)

      return
    }

    //IGUAL 
    try{
      //
      estados.resultado = eval(estados.valorTela)

      estados.operado = true

      setVres(estados.resultado)
    }catch{

      //ERRO
      estados.resultado = 'ERRO'

      estados.operado = true

      setVres(estados.resultado)
    }

  }




  return (
    <SafeAreaView style={css.container}>

      {/* Passo para o componente o props com seus valores pegados das constantes vtela e vres*/}
      <Display valor={vtela} res={vres}/>

      <View style={css.display_botoes}>
      
        {/* aqui eu passo os props de cada botão para o componente */}
        {/*    labal        props     props   funcção        passando o didgito */}
        <Botao label='AC'   ac                aoClicar={()=>{opera('AC')}}/>
        <Botao label='('                      aoClicar={()=>{addDigito('(')}}/>
        <Botao label=')'                      aoClicar={()=>{addDigito(')')}}/>
        <Botao label='/'    operacao          aoClicar={()=>{addDigito('/')}}/>
        <Botao label='7'                      aoClicar={()=>{addDigito('7')}}/>
        <Botao label='8'                      aoClicar={()=>{addDigito('8')}}/>
        <Botao label='9'                      aoClicar={()=>{addDigito('9')}}/>
        <Botao label='*'    operacao          aoClicar={()=>{addDigito('*')}}/>
        <Botao label='4'                      aoClicar={()=>{addDigito('4')}}/>
        <Botao label='5'                      aoClicar={()=>{addDigito('5')}}/>
        <Botao label='6'                      aoClicar={()=>{addDigito('6')}}/>
        <Botao label='-'    operacao          aoClicar={()=>{addDigito('-')}}/>
        <Botao label='1'                      aoClicar={()=>{addDigito('1')}}/>
        <Botao label='2'                      aoClicar={()=>{addDigito('2')}}/>
        <Botao label='3'                      aoClicar={()=>{addDigito('3')}}/>
        <Botao label='+'    operacao          aoClicar={()=>{addDigito('+')}}/>
        <Botao label='0'                      aoClicar={()=>{addDigito('0')}}/>
        <Botao label='.'                      aoClicar={()=>{addDigito('.')}}/>
        <Botao label='BS'   back              aoClicar={()=>{opera('BS')}}/>
        <Botao label='?'                      aoClicar={()=>{}}/>
        <Botao label='='    operacao  quad    aoClicar={()=>{opera('=')}}/>
        

        {/* o label informa o rotulo simples do botão */}
        {/* apos o label cada botão pode ter ou não um parametro de props no exemplo acima
        tem 'ac' 'operacao', 'back' 'igual' estes serão passados para o componente */}
        {/* após o parametro do props, temos uma arrow funcition que passa comandos */}


        
        
      </View>
     

    </SafeAreaView>
  );
}

