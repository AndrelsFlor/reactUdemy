import {
  MODIFICA_ORIGEM_COMERCIAL,
  MODIFICA_CPF_CNPJ,
  MODIFICA_NOME_TITULAR
} from '../actions/types.js';

const INITIAL_STATE = {
  origemComercial: '',
  docUnico: '',
  nomeTitular: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_ORIGEM_COMERCIAL:
      return { ...state, origemComercial: action.payload };
    default:
      return state;
  }
};
