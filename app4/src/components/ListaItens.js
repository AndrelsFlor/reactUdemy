import React from 'react';
import { View, Tex, ScrollView } from 'react-native';
import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends React.Component {
  constructor(props) {
    super(props);

    this.state = { listaItens: [] };
  }

  componentWillMount() {
    axios
      .get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(response => {
        this.setState({ listaItens: response.data });
      })
      .catch(() => {
        console.log('Erro ao recuperar os dados');
      });
  }
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#DDD' }}>
        {this.state.listaItens.map(item => {
          return <Itens key={item.titulo} item={item} />;
        })}
      </ScrollView>
    );
  }
}
