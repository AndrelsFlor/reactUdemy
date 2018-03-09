import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import BarraNavegacao from './src/components/BarraNavegacao';
export default class App extends React.Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#CCC" />
        <BarraNavegacao />
      </View>
    );
  }
}
