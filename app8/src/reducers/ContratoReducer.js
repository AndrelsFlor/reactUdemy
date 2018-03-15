import {
  MODIFICA_ORIGEM_COMERCIAL,
  MODIFICA_CPF_CNPJ,
  MODIFICA_NOME_TITULAR,
  VERIFICA_CAMPO_VAZIO
} from '../actions/types.js';

const INITIAL_STATE = {
  origemComercial: '',
  docUnico: '',
  docUnicoMask: '',
  nomeTitular: '',
  color: '#000'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_ORIGEM_COMERCIAL:
      return { ...state, origemComercial: action.payload };
    case MODIFICA_CPF_CNPJ:
      let textoMascarado = action.payload;
      if (textoMascarado) {
        var TextoPlano = textoMascarado.match(/\d+/g).join([]);
      }
      return { ...state, docUnico: TextoPlano, docUnicoMask: textoMascarado };

    default:
      return state;
  }
};
