import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Topo, Resultado, Painel } from './src/components/index';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num1: '10', num2: '25', operacao: 'soma', resultado: '' };

    //usa-se o bind quando, mesmo executando a função de dentro de um componente filho, quer-se mante ro contexto do componente pai.
    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
  }

  calcular() {
    let resultado = 0;
    if (this.state.operacao == 'soma') {
      resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
    } else {
      resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
    }
    this.setState({
      resultado: resultado.toString() 
    });
  }

  atualizaValor(nomeCampo, numero) {
    const obj = [];

    obj[nomeCampo] = numero;

    this.setState(obj);
  }

  atualizaOperacao(operacao) {
    this.setState({
      operacao: operacao
    });
  }

  render() {
    return (
      <View>
        <Topo />
        <Resultado resultado={this.state.resultado} />
        <Painel
          num1={this.state.num1}
          num2={this.state.num2}
          operacao={this.state.operacao}
          calcular={this.calcular}
          atualizaValor={this.atualizaValor}
          atualizaOperacao={this.atualizaOperacao}
        />
      </View>
    );
  }
}
