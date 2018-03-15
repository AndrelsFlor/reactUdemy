import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import axios from 'react-native-axios';
import b64 from 'base-64';
import {
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
  MODIFICA_NOME,
  CADASTRO_USUARIO_SUCESSO,
  CADASTRO_USUARIO_ERRO,
  LOGIN_USUARIO_SUCESSO,
  LOGIN_USUARIO_ERRO,
  LOGIN_EM_ANDAMENTO,
  CADASTRO_EM_ANDAMENTO,
  USUARIO_NO_STORAGE_LOCAL
} from './types.js';
export const modificaEmail = texto => {
  return {
    type: MODIFICA_EMAIL,
    payload: texto
  };
};

export const modificaSenha = texto => {
  console.log(texto);
  return {
    type: MODIFICA_SENHA,
    payload: texto
  };
};

export const modificaNome = texto => {
  return {
    type: MODIFICA_NOME,
    payload: texto
  };
};

export const cadastraUsuario = ({ nome, email, senha }) => {
  //A aplicação espera que a função retorne uma action, porém, como as actions estão sendo geradas
  //de maneira assíncrona, quando termina de executar as promises, ela não retorna uma action criada.
  //Para forçar o funcionamento correto, se utiliza o ReduxThunk

  return dispatch => {
    dispatch({ type: CADASTRO_EM_ANDAMENTO });
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(user => {
        let emailB64 = b64.encode(email);
        firebase
          .database()
          .ref(`/contatos/${emailB64}`)
          .push({ nome })
          .then(value => {
            return cadastroUsuarioSucesso(dispatch);
          });
        // cadastroUsuarioSucesso(dispatch);
      })
      .catch(erro => cadastroUsuarioErro(erro, dispatch));
  };
};

const cadastroUsuarioSucesso = dispatch => {
  dispatch({
    type: CADASTRO_USUARIO_SUCESSO
  });

  Actions.boasVindas();
};

const cadastroUsuarioErro = (erro, dispatch) => {
  dispatch({
    type: CADASTRO_USUARIO_ERRO,
    payload: erro.message
  });
};

export const autenticarUsuario = (email, senha) => {
  console.log('entrou autenticarUsuario');
  return dispatch => {
    dispatch({ type: LOGIN_EM_ANDAMENTO });
    fetch('http://api.midiasimples.com.br/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: senha
      })
    }).then(response => {
      if (response.status == 200) {
        loginUsuarioSucesso(dispatch, email, senha);
      } else {
        loginUsuarioErro(erro, dispatch);
      }
    });
    // .then(resp => {
    //   console.log(resp);
    // });

    // axios
    //   .post('http://api.midiasimples.com.br/api/login', {
    //     email: email,
    //     password: senha
    //   })
    //   .then(dispatch, response => {
    //     console.log(response);
    //     if (response.status == 200) {
    //       loginUsuarioSucesso(dispatch, email, senha);
    //     } else {
    //       let erro = response.data;
    //       loginUsuarioErro(erro, dispatch);
    //     }
    //   })
    //   .catch(error => loginUsuarioErro(error, dispatch));

    //   firebase
    //     .auth()
    //     .signInWithEmailAndPassword(email, senha)
    //     .then(value => loginUsuarioSucesso(dispatch, email, senha))
    //     .catch(erro => loginUsuarioErro(erro, dispatch));
    // };
  };
};

export const userStorage = () => {
  // return {
  //   type: USUARIO_NO_STORAGE_LOCAL
  // };

  return dispatch => {
    try {
      AsyncStorage.getItem('email').then(emailBanco => {
        // console.log(emailBanco);
        if (emailBanco) {
          AsyncStorage.getItem('senha').then(senhaBanco => {
            dispatch({ type: LOGIN_EM_ANDAMENTO });

            fetch('http://api.midiasimples.com.br/api/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: emailBanco,
                password: senhaBanco
              })
            }).then(response => {
              if (response.status == 200) {
                loginUsuarioSucesso(dispatch, emailBanco, senhaBanco);
              } else {
                loginUsuarioErro(erro, dispatch);
              }
            });
          });
        } else {
          return Actions.formLogin();
        }
      });
    } catch (erro) {
      console.log(erro);
    }
  };
};
const getSenha = (dispatch, emailBanco) => {
  AsyncStorage.getItem('senha').then(senhaBanco => {
    console.log(emailBanco);
    console.log(senhaBanco);
    dispatch({
      type: USUARIO_NO_STORAGE_LOCAL
    });
  });
};

const loginUsuarioSucesso = (dispatch, email, senha) => {
  console.log('entrou sucesso');
  dispatch({
    type: LOGIN_USUARIO_SUCESSO
  });
  try {
    AsyncStorage.setItem('email', email).then(
      AsyncStorage.setItem('senha', senha)
    );
  } catch (error) {
    console.log(error);
  }
  Actions.principal();
};

const loginUsuarioErro = (erro, dispatch) => {
  // console.log('entrou erro');
  console.log(erro);
  dispatch({
    type: LOGIN_USUARIO_ERRO,
    payload: 'Houve um erro. Tente novamente mais tarde'
  });
};
