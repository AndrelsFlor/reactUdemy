import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableOpacity,
  Alert
  
  
 } from 'react-native';

export default class App extends React.Component {
  
  render() {
    const {principal,botao,textoBotao} = Estilos;
    return (
     
      <View style={principal}>
        <Image source={require('./imgs/logo.png')}/>

        <TouchableOpacity style={botao} onPress={gerarNovaFrase}>
          <Text style={textoBotao}>Nova Frase</Text>
        </TouchableOpacity>

      </View>
    
    );
  }
}

const Estilos = {
  principal:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    
  },
  botao:{
    backgroundColor:'#538530',
    paddingVertical:10,
    paddingHorizontal:40,
    marginTop:20
  },
  textoBotao: {
    color:'white',
    fontSize:16,
    fontWeight:'bold'
  }
  
}

var gerarNovaFrase = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);
  
  var frases =  Array();
  
  frases[0] = 'Klaatu Barada Nikitu';
  frases[1] = 'bb';
  frases[2] = 'cc';
  frases[3] = 'dd';
  frases[4] = 'ee';

  Alert.alert(frases[numeroAleatorio]);

}

// const Estilos = {
//   estiloTexto: {
//     fontSize: 40,
//     backgroundColor:'#08509B',
//     height:60,
//     width:60
//   },
//   estiloTexto2: {
//     fontSize: 40,
//     backgroundColor:'#2A4BFA',
//     height:60,
//     width:60
//   },
//   estiloView: {
//     backgroundColor: 'skyblue',
//     height: 300,
//     justifyContent: 'space-around', //Alinha o conteúdo na vertical
//     alignItems: 'center', //Alinha o conteúdo na horizontal
//     flexDirection:'column'
//   }
// };