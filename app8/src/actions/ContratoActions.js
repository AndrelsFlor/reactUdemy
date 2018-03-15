import {
  MODIFICA_ORIGEM_COMERCIAL,
  MODIFICA_CPF_CNPJ,
  MODIFICA_NOME_TITULAR,
  VERIFICA_CAMPO_VAZIO
} from '../actions/types.js';

export const modificaOrigemComercial = texto => {
  let textoMascarado = '';

  return {
    type: MODIFICA_ORIGEM_COMERCIAL,
    payload: texto
  };
};

export const modificaDocUnucio = texto => {
  if (texto.length == 3) {
    texto += '.';
  } else if (texto.length == 7) {
    texto += '.';
  } else if (texto.length == 11) {
    texto += '-';
  } else if (texto.length == 15) {
    texto = texto.match(/\d+/g).join([]);
    let textoAux = '';
    for (i = 0; i < texto.length; i++) {
      textoAux += texto[i];
      if (textoAux.length == 2) {
        textoAux += '.';
      } else if (textoAux.length == 6) {
        textoAux += '.';
      } else if (textoAux.length == 10) {
        textoAux += '/';
      } else if (textoAux.length == 15) {
        textoAux += '-';
      }
    }
    texto = textoAux;
  }

  return {
    type: MODIFICA_CPF_CNPJ,
    payload: texto
  };
};

// export const verificaCampoVazio = texto => {
//   if (texto == null || texto == '') {
//     alert('Todos os campos são obrigatórios');
//   }
// };
