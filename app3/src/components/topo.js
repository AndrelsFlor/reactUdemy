import React from 'react';
import { View, Button, Image } from 'react-native';

class Topo extends React.Component {
  render() {
    return (
      <View>
        <Image source={require('../../imgs/jokenpo.png')} />
      </View>
    );
  }
}

export default Topo;
