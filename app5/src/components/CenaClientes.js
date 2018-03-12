import React from 'react';
import { StyleSheet, View, StatusBar, Image, Text } from 'react-native';
import BarraNavegacao from './BarraNavegacao';
const util = require('util');

const detalheClientes = require('./../../imgs/detalhe_cliente.png');
const cliente1 = require('./../../imgs/cliente1.png');
const cliente2 = require('./../../imgs/cliente2.png');

export default class CenaClientes extends React.Component {
  static navigationOptions = {
    header: <BarraNavegacao />
  };
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#CCC" />
        {/* <BarraNavegacao /> */}

        <View style={styles.cabecalho}>
          <Image source={detalheClientes} />
          <Text style={styles.txtTitulo}>Nossos Clientes</Text>
        </View>

        <View style={styles.detalheClientes}>
          <Image source={cliente1} />
          <Text style={styles.txtDetalheCliente}>Klaatu Barada Nikitu1</Text>
        </View>

        <View style={styles.detalheClientes}>
          <Image source={cliente2} />
          <Text style={styles.txtDetalheCliente}>Klaatu Barada Nikitu2</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20
  },
  txtTitulo: {
    fontSize: 30,
    color: '#B9C941',
    marginLeft: 10,
    marginTop: 25
  },
  detalheClientes: {
    padding: 20,
    marginTop: 10
  },
  txtDetalheCliente: {
    fontSize: 18,
    marginLeft: 20
  }
});
