import React from 'react';
import { StyleSheet, 
  Text,
  View,
  Button 
  } from 'react-native';

  var geraNumeroAleatorio = () => {
    var numero_aleatorio =  Math.random();
    numero_aleatorio = Math.floor((numero_aleatorio * 10));
    alert(numero_aleatorio);
  }
export default class App extends React.Component {
  
 
  
  render() {
    return (
      <View style={styles.container}>
      <Text>Gerador de Números Rnadômicos</Text>
      <Button 
        title="Gerar um número randômico"
        onPress={geraNumeroAleatorio}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
