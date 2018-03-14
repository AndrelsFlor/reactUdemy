import { combineReducers } from 'redux';
import AutenticacaoReducer from './AutenticacaoReducer';
import ContratoReducer from './ContratoReducer';

export default combineReducers({
  AutenticacaoReducer: AutenticacaoReducer,
  ContratoReducer: ContratoReducer
});
