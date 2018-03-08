import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View
 } from 'react-native';

export default class App extends React.Component {
  
  render() {
    const {principal,topo ,conteudo,rodape} = Estilos;
    return (
     
      <View style={principal}>
            <Text style={topo}>Topo</Text>
            <Text style={conteudo}>Conteúdo</Text>
            <Text style={rodape}>Rodapé</Text>
      </View>
    );
  }
}

const Estilos = {
  principal: {
    flex: 2,
    backgroundColor: 'cornflowerblue'
  },
  topo: {
    flex: 1,
    backgroundColor: 'brown'
  },
  conteudo: {
    flex: 8,
    backgroundColor: 'yellowgreen'
  },
  rodape: {
    flex: 1,
    backgroundColor: 'orangered'
  },
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