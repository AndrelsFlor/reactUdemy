import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const modificaEmail = texto => {
  return {
    type: 'modifica_email',
    payload: texto
  };
};

export const modificaSenha = texto => {
  console.log(texto);
  return {
    type: 'modifica_senha',
    payload: texto
  };
};

export const modificaNome = texto => {
  return {
    type: 'modifica_nome',
    payload: texto
  };
};

export const cadastraUsuario = ({ nome, email, senha }) => {
  //A aplicação espera que a função retorne uma action, porém, como as actions estão sendo geradas
  //de maneira assíncrona, quando termina de executar as promises, ela não retorna uma action criada.
  //Para forçar o funcionamento correto, se utiliza o ReduxThunk
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(user => cadastroUsuarioSucesso(dispatch))
      .catch(erro => cadastroUsuarioErro(erro, dispatch));
  };
};

const cadastroUsuarioSucesso = dispatch => {
  dispatch({
    type: 'cadastro_usuario_sucesso'
  });

  Actions.boasVindas();
};

const cadastroUsuarioErro = (erro, dispatch) => {
  dispatch({
    type: 'cadastro_usuario_erro',
    payload: erro.message
  });
};
