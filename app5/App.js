import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';

const Navigation = StackNavigator({
  Principal: { screen: CenaPrincipal },
  Clientes: { screen: CenaClientes }
});

export default Navigation;
