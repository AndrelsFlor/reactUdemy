import React, { Component } from 'react';
import TextField from 'react-native-md-textinput';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Picker
} from 'react-native';
import {
  modificaOrigemComercial,
  modificaDocUnucio,
  verificaCampoVazio
} from './../actions/ContratoActions';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class OrigemComercial extends Component {
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return (
      <View style={styles.pagina}>
        <View style={styles.container} />
        <View style={styles.viewTitulo}>
          <Text style={styles.titulo}>Cadastre um novo Cliente</Text>
          <Text style={styles.subtitulo}>Origem Comercial</Text>
          <Text style={styles.subtitulo}>2/x</Text>
        </View>
        <View style={styles.inputs}>
          {/* <TextField
            label={'Origem Comercial'}
            highlightColor={'#f4511e'}
            height={30}
            value={this.props.origemComercial}
            onChangeText={texto => this.props.modificaOrigemComercial(texto)}
          /> */}

          <Picker
            onValueChange={(itemValue, itemIndex) =>
              this.props.modificaOrigemComercial(itemValue)
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>

        <TouchableHighlight onPress={() => false} style={styles.btnAvancar}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.txtButton}>Avançar</Text>
          </View>
        </TouchableHighlight>
        {/* <TouchableHighlight
          onPress={() => Actions.principal()}
          style={styles.btnAvancar}
        >
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.txtButton}>Voltar</Text>
          </View>
        </TouchableHighlight> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  pagina: {
    backgroundColor: '#263238',
    flex: 1
  },
  container: {
    marginTop: 50
  },
  titulo: {
    fontSize: 20,
    color: '#ffab91'
  },
  subtitulo: {
    color: '#ffab91'
  },
  viewTitulo: {
    alignItems: 'center'
  },
  inputs: {
    borderRadius: 15,
    padding: 10,
    margin: 30,
    backgroundColor: '#fafafa'
  },
  btnAvancar: {
    margin: 30,
    backgroundColor: '#ff3d00',
    height: 30,
    borderRadius: 10
  },
  txtButton: {
    color: '#fff',
    fontSize: 20
  }
});

const mapStateToProps = state => {
  return {
    docUnico: state.ContratoReducer.docUnico,
    docUnicoMask: state.ContratoReducer.docUnicoMask,
    nomeTitular: state.ContratoReducer.nomeTitular,
    colot: state.ContratoReducer.color
  };
};
export default connect(mapStateToProps, {
  modificaOrigemComercial,
  modificaDocUnucio,
  verificaCampoVazio
})(OrigemComercial);
