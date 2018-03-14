import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { userStorage } from './actions/AutenticacaoActions';
import { connect } from 'react-redux';
// import {AsyncStorage} from 'react-native';
import FormLogin from './components/formLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';

class Routes extends Component {
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
