import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
import TextField from 'react-native-md-textinput';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
//Action
import {
  modificaEmail,
  modificaSenha,
  autenticarUsuario,
  userStorage
} from './../actions/AutenticacaoActions';

class formLogin extends Component {
  componentWillMount() {
    // super(props);
    // this.props.userStorage();
    // if (this.props.user_storage) {
    //   Actions.principal();
    // }
    // console.log(this.props);
  }

  _autenticarUsuario() {
    const { email, senha } = this.props;
    this.props.autenticarUsuario(email, senha);
  }

  renderBtnAcessar() {
    if (this.props.loading_login) {
      return <ActivityIndicator size="large" />;
    }
    return (
      <Button
        title="Acessar"
        color="#ff3d00"
        onPress={() => this._autenticarUsuario()}
      />
    );
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#263238' }}>
        <View style={{ flex: 1, padding: 10 }}>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ fontSize: 25, color: '#ffab91' }}>SimProvider</Text>
          </View>
          <View style={{ flex: 2 }}>
            <TextField
              value={this.props.email}
              style={{ fontSize: 20, height: 45, color: '#fff' }}
              label={'E-mail'}
              highlightColor={'#f4511e'}
              height={30}
              onChangeText={texto => this.props.modificaEmail(texto)}
            />
            <TextField
              value={this.props.senha}
              style={{ fontSize: 20, height: 45, color: '#fff' }}
              label={'Senha'}
              highlightColor={'#f4511e'}
              height={30}
              secureTextEntry
              onChangeText={texto => this.props.modificaSenha(texto)}
            />
            <Text style={{ color: '#ff0000', fontSize: 18 }}>
              {this.props.erroLogin}
            </Text>
            <TouchableHighlight onPress={() => Actions.formCadastro()}>
              <Text style={{ fontSize: 16, marginTop: 20, color: '#ffab91' }}>
                Ainda não tem cadastro? Cadastre-se
              </Text>
            </TouchableHighlight>
          </View>
          <View style={{ flex: 2 }}>{this.renderBtnAcessar()}</View>
        </View>
      </View>
    );
  }
}

//Função que mapeia o estado global da aplicação para props do componente atual.
//Isso é feito através do que é conhecido como "decorar"(decoratorr) o componente,ou seja, adicionar coisasa à sua estrutura
//após a criação do mesmo.

//Reducer
const mapStateToProps = state => ({
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
  erroLogin: state.AutenticacaoReducer.erroLogin,
  loading_login: state.AutenticacaoReducer.loading_login,
  user_storage: state.AutenticacaoReducer.user_storage
});

export default connect(mapStateToProps, {
  modificaEmail,
  modificaSenha,
  autenticarUsuario,
  userStorage
})(formLogin);
