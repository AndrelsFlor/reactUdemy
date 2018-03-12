import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  StackNavigator,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';
const util = require('util');

const logo = require('./../../imgs/logo.png');
const menuCliente = require('./../../imgs/menu_cliente.png');
const menuContato = require('./../../imgs/menu_contato.png');
const menuEmpresa = require('./../../imgs/menu_empresa.png');
const menuServico = require('./../../imgs/menu_servico.png');

export default class CenaPrincipal extends React.Component {
  static navigationOptions = {
    header: <BarraNavegacao />
  };
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#CCC" />
        {/* <BarraNavegacao /> */}

        <View style={styles.logo}>
          <Image source={logo} />
        </View>

        <View style={styles.menu}>
          <View style={styles.menuGrupo}>
            <TouchableOpacity
              onPress={() => {
                console.log('entrou');
                return this.props.navigation.navigate('Clientes');
              }}
            >
              <Image style={styles.imgMenu} source={menuCliente} />
            </TouchableOpacity>
            <Image style={styles.imgMenu} source={menuContato} />
          </View>

          <View style={styles.menuGrupo}>
            <Image style={styles.imgMenu} source={menuEmpresa} />
            <Image style={styles.imgMenu} source={menuServico} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
  menu: {
    alignItems: 'center'
  },
  menuGrupo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imgMenu: {
    margin: 15
  }
});
