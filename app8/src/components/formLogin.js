import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  ImageBackground
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
//Action
import { modificaEmail, modificaSenha } from './../actions/AutenticacaoActions';

const formLogin = props => {
  return (
    <ImageBackground style={{ flex: 1 }} source={require('./../imgs/bg.png')}>
      <View style={{ flex: 1, padding: 10 }}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ fontSize: 25, color: '#fff' }}>Whatsapp clone</Text>
        </View>
        <View style={{ flex: 2 }}>
          <TextInput
            value={props.email}
            style={{ fontSize: 20, height: 45 }}
            placeholder="E-mail"
            onChangeText={texto => props.modificaEmail(texto)}
          />
          <TextInput
            value={props.senha}
            style={{ fontSize: 20, height: 45 }}
            placeholder="Senha"
            secureTextEntry
            onChangeText={texto => props.modificaSenha(texto)}
          />
          <TouchableHighlight onPress={() => Actions.formCadastro()}>
            <Text style={{ fontSize: 20, marginTop: 20, color: '#fff' }}>
              Ainda não tem cadastro? Cadastre-se
            </Text>
          </TouchableHighlight>
        </View>
        <View style={{ flex: 2 }}>
          <Button title="Acessar" color="#115E54" onPress={() => false} />
        </View>
      </View>
    </ImageBackground>
  );
};

//Função que mapeia o estado global da aplicação para props do componente atual.
//Isso é feito através do que é conhecido como "decorar"(decoratorr) o componente,ou seja, adicionar coisasa à sua estrutura
//após a criação do mesmo.

//Reducer
const mapStateToProps = state => ({
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha
});

export default connect(mapStateToProps, { modificaEmail, modificaSenha })(
  formLogin
);
