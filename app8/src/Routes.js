import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { userStorage } from './actions/AutenticacaoActions';
import { connect } from 'react-redux';
// import {AsyncStorage} from 'react-native';
import FormLogin from './components/formLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import OrigemComercial from './components/origemComercial';
import origemComercial from './components/origemComercial';

class Routes extends Component {
  _handleBackButton() {
    BackHandler.removeEventListener('hardwareBackPress');
  }
  render() {
    return (
      <Router
        navigationBarStyle={{ backgroundColor: '#115E54' }}
        titleStyle={{ color: '#fff' }}
      >
        <Scene>
          <Scene
            key="boasVindas"
            component={BoasVindas}
            title="Bem-Vindo"
            hideNavBar={true}
            initial={true}
          />
          <Scene
            key="formLogin"
            component={FormLogin}
            title="Login"
            hideNavBar={true}
          />
          <Scene
            key="formCadastro"
            component={FormCadastro}
            title="Cadastro"
            hideNavBar={false}
          />

          <Scene
            key="principal"
            component={Principal}
            title="Principal"
            hideNavBar={true}
          />
          <Scene
            key="origemComercial"
            component={origemComercial}
            title="Origem Comercial"
            hideNavBar={true}
            onEnter={() => {
              this._handleBackButton;
            }}
          />
        </Scene>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  user_storage: state.AutenticacaoReducer.user_storage
});

export default connect(mapStateToProps, {
  userStorage
})(Routes);
