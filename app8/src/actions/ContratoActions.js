import {
  MODIFICA_ORIGEM_COMERCIAL,
  MODIFICA_CPF_CNPJ,
  MODIFICA_NOME_TITULAR
} from '../actions/types.js';

export const modificaOrigemComercial = texto => {
  return {
    type: MODIFICA_ORIGEM_COMERCIAL,
    payload: texto
  };
};
