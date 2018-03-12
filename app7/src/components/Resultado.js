import React from 'react';
import { View, Text } from 'react-native';
import Visor from './Visor';
const Resultado = props => {
  return <Visor resultado={props.resultado} />;
};

export { Resultado };
