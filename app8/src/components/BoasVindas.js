import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { userStorage } from './../actions/AutenticacaoActions';
import { connect } from 'react-redux';

class BoasVindas extends Component {
  constructor(props) {
    super(props);
    this.props.userStorage();
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#263238' }}>
        <View style={{ flex: 1, padding: 15 }}>
          <View
            style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ fontSize: 20, color: '#f4511e' }}>
              Bem-vindo! Aguarde enquanto
            </Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, color: '#f4511e' }}>
                verificamos sua conta
              </Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <ActivityIndicator size="large" />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user_storage: state.AutenticacaoReducer.user_storage
});

export default connect(mapStateToProps, { userStorage })(BoasVindas);
