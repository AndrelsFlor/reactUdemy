import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { userStorage } from './actions/AutenticacaoActions';
import { connect } from 'react-redux';
import FormLogin from './components/formLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.props.userStorage();
    console.log(this.props);
  }

  render() {
    return (
      <Router
        navigationBarStyle={{ backgroundColor: '#115E54' }}
        titleStyle={{ color: '#fff' }}
      >
        <Scene>
          <Scene
            key="formLogin"
            component={FormLogin}
            title="Login"
            hideNavBar={true}
            initial={!this.props.user_storage}
          />
          <Scene
            key="formCadastro"
            component={FormCadastro}
            title="Cadastro"
            hideNavBar={false}
          />
          <Scene
            key="boasVindas"
            component={BoasVindas}
            title="Bem-Vindo"
            hideNavBar={true}
          />
          <Scene
            key="principal"
            component={Principal}
            title="Principal"
            hideNavBar={true}
            initial={this.props.user_storage}
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
