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
} from '../actions/types.js';

const INITIAL_STATE = {
  nome: '',
  email: '',
  senha: '',
  erroCadastro: '',
  erroLogin: '',
  user_storage: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case MODIFICA_EMAIL:
      return { ...state, email: action.payload };
      break;
    case MODIFICA_SENHA:
      return { ...state, senha: action.payload };
      break;
    case MODIFICA_NOME:
      return { ...state, nome: action.payload };
      break;
    case CADASTRO_USUARIO_ERRO:
      return { ...state, erroCadastro: action.payload };
      break;
    case CADASTRO_USUARIO_SUCESSO:
      return { ...state, nome: '', senha: '' };
      break;
    case LOGIN_USUARIO_ERRO:
      return { ...state, erroLogin: action.payload };
      break;
    case USUARIO_NO_STORAGE_LOCAL:
      console.log('entrou certo');
      return { ...state, user_storage: true };
      console.log(resposta);
      // return resposta;
      break;
    default:
      console.log('entrou');
      return state;
  }
};
