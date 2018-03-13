import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
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
            console.log('entrou');
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
  return dispatch => {
    dispatch({ type: LOGIN_EM_ANDAMENTO });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(value => loginUsuarioSucesso(dispatch, email, senha))
      .catch(erro => loginUsuarioErro(erro, dispatch));
  };
};

export const userStorage = () => {
  return {
    type: USUARIO_NO_STORAGE_LOCAL
  };

  // return dispatch => {
  //   try {
  //     AsyncStorage.getItem('email').then(emailBanco => {
  //       console.log(emailBanco);
  //       if (emailBanco) {
  //         dispatch({
  //           type: USUARIO_NO_STORAGE_LOCAL
  //         });
  //       } else {
  //         return false;
  //       }
  //     });
  //   } catch (erro) {
  //     console.log(erro);
  //   }
  // };

  // return dispatch => {
  //   AsyncStorage.getItem('email').then(emailBanco => {
  //     console.log('entrou then');
  //     console.log(emailBanco);
  //     if (emailBanco != null) {
  //       dispatch({
  //         type: USARIO_NO_STORAGE_LOCAL
  //       });
  //       // AsyncStorage.getItem('senha').then(senhaBanco => {
  //       //   firebase
  //       //     .auth()
  //       //     .signInWithEmailAndPassword(emailBanco, senhaBanco)
  //       //     .then(value =>
  //       //       dispatch({
  //       //         type: USARIO_NO_STORAGE_LOCAL
  //       //       })
  //       //     )
  //       //     .catch(erro => loginUsuarioErro(erro, dispatch));
  //       // });
  //     }
  //   });
  // };
};

const verificaUserStorage = () => {};

const loginUsuarioSucesso = (dispatch, email, senha) => {
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
  console.log(erro);
  dispatch({
    type: LOGIN_USUARIO_ERRO,
    payload: erro.message
  });
};
